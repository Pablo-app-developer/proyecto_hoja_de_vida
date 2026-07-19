# 📚 Video #49 – Razonamiento Cuantitativo - Parte 3
**Canal:** David Tuirán · El Profe Curioso
**Tema:** Razonamiento Cuantitativo — Técnicas de Conteo, Combinatoria e Indicadores Educativos
**Formato:** LIVE
**URL:** https://www.youtube.com/watch?v=fol_kM02LWs

---

## 🎯 Idea Central

> Esta tercera parte profundiza en los temas de **técnicas de conteo y combinatoria** como competencia evaluada en el concurso docente, y en la **lectura e interpretación de indicadores educativos** (resultados SABER, tasas de cobertura, deserción). Las preguntas en el examen presentan escenarios escolares reales donde el docente debe tomar decisiones basadas en datos cuantitativos.

---

## 📋 REPASO RÁPIDO: LO CUBIERTO EN PARTES 1 Y 2

| Parte | Temas Clave |
|---|---|
| **Parte 1** (Video #16) | Estadística básica, porcentajes, regla de tres simple, geometría |
| **Parte 2** (Video #24) | Porcentajes sucesivos, regla de tres compuesta, probabilidad, sucesiones |
| **Parte 3** (este video) | Técnicas de conteo, combinatoria, indicadores educativos, datos SABER |

---

## 🔢 1. TÉCNICAS DE CONTEO

### Principio Multiplicativo (Regla del Producto):
> Si una decisión A tiene **m** posibilidades y una decisión B tiene **n** posibilidades, el total de combinaciones es **m × n**.

**Ejemplo en contexto escolar:**
*Un docente debe armar grupos de trabajo: elige 1 líder de entre 4 estudiantes y 1 secretario de entre los 3 restantes. ¿Cuántas combinaciones posibles hay?*
→ 4 × 3 = **12 combinaciones**

### Principio Aditivo (Regla de la Suma):
> Si los casos son **mutuamente excluyentes**, se suman.

**Ejemplo:**
*Un docente puede dictar clase en el salón A (con 5 configuraciones de mesas) o en el laboratorio (con 3 configuraciones). ¿Cuántas opciones de disposición tiene?*
→ 5 + 3 = **8 opciones**

---

## 🎲 2. PERMUTACIONES

### Permutación: el orden SÍ importa

**Permutación de n elementos en r posiciones:**
```
P(n, r) = n! / (n - r)!
```

**Permutación de todos los n elementos:**
```
P(n) = n!
```

| n | n! |
|---|---|
| 1 | 1 |
| 2 | 2 |
| 3 | 6 |
| 4 | 24 |
| 5 | 120 |
| 6 | 720 |

**Ejemplo frecuente en el concurso:**
*Una institución debe elegir rector, coordinador y docente jefe de área entre 8 candidatos. ¿De cuántas formas se puede hacer la selección?*
→ P(8,3) = 8 × 7 × 6 = **336 formas**

> 💡 Clave: En permutaciones, el **cargo importa** (rector ≠ coordinador ≠ docente jefe).

---

## 🃏 3. COMBINACIONES

### Combinación: el orden NO importa

**Fórmula:**
```
C(n, r) = n! / (r! × (n - r)!)
```

**Ejemplo frecuente en el concurso:**
*De 10 docentes, se quiere conformar un comité de 3 personas para revisar el PEI. ¿Cuántos comités distintos se pueden formar?*
→ C(10, 3) = 10! / (3! × 7!) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = **120 comités**

> 💡 Clave: En combinaciones, el **cargo no importa** (ser parte del comité es igual para todos).

### Diferencia clave: ¿Permutación o Combinación?

| Pregunta | Usa... | Por qué |
|---|---|---|
| ¿De cuántas formas se puede elegir presidente y vicepresidente? | Permutación | Los roles son distintos |
| ¿De cuántas formas se puede elegir un grupo de 2 representantes? | Combinación | No hay jerarquía |
| ¿Cuántas contraseñas de 4 dígitos distintos existen? | Permutación | El orden importa |
| ¿Cuántos equipos de 5 jugadores se pueden armar de 9? | Combinación | El equipo no tiene posiciones |

---

## 📊 4. INTERPRETACIÓN DE INDICADORES EDUCATIVOS

### Indicadores SABER (resultados de pruebas nacionales):

Los problemas del concurso presentan tablas de resultados SABER y piden:
- Calcular promedios o variaciones porcentuales entre años
- Identificar tendencias o patrones
- Tomar decisiones pedagógicas basadas en los datos

**Ejemplo tipo concurso:**
*La siguiente tabla muestra el % de estudiantes en nivel "Avanzado" en matemáticas:*

| Año | Grado 5° | Grado 9° |
|---|---|---|
| 2019 | 18% | 12% |
| 2021 | 22% | 15% |
| 2023 | 25% | 11% |

*¿Cuál afirmación es correcta?*
- A. Ambos grados mejoraron consistentemente → ❌ (Grado 9° bajó en 2023)
- B. Grado 5° mejoró más del 30% entre 2019 y 2023 → ✅ ((25-18)/18 × 100 = 38.9%)
- C. En 2023, los dos grados tuvieron el mismo desempeño → ❌
- D. Grado 9° empeoró en todos los periodos → ❌ (mejoró de 2019 a 2021)

> 💡 **Técnica de descarte**: Revisa cada opción contra los datos de la tabla antes de calcular. Muchas se eliminan por lectura directa.

---

## 📉 5. TASAS EDUCATIVAS (Indicadores del SIMAT y MEN)

### Fórmulas clave:

| Indicador | Fórmula |
|---|---|
| **Tasa de cobertura bruta** | (Matrícula total / Población en edad escolar) × 100 |
| **Tasa de cobertura neta** | (Matrícula en edad oficial / Población en edad escolar) × 100 |
| **Tasa de deserción** | (Estudiantes que salen / Matrícula inicial) × 100 |
| **Tasa de repitencia** | (Estudiantes que repiten / Matrícula total) × 100 |
| **Tasa de aprobación** | (Estudiantes aprobados / Matrícula total) × 100 |

**Ejemplo:**
*Una escuela tiene 400 estudiantes matriculados. 20 se retiraron durante el año. ¿Cuál es la tasa de deserción?*
→ (20 / 400) × 100 = **5%**

---

## 🔍 6. LECTURA DE GRÁFICAS AVANZADAS

### Gráficas de doble barra (comparación):
- Comparan dos variables para las mismas categorías.
- Identificar cuál variable es mayor/menor en cada categoría.
- Calcular la diferencia absoluta o porcentual.

### Gráficas de líneas (tendencias):
- Identificar si la tendencia es **ascendente, descendente o estacionaria**.
- Calcular la variación entre dos puntos específicos.
- No confundir la **pendiente** (ritmo de cambio) con el **valor** en un punto.

### Gráficas circulares (proporciones):
- El total siempre es 100% (o el número total de elementos).
- Para calcular un sector: % × Total.
- Para calcular el ángulo del sector: % × 360°.

---

## 💡 PUNTOS CLAVE PARA EL CONCURSO (¡Memorizar!)

- **Permutación**: el orden importa → usar P(n,r) = n! / (n-r)!
- **Combinación**: el orden no importa → usar C(n,r) = n! / (r! × (n-r)!)
- Para elegir cargos con jerarquía → **Permutación**.
- Para elegir grupos sin jerarquía → **Combinación**.
- En tablas de indicadores educativos: **lee cada opción contra los datos** antes de calcular.
- Tasa de deserción = (retirados / matrícula inicial) × 100.
- Variación porcentual = ((nuevo - viejo) / viejo) × 100.
- C(n,2) = n(n-1)/2 — fórmula rápida para grupos de 2.

---

## ✅ Tareas del Video #49

- [ ] Practicar **5 problemas de permutaciones** en contexto escolar (cargos, orden de presentaciones)
- [ ] Practicar **5 problemas de combinaciones** (conformación de grupos, comités)
- [ ] Identificar en cada problema si el orden importa o no (permutación vs. combinación)
- [ ] Calcular las 6 tasas educativas con datos inventados de una institución
- [ ] Practicar lectura de gráficas de doble barra e interpretar 3 preguntas sobre cada una

---

## 🧠 Flashcards – Preguntas de Práctica

**P: ¿Cuál es la diferencia entre permutación y combinación?**
R: En la permutación el **orden importa** (los elementos en posiciones distintas son distintos). En la combinación el **orden no importa** (solo importa qué elementos se seleccionan).

**P: De 7 docentes, ¿de cuántas formas se pueden elegir un coordinador y un docente de apoyo?**
R: El orden importa (cargos distintos) → P(7,2) = 7 × 6 = **42 formas**.

**P: De 7 docentes, ¿de cuántas formas se puede elegir un comité de 2 personas?**
R: El orden no importa → C(7,2) = (7 × 6) / (2 × 1) = **21 comités**.

**P: Si en 2020 el 15% de los estudiantes alcanzó nivel avanzado y en 2023 el 21%, ¿cuál fue la variación porcentual?**
R: ((21 - 15) / 15) × 100 = **40% de aumento**.

**P: Una escuela tiene 350 estudiantes. 14 se retiraron. ¿Cuál es la tasa de deserción?**
R: (14 / 350) × 100 = **4%**.

**P: ¿Cuántos equipos de 4 estudiantes se pueden armar de un grupo de 9?**
R: C(9,4) = 9! / (4! × 5!) = (9×8×7×6)/(4×3×2×1) = 3024/24 = **126 equipos**.

---

*Fuente: Canal El Profe Curioso – Clase #49 del Curso de Preparación Concurso Docente de Ingreso*
*Siguiente clase: Video #50 — Razonamiento Cuantitativo Parte 4*
