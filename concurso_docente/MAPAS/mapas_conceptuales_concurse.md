# 🗺️ Mapas de Conexión Temática — Concurso Docente 2026

Estos mapas utilizan la técnica de **Elaboración**: conectan las leyes, decretos y conceptos pedagógicos para que entiendas el *porqué* de cada norma y su aplicación en el aula.

---

## 🏛️ Mapa 1: Marco Normativo de la Carrera
Este mapa conecta la base legal desde la Ley General hasta los decretos específicos que rigen tu futuro cargo.

```mermaid
graph TD
    L115["<b>Ley 115 de 1994</b><br/>Ley General de Educación"]
    L115 --> D1278["<b>Decreto 1278 de 2002</b><br/>Estatuto de Profesionalización"]
    L115 --> D1075["<b>Decreto 1075 de 2015</b><br/>Decreto Único Reglamentario (DUR)"]
    
    D1278 --> Escalafon["<b>Escalafón Docente</b><br/>Grados 1, 2 (A/B/C), 3 (A/AD)"]
    D1278 --> Evaluación["<b>Evaluación</b><br/>Desempeño y Competencias (80.01)"]
    
    D1075 --> D915["<b>Decreto 915 de 2016</b><br/>Reglamenta el Concurso"]
    
    D915 --> Etapas["<b>Etapas de Ingreso</b><br/>12 etapas (Simo, Prueba, VRM, Antecedentes)"]
    
    subgraph Manual_Funciones
        R3842["<b>Resolución 3842 de 2022</b><br/>Manual de Funciones"]
        R18278["<b>Resolución 18278 (2023)</b><br/>Ajuste Abogados/Sociales"]
    end
    
    D915 -.-> R3842
```

---

## 🧠 Mapa 2: El Universo Pedagógico (Constructivismo)
Como Ingeniero, verás que la pedagogía del MEN es una estructura lógica centrada en la construcción activa del sujeto.

```mermaid
graph LR
    C["<b>CONSTRUCTIVISMO</b><br/>(Paradigma MEN)"]
    
    C --- P["<b>Piaget</b><br/>Cognitivo"]
    C --- V["<b>Vygotsky</b><br/>Social"]
    C --- A["<b>Ausubel</b><br/>Significativo"]
    
    P --> P1["Etapas de Desarrollo<br/>(Sensoriomotriz a Formal)"]
    P --> P2["Asimilación/Acomodación"]
    
    V --> V1["Zona de Desarrollo Próximo (ZDP)"]
    V --> V2["Andamiaje y Aprendizaje Social"]
    
    A --> A1["Saberes Previos<br/>(Punto de partida)"]
    A --> A2["Material Lógicamente Significativo"]
    
    subgraph Metodologias_Activas
        ABP["ABP (Problemas)"]
        ABPr["ABPr (Proyectos)"]
        Coop["Cooperativo"]
        Flipped["Aula Invertida"]
    end
    
    C --> Metodologias_Activas
```

---

## 📐 Mapa 3: Ecosistema Curricular de Matemáticas
Vital para tu prueba específica. Muestra cómo se "aterriza" la teoría a la clase de matemáticas.

```mermaid
graph TD
    Lineamientos["<b>Lineamientos Curriculares (1998)</b><br/>Epistemología y Didáctica"]
    
    Lineamientos --> EBC["<b>Estándares Básicos (EBC - 2003)</b><br/>Criterios de Evaluación por Ciclos"]
    
    EBC --> DBA["<b>Derechos Básicos (DBA - 2016)</b><br/>Saberes mínimos por cada AÑO"]
    
    DBA --> Mallas["<b>Mallas de Aprendizaje</b><br/>Progresiones grado a grado"]
    
    subgraph Los_5_Pensamientos
        N["Numérico"]
        S["Espacial"]
        M["Métrico"]
        A["Aleatorio (Estadística)"]
        V["Variacional (Álgebra)"]
    end
    
    Lineamientos --> Los_5_Pensamientos
    
    PlanArea["Plan de Área"]
    PlanAula["Plan de Aula"]
    
    Mallas --> PlanArea
    PlanArea --> PlanAula
```

---

## 🌈 Mapa 4: Inclusión y Evaluación Integral
Cómo se conectan el Decreto de Inclusión con el sistema de notas institucional.

```mermaid
graph TD
    D1421["<b>Decreto 1421 (2017)</b><br/>Educación Inclusiva"]
    
    D1421 --> DUA["<b>DUA</b><br/>Diseño Universal (PREVENTIVO)"]
    DUA --> DUA1["A toda la clase"]
    
    D1421 --> PIAR["<b>PIAR</b><br/>Plan Individual (AJUSTES)"]
    PIAR --> PIAR1["Solo para discapacidad"]
    
    D1290["<b>Decreto 1290 (2009)</b><br/>Evaluación Estudiantes"]
    
    D1290 --> SIEE["<b>SIEE</b><br/>Sistema Institucional de Evaluación"]
    
    SIEE --> Formativa["<b>Formativa</b><br/>Proceso (Retroalimentación)"]
    SIEE --> Sumativa["<b>Sumativa</b><br/>Final (Certificación)"]
    
    PIAR --> |Criterios Flexibles| SIEE
```

---

## 🤝 Mapa 5: Convivencia y Ruta de Atención
Clave para la prueba psicotécnica y de juicio situacional.

```mermaid
graph LR
    L1620["<b>Ley 1620 de 2013</b><br/>Sistema Convivencia"]
    
    L1620 --> Comite["<b>Comité de Convivencia</b><br/>Rector, Orientador, Estudiantes"]
    
    Comite --> Ruta["<b>Ruta de Atención Integral</b>"]
    
    Ruta --> T1["<b>Tipo I</b><br/>Conflictos Esporádicos<br/>(Mediación)"]
    Ruta --> T2["<b>Tipo II</b><br/>Acoso/Bullying Repetitivo<br/>(Protocolo Institucional)"]
    Ruta --> T3["<b>Tipo III</b><br/>Presuntos Delitos<br/>(Policía/ICBF)"]
    
    Ruta --- Comp["Promoción, Prevención, Atención, Seguimiento"]
```

> [!IMPORTANT]
> **Relación para el examen:** En el examen de juicio situacional, siempre piensa en qué mapa se ubica el problema. Si es un niño que no aprende, piensa en el **Mapa 4** (DUA/PIAR). Si es una pelea, piensa en el **Mapa 5** (Ruta Tipo II o III). Si es una duda salarial o de cargo, piensa en el **Mapa 1**.
