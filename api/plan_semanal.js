export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  const { diasAlExamen, horasPorDia, debilidades, fortalezas, fase, contextoExtra } = req.body || {};
  if (!diasAlExamen || !horasPorDia) {
    res.status(400).json({ error: 'Falta diasAlExamen u horasPorDia' });
    return;
  }

  const prompt = `Eres un asesor estratégico de preparación para el Concurso Docente de Colombia (CNSC). Debes generar un plan de estudio para los próximos 7 días para un aspirante específico.

**Contexto del aspirante:**
- Perfil: Ingeniero Industrial que concursa a Docente de Aula en Matemáticas Secundaria
- ETC objetivo: Piedecuesta (Santander)
- Días restantes al examen: ${diasAlExamen}
- Horas disponibles por día: ${horasPorDia}
- Fase actual de preparación: ${fase || 'intermedia'}
- Debilidades principales identificadas: ${(debilidades || []).join(', ') || 'Comunicación Escrita (nivel 2 Saber Pro)'}
- Fortalezas: ${(fortalezas || []).join(', ') || 'Razonamiento Cuantitativo nivel 4 percentil 97'}
- Contexto adicional: ${contextoExtra || 'ninguno'}

**Herramientas disponibles del portal:**
- Simulador de examen con 737+ preguntas (Examen Real, Cronometrado, Repaso de errores)
- 69 videos del Profe Curioso (David Tuirán)
- Repaso espaciado SM-2 (flashcards)
- Práctica de Redacción Argumentada
- Ensayo de Entrevista con grabación
- Mi Historia Narrativa (7 bloques)
- Analytics avanzado
- Generador IA de preguntas

**Instrucciones:**
Genera un plan de 7 días (Lunes a Domingo) considerando:
1. Prioriza la escrita (55% del concurso, eliminatoria mín 60/100)
2. Dedica tiempo específico a atacar la debilidad en Comunicación Escrita
3. Incluye al menos 1 simulacro completo cronometrado en la semana
4. Incluye 2 sesiones de redacción argumentada
5. Dedica 15 min diarios a flashcards SM-2 (repaso espaciado)
6. Incluye 1 día de descanso parcial (3-4 horas máximo) para sostener energía
7. Si quedan menos de 60 días al examen, aumenta intensidad y simulacros
8. Si quedan más de 180 días, incluye tiempo para ver videos nuevos del Profe Curioso

**Formato de salida:**
Usa markdown con esta estructura:

## 📅 Plan Semanal — [fecha]
**Horas totales esta semana:** X horas
**Enfoque principal:** [1 frase]

### Lunes
- **Mañana (X min):** [actividad concreta con herramienta específica]
- **Tarde (X min):** [actividad]
- **Hitos del día:** [1-2 cosas que lograr]

[... repetir para cada día ...]

### 🎯 Métricas a lograr esta semana
- Simulacros completos: X
- Promedio objetivo: X/100
- Redacciones: X
- Videos nuevos: X
- Horas totales: X

### 💡 Consejo clave para esta semana
[1 párrafo accionable sobre el foco estratégico]

Máximo 1200 palabras. Sé específico, concreto, usa las herramientas del portal por nombre.`;

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
        max_tokens: 2500,
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
