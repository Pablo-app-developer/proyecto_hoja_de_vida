export default async function handler(req, res) {
  // CORS for browser requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  const { pregunta, opciones, correcta, elegida, explicacion, componente, subtema } = req.body || {};
  if (!pregunta || !opciones) { res.status(400).json({ error: 'Missing fields' }); return; }

  const letters = ['A', 'B', 'C', 'D'];
  const prompt = `Eres un tutor experto en el Concurso Docente de Colombia. Un estudiante acaba de responder incorrectamente una pregunta del concurso.

Componente: ${componente || 'General'}${subtema ? ' / ' + subtema : ''}

Pregunta:
${pregunta}

Opciones:
${opciones.map((o, i) => `${letters[i]}. ${o}`).join('\n')}

Respuesta del estudiante: ${letters[elegida] || '?'}. ${opciones[elegida] || ''}
Respuesta correcta: ${letters[correcta]}. ${opciones[correcta]}

Explicacion base: ${explicacion || '(sin explicacion disponible)'}

Por favor:
1. Explica en 2-3 oraciones por que la respuesta correcta es la ${letters[correcta]}.
2. Di por que la opcion elegida (${letters[elegida] || '?'}) es incorrecta.
3. Da un tip practico para recordar este concepto en el examen.

Responde de forma directa, en español, sin encabezados, en maximo 150 palabras.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        messages: [{ role: 'user', content: prompt }]
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
