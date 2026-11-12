// Banco de preguntas específicas del Decreto 1075 de 2015 (DUR Sector Educación)
// 40 preguntas situacionales con cascaritas sutiles en distractores y explicaciones
// Enfocadas en docente de aula de secundaria (matemáticas)

var PREGUNTAS_DECRETO_1075 = [
  {
    "id": "L075_01",
    "componente": "normatividad",
    "fuente": "decreto_1075_2015",
    "subtema": "Naturaleza del DUR",
    "dificultad": "media",
    "pregunta": "En una reunión de área, un docente nuevo sostiene que el Decreto 1860 de 1994 fue derogado y por eso 'ya no aplica' el PEI tal como lo conocíamos. Otro colega dice que sigue vigente. ¿Cuál es la lectura normativa correcta sobre el Decreto 1075 de 2015?",
    "opciones": [
      "El Decreto 1075 derogó la Ley 115 y los decretos reglamentarios anteriores, por eso solo rige el DUR.",
      "El Decreto 1075 compila los decretos reglamentarios del sector educación sin modificarlos: las reglas del 1860 siguen vigentes, pero ahora numeradas dentro del DUR.",
      "El Decreto 1075 reemplazó únicamente al Decreto 1290 de 2009, los demás decretos reglamentarios quedaron intactos.",
      "El Decreto 1075 es solo una guía orientadora del MEN sin fuerza vinculante, por eso las instituciones pueden decidir si lo aplican."
    ],
    "correcta": 1,
    "explicacion": "El Decreto 1075 de 2015 es un Decreto Único Reglamentario (DUR): compila en un solo cuerpo normativo los decretos reglamentarios del sector educación (1860, 1290, 1850, 4791, 1965, 1421, etc.) sin alterar su contenido. El contenido del 1860 sigue vigente pero ahora se cita como Art. 2.3.3.1.X del 1075. Trampa: 'derogó' es incorrecto porque la técnica de compilación preserva vigencia, no la elimina."
  },
  {
    "id": "L075_02",
    "componente": "normatividad",
    "subtema": "PEI - obligatoriedad y componentes",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Una IE privada de reciente creación afirma que, como es de iniciativa particular, 'no está obligada a tener PEI' y basta con su propio reglamento interno. ¿Qué establece el Decreto 1075 sobre esto?",
    "opciones": [
      "Es correcto: el PEI solo es obligatorio para instituciones oficiales según el Art. 2.3.3.1.4.1.",
      "El PEI es obligatorio para TODO establecimiento educativo, oficial o privado; además debe registrarse ante la Secretaría de Educación.",
      "Las IE privadas pueden sustituir el PEI por un Proyecto Educativo Comunitario (PEC) si así lo decide su propietario.",
      "El PEI solo es obligatorio cuando la institución ofrece educación media; en básica es optativo."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.1.4.1 del Decreto 1075 (compila Art. 14 Decreto 1860): TODO establecimiento educativo debe elaborar y poner en práctica un PEI, oficial o privado, y registrarse en la Secretaría de Educación. El PEC existe pero es para comunidades indígenas (etnoeducación), no sustituye el PEI general."
  },
  {
    "id": "L075_03",
    "componente": "normatividad",
    "subtema": "Consejo Directivo - composición",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "En la primera reunión del año, el rector convoca al Consejo Directivo y presenta a sus integrantes: él mismo, 2 docentes, 2 padres de familia, 1 estudiante del último grado y 1 egresado. Un padre pregunta por el representante del sector productivo. El rector responde 'no es obligatorio porque somos urbanos'. ¿Es correcta su afirmación según el Decreto 1075?",
    "opciones": [
      "Sí: el representante del sector productivo solo es obligatorio en zonas rurales o técnicas agropecuarias.",
      "No: el Consejo Directivo debe incluir un representante del sector productivo sin distinción de ubicación (Art. 2.3.3.1.5.4); omitirlo lo deja mal integrado.",
      "Sí: en instituciones privadas no se exige; en oficiales sí, pero puede ser reemplazado por un segundo egresado.",
      "No: el sector productivo se requiere solo si la IE ofrece media técnica, no en media académica."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.1.5.4 del Decreto 1075 (compila Art. 21 del 1860): el Consejo Directivo se compone de rector, 2 docentes, 2 padres (uno elegido por Asamblea y otro por Asociación de Padres), 1 estudiante del último grado, 1 egresado y 1 representante del sector productivo. Este último es OBLIGATORIO en toda IE, no solo técnicas ni rurales. Error típico: creer que depende de la modalidad."
  },
  {
    "id": "L075_04",
    "componente": "normatividad",
    "subtema": "Consejo Académico - naturaleza y funciones",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Una docente propone que el Consejo Académico decida la expulsión disciplinaria de un estudiante por reiteradas faltas de respeto. El rector le indica que esa no es su competencia. ¿Qué dice el Decreto 1075 sobre las funciones del Consejo Académico?",
    "opciones": [
      "El Consejo Académico es la instancia máxima disciplinaria; sí puede decretar sanciones graves.",
      "El Consejo Académico es órgano consultor en lo académico y pedagógico (currículo, SIE, evaluación): no decide sobre disciplina. Las sanciones corresponden al Comité de Convivencia / Consejo Directivo según competencia.",
      "El Consejo Académico decide todo lo relacionado con convivencia y reemplaza al Comité de Convivencia cuando este no sesiona.",
      "El Consejo Académico aplica solo sanciones leves; las graves las decide la Asamblea de Padres."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.1.5.7 del Decreto 1075 (compila Art. 24 del 1860): el Consejo Académico es órgano consultor del Consejo Directivo en materia académica y pedagógica (estudio del currículo, plan de estudios, SIE, criterios de evaluación). NO tiene competencias disciplinarias. La convivencia la maneja el Comité de Convivencia (Ley 1620, compilada en Título 5 del DUR)."
  },
  {
    "id": "L075_05",
    "componente": "normatividad",
    "subtema": "Áreas obligatorias - educación religiosa",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "Un padre de familia solicita que su hijo sea eximido de la clase de educación religiosa por creencias distintas a las del catolicismo que allí se enseña. La coordinadora responde que 'es área obligatoria, no puede exentarse'. ¿Es correcta su posición?",
    "opciones": [
      "Sí: todas las áreas obligatorias son de recibido forzoso para el estudiante.",
      "No: la educación religiosa es área obligatoria para la IE (debe ofrecerla), pero el estudiante tiene derecho a NO recibirla por objeción de conciencia según la Constitución y la Ley 115; la IE debe prever actividad alternativa.",
      "Sí, pero solo si la IE es confesional; si es laica se puede eximir.",
      "No: la educación religiosa fue retirada del listado de áreas obligatorias por el Decreto 1075."
    ],
    "correcta": 1,
    "explicacion": "El Art. 23 de la Ley 115 y el Art. 2.3.3.1.6.1 del 1075 listan educación religiosa entre las áreas obligatorias (la IE DEBE ofrecerla). Pero la libertad de conciencia (Art. 18 CP) y la Ley 133 de 1994 permiten que el estudiante se abstenga; la IE debe tener alternativa pedagógica. Cascarita: 'obligatoria' se refiere a la oferta institucional, no a que el estudiante deba cursarla."
  },
  {
    "id": "L075_06",
    "componente": "normatividad",
    "subtema": "Áreas obligatorias - educación básica secundaria",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Un rector reorganiza el plan de estudios y propone eliminar 'Tecnología e Informática' para fortalecer matemáticas y lengua. Argumenta que son 'áreas más importantes para las pruebas Saber'. ¿Procede su propuesta según el Decreto 1075?",
    "opciones": [
      "Sí: la IE tiene autonomía curricular total para asignar y eliminar áreas.",
      "No: el Art. 2.3.3.1.6.1 fija 9 áreas obligatorias y fundamentales de la básica; Tecnología e Informática es una de ellas y no puede suprimirse.",
      "Sí, pero debe compensarse creando un proyecto transversal de tecnología.",
      "Sí, siempre y cuando lo apruebe el Consejo Académico."
    ],
    "correcta": 1,
    "explicacion": "El Art. 2.3.3.1.6.1 del DUR (Ley 115 Art. 23) establece 9 áreas obligatorias y fundamentales para la básica: Ciencias Naturales y Educación Ambiental; Ciencias Sociales, Historia, Geografía, Constitución Política y Democracia; Educación Artística y Cultural; Educación Ética y Valores Humanos; Educación Física, Recreación y Deportes; Educación Religiosa; Humanidades (Lengua castellana + idioma extranjero); Matemáticas; Tecnología e Informática. La autonomía curricular (Art. 77 Ley 115) permite organizar contenidos, no eliminar áreas obligatorias."
  },
  {
    "id": "L075_07",
    "componente": "normatividad",
    "subtema": "Proyectos pedagógicos transversales",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "En la jornada pedagógica, el coordinador reparte los proyectos pedagógicos transversales: medio ambiente al profesor de ciencias, democracia al de sociales, educación sexual al orientador, tiempo libre al profesor de educación física. Un docente nuevo pregunta si los proyectos 'son del docente asignado'. ¿Qué dice el Decreto 1075?",
    "opciones": [
      "Sí: cada proyecto tiene un titular responsable y los demás docentes solo colaboran si así lo deciden.",
      "No: los proyectos transversales se desarrollan a lo largo de todo el plan de estudios y vinculan a TODAS las áreas; un coordinador no los agota, los transversaliza.",
      "Sí, pero la responsabilidad final es del rector como representante legal.",
      "No: los proyectos transversales ya no son obligatorios desde la compilación del 1075."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.1.6.3 del 1075 (Art. 36 del 1860 y Art. 14 Ley 115): los proyectos pedagógicos transversales (ambiente, democracia, educación sexual, aprovechamiento del tiempo libre, estudio de la Constitución, cátedra de la paz, etc.) NO son asignaturas aisladas con un docente titular: atraviesan todo el currículo y todas las áreas. Un coordinador puede liderar pero no 'posee' el proyecto. Cascarita típica: confundir liderazgo con exclusividad."
  },
  {
    "id": "L075_08",
    "componente": "normatividad",
    "subtema": "Evaluación - escala nacional",
    "fuente": "decreto_1075_2015",
    "dificultad": "facil",
    "pregunta": "En reunión de área, un docente propone que su SIE use una escala numérica de 1 a 5 'porque lo exige el Decreto 1075'. Otra colega sostiene que la escala nacional del DUR es cualitativa. ¿Quién tiene razón?",
    "opciones": [
      "El primer docente: el 1075 impone escala numérica 1-5 para toda Colombia.",
      "La colega: el Art. 2.3.3.3.3.5 (compila Art. 5 del 1290) establece una escala NACIONAL de cuatro niveles — Superior, Alto, Básico, Bajo — y cada IE puede tener su escala institucional pero debe equivalerse a la nacional.",
      "Ambos erran: el 1075 permite libre escala sin equivalencia nacional.",
      "Ambos erran: el 1075 impone exactamente los descriptores 'Excelente, Bueno, Aceptable, Insuficiente'."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.3.3.5 del DUR (compila Art. 5 del Decreto 1290): escala nacional de valoración con cuatro niveles — Superior, Alto, Básico, Bajo. Cada IE, en su SIE, define su propia escala (numérica, por letras, etc.), pero DEBE establecer equivalencia con la nacional para reportes a Secretaría, boletines interinstitucionales, etc. La escala institucional no reemplaza a la nacional."
  },
  {
    "id": "L075_09",
    "componente": "normatividad",
    "subtema": "Promoción - 1 área perdida",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "Una estudiante de octavo pierde el área de matemáticas con desempeño bajo al final del año. En Comisión de Evaluación y Promoción, un docente dice 'reprobó, repite el año'. Otro dice 'puede ser promovida con plan de refuerzo'. ¿Qué establece el Decreto 1075 sobre esta decisión?",
    "opciones": [
      "La promoción con un área perdida es automática según el DUR: el estudiante PASA siempre.",
      "La no promoción con un área perdida es automática: el estudiante SIEMPRE repite.",
      "El DUR no fija esa regla: cada IE define en su SIE los criterios de promoción, respetando la escala nacional. Perder un área puede o no causar reprobación según el SIE propio.",
      "Solo las áreas de matemáticas y lengua son eliminatorias; las demás no cuentan para reprobación."
    ],
    "correcta": 2,
    "explicacion": "El Decreto 1290 (compilado en Art. 2.3.3.3.3.X del 1075) eliminó la antigua regla de 'promoción automática con 1 área perdida' del Decreto 230/2002. Ahora cada IE define en su SIE los criterios de promoción. La trampa está en recordar la vieja regla del 230 como si siguiera vigente. El SIE autónomo es la regla actual, respetando siempre la escala nacional."
  },
  {
    "id": "L075_10",
    "componente": "normatividad",
    "subtema": "Promoción anticipada",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "En mayo, un padre pide la promoción anticipada de su hijo de séptimo a octavo porque 'ya se sabe todos los temas'. El coordinador le dice que ya no se puede 'porque se hace solo al inicio del año'. ¿Qué dice el Decreto 1075?",
    "opciones": [
      "El coordinador se equivoca: la promoción anticipada se puede pedir en cualquier momento del año.",
      "El coordinador tiene razón: la promoción anticipada se tramita durante el PRIMER PERIODO académico del año, por desempeño superior demostrado en el grado anterior; en mayo ya se agotó el plazo.",
      "Se puede promover solo si el estudiante demuestra desempeño superior en pruebas externas (Saber).",
      "La promoción anticipada fue derogada por el Decreto 1075."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.3.3.7 del DUR (compila Art. 7 Decreto 1290): la promoción anticipada se da durante el PRIMER PERIODO académico, por recomendación de la Comisión de Evaluación y Promoción, cuando el estudiante demuestra desempeño SUPERIOR en todas las áreas del grado que cursa. Es anticipada del grado en curso, no una evaluación extraordinaria. La cascarita: pensar que el SIE puede abrir el plazo en cualquier momento."
  },
  {
    "id": "L075_11",
    "componente": "normatividad",
    "subtema": "Jornada escolar",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Un rector reclama al jefe de área de matemáticas porque imparte '20 horas semanales con estudiantes'. El docente responde que cumple la norma. Según el Decreto 1075, Título 4, Capítulo de Jornada Escolar, ¿cuántas horas semanales mínimas de clase efectiva con estudiantes corresponden a Secundaria y Media?",
    "opciones": [
      "20 horas semanales (y el docente cumple).",
      "22 horas semanales efectivas en secundaria y media (el docente estaría 2 horas por debajo); 25 en primaria; 20 en preescolar.",
      "30 horas semanales (jornada única obligatoria para todos los docentes).",
      "15 horas semanales efectivas en secundaria y 20 en primaria."
    ],
    "correcta": 1,
    "explicacion": "El Decreto 1850 de 2002 (compilado en Parte 4 del DUR, Art. 2.4.3.4.X): jornada semanal de los docentes es de 30 horas semanales de permanencia en la IE, de las cuales son clase efectiva con estudiantes 25 en primaria, 22 en secundaria y media, 20 en preescolar. Las demás horas de las 30 son actividades complementarias. 40 horas son la asignación laboral (30 en la IE + hasta 10 fuera para planeación)."
  },
  {
    "id": "L075_12",
    "componente": "normatividad",
    "subtema": "Calendario académico",
    "fuente": "decreto_1075_2015",
    "dificultad": "facil",
    "pregunta": "Una secretaría de educación fija el calendario académico A. Un padre reclama: 'mi hijo solo va al colegio 40 semanas al año, los otros niños del mundo van más'. El rector le explica la normativa. ¿Qué establece el Decreto 1075 sobre semanas lectivas?",
    "opciones": [
      "48 semanas de trabajo académico y 4 de vacaciones (educación básica/media).",
      "40 semanas de trabajo académico con estudiantes + 5 semanas de desarrollo institucional (sin estudiantes) + 7 semanas de vacaciones = 52.",
      "36 semanas académicas, 10 de vacaciones y 6 de desarrollo institucional.",
      "42 semanas efectivas con estudiantes, 10 de vacaciones."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.4.3.4.4 y ss del DUR (compila Decreto 1850 de 2002): año escolar = 40 semanas de trabajo académico con estudiantes + 5 semanas de desarrollo institucional (planeación, evaluación, capacitación, SIN estudiantes) + 7 semanas de vacaciones para los docentes. Total 52. La cascarita: '40 semanas' no equivale a 'toda la jornada del año laboral del docente'; el docente trabaja 45 semanas (40+5)."
  },
  {
    "id": "L075_13",
    "componente": "normatividad",
    "subtema": "Servicio social obligatorio del estudiantado",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "Una estudiante de grado 11 solicita a su institución homologar como servicio social las 40 horas de voluntariado que hizo en la pandemia cuando estaba en grado 8. La coordinadora acepta y suma. Otro docente objeta. Según el Decreto 1075, ¿cuál es la regla?",
    "opciones": [
      "La coordinadora acierta: cualquier actividad social previa demostrada puede homologarse.",
      "El docente objeta con razón: el Servicio Social es de 80 HORAS realizadas durante los grados 10° y 11°; actividades anteriores a esos grados no cuentan.",
      "Se pueden homologar máximo 20 horas de actividades previas a 10°.",
      "El servicio social ya no es requisito para obtener el título de bachiller desde el Decreto 1075."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.1.6.4 del DUR (compila Resolución 4210 de 1996): el Servicio Social Estudiantil Obligatorio es un REQUISITO INDISPENSABLE para obtener el título de bachiller académico; mínimo 80 HORAS, realizadas durante los grados 10° y 11° únicamente, con participación activa en programas definidos por el PEI. Actividades fuera de ese marco temporal y pedagógico no se homologan."
  },
  {
    "id": "L075_14",
    "componente": "normatividad",
    "subtema": "Manual de Convivencia - obligatoriedad",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Una IE recién creada decide no elaborar manual de convivencia 'porque es un centro de innovación con pedagogía libertaria'. El padre de un estudiante recién matriculado pide verlo. ¿Qué establece el Decreto 1075?",
    "opciones": [
      "Las IE pueden eximirse del manual si su modelo pedagógico es de pedagogías alternativas.",
      "Todo establecimiento educativo DEBE tener manual de convivencia, construido con participación de la comunidad educativa e integrado al PEI; el padre tiene derecho a conocerlo y aceptarlo en la matrícula.",
      "El manual solo es obligatorio en instituciones oficiales.",
      "El manual puede ser oral/consuetudinario si así se consigna en el Consejo Directivo."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.5.4.4 del DUR (compila Ley 1620 y Decreto 1965 de 2013 + Art. 87 Ley 115): el Manual de Convivencia es OBLIGATORIO en todo establecimiento educativo, oficial o privado; hace parte del PEI; se construye con participación de la comunidad y se da a conocer en la matrícula. Los padres lo aceptan al matricular. Ninguna pedagogía 'alternativa' exime de esta obligación."
  },
  {
    "id": "L075_15",
    "componente": "convivencia",
    "subtema": "Tipo I vs Tipo II",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "En el descanso, dos estudiantes de octavo se pelean a golpes. Es la tercera pelea del mes entre ellos; en la última uno le dejó un morado al otro. La docente que los separa duda entre clasificar como Tipo I o Tipo II. Según el Decreto 1075 ¿qué clasificación aplica?",
    "opciones": [
      "Tipo I: son conflictos personales entre estudiantes.",
      "Tipo II: hay reiteración (acoso-like o riñas repetidas) y afectación física/psicológica sin incapacidad médica grave ni delito. Activa protocolo del Comité de Convivencia.",
      "Tipo III: toda pelea con contacto físico es automáticamente delito.",
      "No se clasifica: al ser menores de 14 años, no hay protocolo aplicable."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.5.4.2.6 del DUR (compila Decreto 1965): Tipo I = conflictos esporádicos SIN daño. Tipo II = agresiones físicas, verbales, psicológicas, acoso, con daño al bienestar pero SIN que constituya delito o incapacidad médica grave; INCLUYE las situaciones repetidas/sistemáticas. Tipo III = presuntos delitos o afectaciones graves (abuso sexual, porte de armas, lesiones graves). La reiteración y el morado llevan al Tipo II."
  },
  {
    "id": "L075_16",
    "componente": "normatividad",
    "subtema": "Comité de Convivencia - presidencia y periodicidad",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Una docente integrante del Comité Escolar de Convivencia propone que ella sea la coordinadora porque 'el rector no asiste'. El personero estudiantil apoya la idea. ¿Qué establece el Decreto 1075?",
    "opciones": [
      "La propuesta procede: el comité puede elegir su presidente por votación.",
      "No procede: el Art. 2.3.5.2.3.4 del DUR dispone que el Comité Escolar de Convivencia es PRESIDIDO POR EL RECTOR. Además debe reunirse mínimo cada 2 meses y extraordinariamente cuando lo requiera.",
      "Procede solo si el rector lo delega por escrito al coordinador académico.",
      "Procede porque la Ley 1620 no asignó presidencia; la fija cada IE en el PEI."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.5.2.3.4 del DUR (compila Art. 12 Ley 1620 y Decreto 1965): el Comité Escolar de Convivencia es presidido por el rector (indelegable como rol instalado) y se reúne mínimo cada 2 meses. La inasistencia reiterada del rector es incumplimiento, no una habilitación para redistribuir la presidencia."
  },
  {
    "id": "L075_17",
    "componente": "inclusion",
    "subtema": "PIAR - quién lo lidera",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Llega al aula de matemáticas de noveno una estudiante con discapacidad intelectual leve, diagnóstico de EPS. El rector le dice al docente de aula que 'esto es responsabilidad del docente de apoyo pedagógico, él hace el PIAR'. ¿Es correcto según el Decreto 1075?",
    "opciones": [
      "Sí: el docente de apoyo es el responsable único del PIAR por formación especializada.",
      "No: el PIAR lo LIDERA el DOCENTE DE AULA, con apoyo del docente de apoyo pedagógico, orientador y familia (Art. 2.3.3.5.2.3.5 del DUR compila Decreto 1421).",
      "Sí: si el estudiante tiene diagnóstico médico, el PIAR lo hace la EPS.",
      "No: el PIAR lo elabora el Consejo Académico colegiadamente."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.5.2.3.5 y ss del DUR (compila Decreto 1421 de 2017): el PIAR (Plan Individual de Ajustes Razonables) es elaborado, implementado y evaluado por el DOCENTE DE AULA, con el apoyo del docente de apoyo pedagógico, orientador y familia. El rol del docente de apoyo es acompañar, orientar y co-planear, no reemplazar al docente de aula. Confusión típica para descartar."
  },
  {
    "id": "L075_18",
    "componente": "inclusion",
    "subtema": "DUA vs PIAR",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "En un aula de 35 estudiantes hay 3 con discapacidad diagnosticada. Una docente asegura que 'basta con hacer DUA, no necesito PIAR'. Un colega dice que 'basta con PIAR, no necesito DUA'. Según el Decreto 1075, ¿qué es correcto?",
    "opciones": [
      "La primera: el DUA reemplaza al PIAR cuando hay más de dos estudiantes con discapacidad.",
      "El segundo: el PIAR hace innecesario el DUA porque es individual y específico.",
      "Ambas estrategias son complementarias y obligatorias: el DUA es la base universal para TODO el aula (Diseño Universal del Aprendizaje) y el PIAR individualiza ajustes razonables cuando el DUA no es suficiente para un estudiante específico.",
      "Son opcionales: la IE decide cuál usar según su PEI."
    ],
    "correcta": 2,
    "explicacion": "Art. 2.3.3.5.2.3.4 y 2.3.3.5.2.3.5 del DUR: el DUA es universal, preventivo, se diseña para TODOS los estudiantes desde el principio; el PIAR es individual, reactivo-complementario, para estudiantes cuyos apoyos requieren concreción personalizada (ajustes razonables). No son sustitutos: se complementan. Trampa clásica: creer que uno hace innecesario el otro."
  },
  {
    "id": "L075_19",
    "componente": "normatividad",
    "subtema": "Educación para adultos - CLEI",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "Una persona de 17 años con grado 5° de primaria aprobado solicita matricularse en 'educación para adultos'. El coordinador lo niega porque 'solo se atiende desde los 18 años'. Según el Decreto 1075, ¿es correcto?",
    "opciones": [
      "Sí: la educación para adultos exige mayoría de edad estricta (18 años).",
      "No: el DUR (Art. 2.3.3.5.3.X) permite el acceso a CLEI para personas con 15 años o más en extraedad respecto a la básica y 18 años o más para la media; aplica también para jóvenes con 3 años o más de desfase académico/edad.",
      "No: la edad mínima es 21 años para educación de adultos.",
      "Sí: por debajo de 18 años el estudiante debe ingresar a educación regular obligatoriamente, sin excepción."
    ],
    "correcta": 1,
    "explicacion": "Parte 3, Título 3 del DUR (compila Decreto 3011 de 1997): la educación para adultos se organiza en CLEI (Ciclos Lectivos Especiales Integrados). Pueden ingresar personas que hayan cumplido 13 años o más y estén en extraedad para la básica (desfase académico mínimo 2 años) o 15 años o más para iniciar un CLEI de básica; 18 años o más para CLEI de media (o excepcionalmente menores en extraedad). No es un piso rígido de 18."
  },
  {
    "id": "L075_20",
    "componente": "normatividad",
    "subtema": "Fondo de Servicios Educativos (FSE) - ordenador del gasto",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "La Asociación de Padres propone que uno de sus miembros 'firme los cheques del FSE' para mayor transparencia. El coordinador académico también se ofrece para ordenar gastos en ausencia del rector. ¿Qué dice el Decreto 1075?",
    "opciones": [
      "Cualquier miembro del Consejo Directivo puede ordenar gastos del FSE.",
      "El ORDENADOR DEL GASTO del FSE es ÚNICAMENTE el RECTOR; es una competencia indelegable. El Consejo Directivo aprueba el presupuesto, pero no firma pagos.",
      "El tesorero del FSE es el pagador del cheque en nombre del Consejo Directivo.",
      "La Asociación de Padres sí puede firmar junto con el rector para dar aval ciudadano."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.1.6.3.1 y ss del DUR (compila Decreto 4791 de 2008): el Fondo de Servicios Educativos tiene un ordenador del gasto único e indelegable: el RECTOR. El Consejo Directivo aprueba el presupuesto y los proyectos. El auxiliar administrativo apoya con póliza de manejo. Ningún padre firma pagos."
  },
  {
    "id": "L075_21",
    "componente": "normatividad",
    "subtema": "FSE - prohibiciones",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "El rector propone usar parte del FSE para 'pagar bonificaciones a los docentes mejor evaluados' y financiar 'obras de ampliación del bloque de aulas'. ¿Qué establece el Decreto 1075?",
    "opciones": [
      "Ambas son permitidas si lo aprueba el Consejo Directivo.",
      "Ambas están PROHIBIDAS: el FSE no puede pagar salarios/bonificaciones docentes (lo hace la Secretaría de Educación) ni obras de infraestructura mayor (que corresponden al ente territorial).",
      "Las bonificaciones son posibles; la obra no.",
      "La obra es posible; las bonificaciones no."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.1.6.3.11 del DUR (compila Decreto 4791 de 2008): el FSE no puede destinarse a: pagos de personal (es competencia del ente territorial), obras de infraestructura mayores, bonificaciones a docentes, créditos, donaciones, pago de comisiones. Puede financiar materiales didácticos, mantenimientos menores, transporte específico de proyectos, salidas pedagógicas, etc. La cascarita: pensar que lo 'pedagógico' habilita cualquier gasto."
  },
  {
    "id": "L075_22",
    "componente": "normatividad",
    "subtema": "Gobierno Escolar - personero",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "Un estudiante de décimo se postula como personero estudiantil. El rector lo rechaza porque 'el personero es siempre del último grado'. Otro docente dice que puede ser de cualquier grado. Según el Decreto 1075, ¿quién puede ser personero?",
    "opciones": [
      "Debe ser siempre de último grado (11°).",
      "Puede ser cualquier estudiante del ÚLTIMO GRADO que ofrezca el establecimiento (Art. 2.3.3.1.5.11); si ofrece hasta 11° será de 11°, si ofrece hasta 9° será de 9°.",
      "Puede ser de cualquier grado de bachillerato.",
      "Debe tener mínimo 15 años de edad."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.1.5.11 del DUR (compila Art. 28 del 1860): el personero es un estudiante del ÚLTIMO GRADO QUE OFREZCA LA INSTITUCIÓN. En IE que solo lleguen a 9° será de 9°; en las que lleguen a 11°, será de 11°. No es necesariamente 11°. Cascarita: generalizar 'el personero es de once' ignorando IE de básica sin media."
  },
  {
    "id": "L075_23",
    "componente": "normatividad",
    "subtema": "Gobierno Escolar - funciones del rector",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Un docente nuevo pregunta si es función del rector asignar el calendario académico. Su mentor le dice que no, que esa competencia es más amplia. Según el Decreto 1075, ¿quién fija el calendario académico?",
    "opciones": [
      "El rector, dentro de su autonomía institucional.",
      "La Secretaría de Educación Certificada (ente territorial) fija el calendario académico; el rector lo ejecuta y puede hacer ajustes operativos con aprobación del Consejo Directivo, respetando el calendario oficial.",
      "El Consejo Académico lo define cada año.",
      "El MEN fija el calendario con rigidez nacional idéntico para todas las regiones."
    ],
    "correcta": 1,
    "explicacion": "Parte 4 del DUR + Ley 715 de 2001: las Secretarías de Educación Certificadas (Entidades Territoriales Certificadas) fijan el calendario académico anual (fechas de inicio, fin, semanas lectivas, desarrollo institucional, vacaciones) atendiendo al mínimo de 40 semanas con estudiantes. El rector ejecuta y organiza internamente. Cascarita: confundir organización interna con fijación oficial."
  },
  {
    "id": "L075_24",
    "componente": "normatividad",
    "subtema": "Jornada única",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Un rector afirma que en su IE 'ya implementa jornada única porque los niños están 8 horas en el colegio con descansos incluidos'. Según el Decreto 1075 (compila Decreto 501/2016), ¿qué define jornada única?",
    "opciones": [
      "Permanencia de 8 horas con descansos incluidos.",
      "HORAS EFECTIVAS EN AULA (no de permanencia): mínimo 7 horas efectivas en primaria y 8 en secundaria/media (y 6 en preescolar) durante los días de clase.",
      "Es el calendario de 180 días académicos.",
      "Significa que la IE ofrece una sola jornada (mañana o tarde) sin la otra."
    ],
    "correcta": 1,
    "explicacion": "Parte 3, Título 6 del DUR (compila Decreto 501 de 2016): la jornada única se define por HORAS EFECTIVAS DE DESARROLLO DE ÁREAS OBLIGATORIAS Y FUNDAMENTALES con estudiantes: mínimo 6h preescolar, 7h primaria, 8h secundaria y media. No es permanencia bruta ni descansos. La traducción anual es: 1200 horas primaria, 1200 secundaria, 1200 media."
  },
  {
    "id": "L075_25",
    "componente": "normatividad",
    "subtema": "Plan de Estudios",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Una docente afirma que su plan de estudios 'es solo el cronograma de los temas por periodo'. La coordinadora le pide revisar la norma. Según el Decreto 1075, ¿qué componentes mínimos tiene un plan de estudios?",
    "opciones": [
      "Un cronograma de temas por bimestre y las notas esperadas.",
      "Intención e identificación de contenidos por grupo/grado, logros/competencias por área y grado, distribución del tiempo, criterios de evaluación y promoción, metodología, recursos y uso de materiales, indicadores de desempeño; es un COMPONENTE del PEI.",
      "Es el libro de texto adoptado por la IE para cada área.",
      "Es el calendario oficial de la Secretaría de Educación aplicado a la IE."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.1.7.1 del DUR (compila Art. 79 Ley 115 y Art. 38 del 1860): el plan de estudios describe la intención e identificación de contenidos, logros y competencias por área y grado, distribución del tiempo, criterios y procedimientos de evaluación y promoción, metodología, recursos, indicadores de desempeño. Es parte del PEI y del currículo, no un simple cronograma."
  },
  {
    "id": "L075_26",
    "componente": "pedagogia",
    "subtema": "Comisión de Evaluación y Promoción",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "Al final de cada periodo, un rector decide que la Comisión de Evaluación y Promoción 'no es necesaria porque el SIE ya define todo'. ¿Qué dice el Decreto 1075?",
    "opciones": [
      "Es correcto: la Comisión es optativa si el SIE está bien diseñado.",
      "No: la Comisión de Evaluación y Promoción es una instancia que el SIE debe prever como parte de sus 11 componentes y funciona para analizar casos de desempeño bajo y promoción. Suprimirla desdibuja el SIE.",
      "La Comisión solo es obligatoria en instituciones oficiales; en privadas es opcional.",
      "La Comisión fue reemplazada por el Comité de Convivencia según el DUR."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.3.3.4 del DUR (compila Art. 4 del 1290): el SIE debe contener 11 aspectos, entre ellos las instancias, procedimientos y mecanismos de atención y resolución de reclamaciones de estudiantes y padres. La Comisión de Evaluación y Promoción (originada en el 230/2002 pero mantenida como buena práctica en el 1290/SIE) analiza desempeños bajos, promociones y reclamaciones. Que el SIE la regule no la elimina; la institucionaliza."
  },
  {
    "id": "L075_27",
    "componente": "normatividad",
    "subtema": "SIE - componentes",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "En una jornada de revisión del SIE, una docente propone 'simplificarlo' quitando los componentes que 'no aplican en secundaria'. Entre otros, propone eliminar 'estrategias de apoyo para resolver situaciones pedagógicas pendientes' y 'instancia de reclamaciones'. ¿Qué dice el Decreto 1075 sobre el SIE?",
    "opciones": [
      "Cada IE puede eliminar componentes del SIE según su criterio.",
      "El SIE debe contener como mínimo 11 componentes definidos en el Art. 2.3.3.3.3.4 (compila Art. 4 del 1290); ninguno puede suprimirse, aunque la IE define su alcance.",
      "El SIE solo debe tener 3 componentes: escala, criterios de promoción y plan de recuperación.",
      "El SIE es una recomendación del MEN, no una obligación normativa."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.3.3.4 del DUR: el SIE debe contener como MÍNIMO: criterios de evaluación y promoción; escala valorativa y equivalencia con la nacional; estrategias de valoración integral de los desempeños; acciones de seguimiento para el mejoramiento; estrategias de apoyo; acciones para garantizar que directivos y docentes cumplan procesos de evaluación; periodicidad de entrega de informes; estructura de informes; instancias y procedimientos de reclamación; mecanismos de participación de la comunidad; creación y funcionamiento de instancia que valide el SIE. Son 11 aspectos no reducibles."
  },
  {
    "id": "L075_28",
    "componente": "normatividad",
    "subtema": "Boletines de calificaciones",
    "fuente": "decreto_1075_2015",
    "dificultad": "facil",
    "pregunta": "Un padre reclama que el boletín de notas solo tiene números y no indica qué significan. El SIE de la IE usa escala 1-10 propia. ¿Qué exige el Decreto 1075 sobre los informes de desempeño?",
    "opciones": [
      "El boletín puede tener solo la escala propia; la equivalencia nacional se envía al final del año.",
      "Los informes de desempeño deben ser claros, comprensibles, con juicios valorativos cualitativos y cuantitativos y CON EQUIVALENCIA A LA ESCALA NACIONAL (Superior/Alto/Básico/Bajo) para facilitar movilidad y comprensión del padre.",
      "El Decreto 1075 no regula los boletines; es decisión libre de cada IE.",
      "Debe tener solo los niveles nacionales, sin notas numéricas."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.3.3.4 numeral 7 y 8 del DUR: la periodicidad y estructura de los informes deben permitir COMPRENSIÓN del desempeño y la equivalencia con la escala nacional. Un boletín que no explique su equivalencia es incumplimiento del SIE. La movilidad interinstitucional exige la escala nacional."
  },
  {
    "id": "L075_29",
    "componente": "pedagogia",
    "subtema": "Etapas del PEI",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Una docente nueva pregunta '¿cuál es el proceso formal para modificar el PEI?'. ¿Qué establece el Decreto 1075?",
    "opciones": [
      "El rector modifica el PEI por decisión propia y luego informa a la comunidad.",
      "Las modificaciones al PEI son aprobadas por el CONSEJO DIRECTIVO, con participación de la comunidad educativa, registradas en la Secretaría de Educación.",
      "Las modifica el Consejo Académico; el Consejo Directivo solo valida formatos.",
      "Las modificaciones las hace cada docente en su área sin requerir aprobación institucional."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.1.4.1 y 2.3.3.1.4.4 del DUR: las modificaciones al PEI deben ser aprobadas por el Consejo Directivo con participación de la comunidad educativa y registradas en Secretaría. El rector puede proponer, pero no decide unilateralmente. El Consejo Académico apoya en lo pedagógico-curricular, no sustituye al Directivo."
  },
  {
    "id": "L075_30",
    "componente": "normatividad",
    "subtema": "Educación preescolar - obligatoriedad",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "Una madre quiere matricular a su hijo de 5 años directamente en grado 1°. La rectora le dice que primero debe cursar preescolar. ¿Qué establece el Decreto 1075?",
    "opciones": [
      "La rectora obliga indebidamente: preescolar es optativo por decisión de la familia.",
      "La rectora acierta: el grado de transición (preescolar obligatorio) es requisito constitucional para ingresar a 1°; el preescolar formal comprende 3 grados (prejardín, jardín, transición) pero solo transición es obligatorio.",
      "Se debe cursar al menos 2 grados de preescolar antes de primero.",
      "El preescolar fue eliminado como obligatorio por el DUR en 2015."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.2.2.1 del DUR y Ley 115: la educación preescolar formal comprende 3 grados: prejardín, jardín y transición. El grado de TRANSICIÓN (5 años) es OBLIGATORIO por mandato constitucional (Art. 67 CP) como requisito para ingresar a primero. Los otros dos grados son optativos."
  },
  {
    "id": "L075_31",
    "componente": "normatividad",
    "subtema": "Asamblea General de Padres",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "En febrero, el rector convoca 'Asamblea de Padres' para elegir al representante al Consejo Directivo. Una madre pregunta si pertenecer a la Asociación de Padres es condición. Según el Decreto 1075 ¿qué aplica?",
    "opciones": [
      "Solo los miembros de la Asociación de Padres pueden votar en la Asamblea.",
      "La Asamblea General es un espacio de TODOS los padres (no solo asociados). Al Consejo Directivo asisten DOS representantes: uno elegido por la Asamblea General y OTRO designado por la Junta Directiva de la Asociación de Padres.",
      "Los padres solo participan en la Asociación; al Consejo Directivo solo acceden por designación del rector.",
      "La Asamblea elige un solo representante; la Asociación no participa en el Consejo Directivo."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.3.1.5.4 del DUR: los dos representantes de padres en el Consejo Directivo provienen de instancias distintas: uno por elección de la Asamblea General (abierta a todos los padres) y otro por designación de la Junta Directiva de la Asociación de Padres. Son fuentes complementarias."
  },
  {
    "id": "L075_32",
    "componente": "normatividad",
    "subtema": "Asociación de Padres - naturaleza",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "Un rector afirma que la Asociación de Padres es 'un órgano del Gobierno Escolar'. Un orientador señala que no lo es. Según el Decreto 1075 ¿qué es la Asociación de Padres?",
    "opciones": [
      "Es un órgano del Gobierno Escolar junto con Consejo Directivo, Consejo Académico y Rector.",
      "NO es órgano del Gobierno Escolar: es una ENTIDAD AUTÓNOMA, sin ánimo de lucro, con personería jurídica propia, que apoya la gestión educativa y participa en algunos órganos del gobierno (Art. 2.3.4.2.1 y ss del DUR, compila Dec 1286/2005).",
      "Es la asamblea de padres convocada por el rector dos veces al año.",
      "Es el Consejo de Padres bajo otro nombre."
    ],
    "correcta": 1,
    "explicacion": "El Gobierno Escolar lo integran el Consejo Directivo, el Consejo Académico y el Rector (Art. 2.3.3.1.5.1 del DUR). La Asociación de Padres (Decreto 1286 de 2005, compilado en Art. 2.3.4.2.X del DUR) es distinta: entidad autónoma con personería propia, sin ánimo de lucro, que colabora con la IE. Confundirlas es un error típico del concurso. El Consejo de Padres es otra instancia también separada."
  },
  {
    "id": "L075_33",
    "componente": "normatividad",
    "subtema": "Consejo de Padres de Familia",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Una madre pregunta cuántos padres integran el Consejo de Padres de su IE. El rector responde 'depende del número de grados de la institución'. ¿Es correcto según el Decreto 1075?",
    "opciones": [
      "No: el número es fijo nacional en 10 padres.",
      "Sí: el Consejo de Padres se integra por MÍNIMO UN (1) PADRE POR GRADO ofrecido por la institución; no es un número fijo nacional sino proporcional a la oferta institucional.",
      "El Consejo de Padres se compone por 2 padres por cada sede.",
      "El rector compone el Consejo de Padres a su discreción cada año."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.4.1.5 del DUR (compila Decreto 1286/2005): el Consejo de Padres se integra como mínimo con UN representante por cada grado ofrecido. Es un mecanismo de participación institucional. Diferente a la Asociación y a la Asamblea."
  },
  {
    "id": "L075_34",
    "componente": "convivencia",
    "subtema": "Manual de Convivencia - contenido mínimo",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "El Consejo Directivo revisa el manual y una docente propone retirar 'las medidas de atención restaurativa' porque 'tardan mucho'. Según el Decreto 1075 ¿qué componentes son obligatorios del manual?",
    "opciones": [
      "Solo faltas, sanciones y deberes de los estudiantes.",
      "Incluye mínimo: deberes y derechos; reglas de higiene personal; criterios de respeto y participación; definición de claves de clasificación de situaciones (I/II/III); PROTOCOLOS con enfoque RESTAURATIVO (no punitivo); rutas de atención; pautas de uso de uniforme; estímulos; procesos de elección de representantes.",
      "Es un instrumento interno sin contenido mínimo normado.",
      "Solo los temas disciplinarios; los pedagógicos no van en el manual."
    ],
    "correcta": 1,
    "explicacion": "Art. 2.3.5.4.4 del DUR (compila Ley 1620 y Decreto 1965): el manual debe incluir, además del debido proceso, la Ruta de Atención Integral con enfoque RESTAURATIVO (no solo punitivo), protocolos para situaciones tipo I/II/III, mecanismos de prevención y promoción, derechos y deberes, reglas y estímulos. El enfoque restaurativo es irrenunciable por normativa."
  },
  {
    "id": "L075_35",
    "componente": "normatividad",
    "subtema": "Debido proceso disciplinario en el estudiante",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "Un rector resuelve suspender 10 días a un estudiante por una pelea, sin escuchar al estudiante ni a la familia, basándose en el manual. El padre tutela. Según el Decreto 1075 y jurisprudencia aplicable, ¿qué aplica?",
    "opciones": [
      "La suspensión procede sin audiencia: el manual tiene fuerza vinculante automática.",
      "El rector debe garantizar el DEBIDO PROCESO (Art. 29 CP): notificación de la falta, oportunidad de ser oído, presentar pruebas, contradicción, decisión motivada y doble instancia (recurso). El manual no habilita a suprimir esto.",
      "La familia tiene derecho a ser escuchada solo si el estudiante es menor de 12 años.",
      "El debido proceso aplica solo en Tipo III."
    ],
    "correcta": 1,
    "explicacion": "El Art. 29 CP y la jurisprudencia constitucional (sentencias SU-449/20, T-917/06 y otras) han reiterado que TODO proceso disciplinario escolar exige debido proceso: notificación, derecho de defensa, pruebas, decisión motivada, impugnación. El DUR y la Ley 1620 integran estos principios en los protocolos. Un manual no puede obviar derechos fundamentales."
  },
  {
    "id": "L075_36",
    "componente": "normatividad",
    "subtema": "Educación media técnica y articulación",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Una IE quiere articular su media con una técnica profesional ofrecida por el SENA. Un docente dice que 'eso lo decide el rector'. Otro dice que 'requiere PEI'. ¿Qué dice el Decreto 1075?",
    "opciones": [
      "La articulación la decide el rector administrativamente.",
      "Requiere modificar el PEI, aprobación del Consejo Directivo y convenio con la institución articuladora; se reconoce como alternativa de media técnica (Art. 2.3.3.1.6.X del DUR y Ley 749 de 2002).",
      "Solo lo aprueba la Secretaría de Educación; la IE no participa.",
      "Las articulaciones fueron derogadas por el DUR; cada IE da su propia media."
    ],
    "correcta": 1,
    "explicacion": "La articulación con instituciones de educación técnica requiere modificación del PEI, aprobación del Consejo Directivo, convenio institucional y notificación a la Secretaría. Es una decisión colegiada, no discrecional del rector. Base normativa combina DUR + Ley 749."
  },
  {
    "id": "L075_37",
    "componente": "normatividad",
    "subtema": "Grados reconocidos del sistema",
    "fuente": "decreto_1075_2015",
    "dificultad": "facil",
    "pregunta": "Un estudiante nuevo pregunta: '¿la educación básica va hasta noveno y la media hasta once, verdad?'. Un docente lo corrige diciendo 'básica va hasta octavo'. Según el Decreto 1075 ¿cuál es la estructura?",
    "opciones": [
      "Básica: hasta 8°; Media: 9° a 11°.",
      "Educación formal básica: 9 grados (1° a 9°, dividida en primaria 1°-5° y secundaria 6°-9°); Media: 10° y 11°; Preescolar: 3 grados (solo transición obligatorio).",
      "Básica: 1° a 11°; la media ya no existe como ciclo separado.",
      "Básica: 1° a 7°; Media: 8° a 11° (modelo nuevo del DUR)."
    ],
    "correcta": 1,
    "explicacion": "Ley 115 (Arts. 15-27) y DUR Art. 2.3.3.1.2 y ss: educación formal = preescolar (3 grados, obligatorio transición) + básica (9 grados: primaria 1°-5° y secundaria 6°-9°) + media (2 grados: 10° y 11°, académica o técnica). Total hasta 11° incluyendo transición: 12 grados formales."
  },
  {
    "id": "L075_38",
    "componente": "pedagogia",
    "subtema": "Currículo",
    "fuente": "decreto_1075_2015",
    "dificultad": "media",
    "pregunta": "Un docente nuevo entiende que 'currículo = plan de estudios'. Un colega lo corrige. Según el Decreto 1075, ¿qué es el currículo?",
    "opciones": [
      "Es exactamente el plan de estudios que el docente ejecuta en clase.",
      "Currículo = conjunto de criterios, planes de estudio, programas, metodologías y procesos que contribuyen a la formación integral y a la construcción de la identidad cultural (Art. 76 Ley 115); el PLAN DE ESTUDIOS es solo UN componente del currículo.",
      "Son los estándares nacionales del MEN que rigen todas las IE.",
      "Son las clases efectivas con estudiantes durante 40 semanas."
    ],
    "correcta": 1,
    "explicacion": "Art. 76 Ley 115 y Art. 2.3.3.1.7.1 del DUR: currículo es el conjunto amplio de criterios, planes de estudio, programas, metodologías y procesos. El plan de estudios es UN componente del currículo. Reducir 'currículo' a 'plan de estudios' es confusión frecuente en docentes nuevos."
  },
  {
    "id": "L075_39",
    "componente": "normatividad",
    "subtema": "Autonomía escolar",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "Un rector afirma que gracias a la autonomía escolar 'puede quitar matemáticas del plan y poner ajedrez como obligatoria' porque 'el ajedrez enseña más que cualquier área'. ¿Qué dice el Decreto 1075?",
    "opciones": [
      "La autonomía escolar permite cualquier reconfiguración del plan de estudios.",
      "La autonomía escolar (Art. 77 Ley 115 y DUR) permite a cada IE organizar áreas FUNDAMENTALES obligatorias, introducir áreas optativas, adaptar metodologías y PEI, pero NO ELIMINAR las áreas fundamentales ni los contenidos mínimos del Art. 2.3.3.1.6.1.",
      "La autonomía es total hasta grado 9°; en media hay restricciones.",
      "La autonomía escolar fue reducida por el DUR y ya no existe."
    ],
    "correcta": 1,
    "explicacion": "Art. 77 Ley 115 y Art. 2.3.3.1.5.X del DUR: la autonomía escolar permite flexibilizar metodologías, enfoques, proyectos, áreas optativas y organización del tiempo, pero las 9 áreas fundamentales obligatorias son piso irrenunciable. Autonomía ≠ libertad total. Cascarita clásica para descartar."
  },
  {
    "id": "L075_40",
    "componente": "normatividad",
    "subtema": "Validaciones académicas",
    "fuente": "decreto_1075_2015",
    "dificultad": "dificil",
    "pregunta": "Un adulto de 20 años quiere obtener el bachillerato sin cursar grado por grado alegando que ha 'aprendido todo en la vida'. Un amigo le dice que puede 'validar' el ciclo completo. ¿Qué dice el Decreto 1075?",
    "opciones": [
      "La validación completa del bachillerato está permitida con un solo examen en cualquier edad desde los 18 años.",
      "La validación en educación formal está regulada: se puede validar la BÁSICA PRIMARIA, BÁSICA SECUNDARIA o MEDIA mediante exámenes aplicados por IE autorizadas, bajo condiciones de EDAD y requisitos específicos (Res. 2444 de 2002, compiladas en el DUR); no es una presentación única genérica.",
      "La validación fue eliminada por el DUR.",
      "Solo se puede validar la media; la básica siempre debe cursarse."
    ],
    "correcta": 1,
    "explicacion": "Parte 3, Título 3 del DUR y resoluciones MEN aplicables: la validación de la educación básica y media está regulada por procedimientos específicos aplicados por instituciones autorizadas, con exámenes por áreas y grados, respetando requisitos de edad y extraedad. No es un 'examen único de bachillerato' informal; es un proceso académico serio."
  }
];

// Compat: al cargarse este script, si existe ALL_QUESTIONS (en simulador) se agrega automáticamente
if (typeof ALL_QUESTIONS !== 'undefined' && Array.isArray(ALL_QUESTIONS)) {
  try { ALL_QUESTIONS.push(...PREGUNTAS_DECRETO_1075); } catch(e) {}
}
