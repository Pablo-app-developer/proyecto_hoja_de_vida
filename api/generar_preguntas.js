export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  const { tema, subtema, cantidad, dificultad } = req.body || {};
  if (!tema) { res.status(400).json({ error: 'Missing tema' }); return; }
  const n = Math.min(Math.max(parseInt(cantidad) || 5, 1), 10);
  const dif = dificultad || 'media';

  const TEMA_LABELS = {
    pedagogia: 'Pedagogía (Enseñar, Evaluar, Formar)',
    normatividad: 'Normatividad educativa colombiana (Ley 115, Decretos 1278, 1290, 1421, 1620, 915)',
    convivencia: 'Convivencia escolar (Ley 1620, Decreto 1965)',
    inclusion: 'Educación inclusiva (Decreto 1421, DUA, PIAR)',
    evaluacion: 'Evaluación del aprendizaje (Decreto 1290)',
    curriculo: 'Currículo (DBA, Lineamientos Curriculares, Estándares Básicos)',
    lectura_critica: 'Lectura crítica',
    razonamiento: 'Razonamiento cuantitativo',
    disciplinar: 'Matemáticas disciplinares (secundaria)',
    situacional: 'Juicio situacional - casos de aula',
    estrategias: 'Estrategias de examen y psicotécnica',
  };
  const temaLabel = TEMA_LABELS[tema] || tema;

  const prompt = `Eres un diseñador experto de pruebas del Concurso Docente de Colombia (CNSC). Genera ${n} preguntas tipo prueba escrita, componente "${temaLabel}"${subtema ? ', con enfoque específico en: ' + subtema : ''}, dificultad ${dif}.

El perfil del aspirante es docente de matemáticas secundaria (grado 6° a 11°), Ingeniero Industrial. Las preguntas deben ajustarse a este perfil.

Formato OBLIGATORIO: devuelve un JSON array válido, sin comentarios ni texto fuera del JSON. Cada pregunta debe tener esta estructura exacta:

[
  {
    "pregunta": "Texto de la pregunta como situación o afirmación pedagógica. Debe plantearse como caso real cuando aplique (grado específico, contexto, dilema).",
    "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
    "correcta": 2,
    "explicacion": "Por qué la opción correcta es la correcta (cita norma o teoría), por qué las otras son incorrectas o son distractores. Máximo 3 frases."
  }
]

Reglas:
- "correcta" es el índice (0-3) de la opción correcta
- Las 4 opciones deben ser plausibles; nada de opciones absurdamente falsas
- En preguntas de dificultad "dificil", al menos 2 opciones deben ser muy similares, diferenciándose por un matiz técnico (ej: DUA vs PIAR, formativa vs sumativa)
- Cita normas específicas cuando aplique (Ley X, Decreto Y)
- Español colombiano formal
- No repitas preguntas que ya existan en bancos públicos
- Devuelve SOLO el JSON array, nada antes ni después`;

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
        max_tokens: 3500,
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
    const raw = data.content[0].text.trim();
    // Extraer JSON array del texto
    const match = raw.match(/\[[\s\S]*\]/);
    if (!match) {
      res.status(502).json({ error: 'No se pudo parsear el JSON del generador', raw });
      return;
    }
    try {
      const preguntas = JSON.parse(match[0]);
      // Enriquecer con metadata
      const enriched = preguntas.map(q => ({
        ...q,
        tema, subtema: subtema || null, dificultad: dif,
        componente: tema,
      }));
      res.status(200).json({ preguntas: enriched });
    } catch(parseErr) {
      res.status(502).json({ error: 'JSON inválido del generador', detail: parseErr.message, raw });
    }
  } catch (e) {
    console.error('Handler error:', e);
    res.status(500).json({ error: e.message });
  }
}
