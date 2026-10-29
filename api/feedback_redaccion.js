export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  const { prompt, texto, tipo } = req.body || {};
  if (!prompt || !texto) { res.status(400).json({ error: 'Missing prompt or texto' }); return; }

  const sysPrompt = `Eres un evaluador experto del Concurso Docente de Colombia. Un aspirante a docente de matemáticas secundaria (Ing. Industrial que cambia de perfil) está practicando redacción argumentada porque su Saber Pro mostró Comunicación Escrita en nivel 2.

Tipo de ejercicio: ${tipo || 'Argumentativo'}

Prompt entregado:
${prompt}

Texto del aspirante:
"""
${texto.slice(0, 3000)}
"""

Evalúa el texto en 5 dimensiones (1-5 cada una) y da feedback accionable. Formato de respuesta exacto:

**Puntaje: X/25**

**Tesis clara (X/5):** [1 frase]
**Estructura (X/5):** [1 frase]
**Citas normativas o teóricas (X/5):** [1 frase]
**Ejemplo concreto (X/5):** [1 frase]
**Claridad y corrección gramatical (X/5):** [1 frase]

**3 mejoras prioritarias:**
1. [frase accionable concreta]
2. [frase accionable concreta]
3. [frase accionable concreta]

**Frase destacada:** "[cita la mejor frase del texto]"
**Frase a mejorar:** "[cita una frase débil y sugiere mejora]"

Sé directo, exigente pero constructivo. Máximo 250 palabras.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 600,
        messages: [{ role: 'user', content: sysPrompt }]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic error:', err);
      res.status(502).json({ error: 'Anthropic API error', detail: err });
      return;
    }

    const data = await response.json();
    res.status(200).json({ text: data.content[0].text });
  } catch (e) {
    console.error('Handler error:', e);
    res.status(500).json({ error: e.message });
  }
}
