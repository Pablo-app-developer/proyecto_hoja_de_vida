# 📚 Video #24 – Razonamiento Cuantitativo Parte 2
**Canal:** David Tuirán · El Profe Curioso
**Tema:** Razonamiento Cuantitativo — Problemas avanzados en contexto
**Formato:** LIVE
**URL:** https://www.youtube.com/watch?v=ZHB7jMxhX4E

---

## 🎯 Idea Central

> Esta segunda parte profundiza en los tipos de problemas más frecuentes y complejos del Razonamiento Cuantitativo en el concurso docente. La clave está en **leer el contexto con cuidado**, identificar la operación correcta y verificar el resultado. Los errores no suelen ser de cálculo sino de **interpretación de la situación**.

---

## 📋 REPASO RÁPIDO: ESTRUCTURA DEL RAZONAMIENTO CUANTITATIVO

| Categoría | Temas |
|---|---|
| **Estadística** | Media, mediana, moda, gráficas, probabilidad |
| **Álgebra y Cálculo** | Porcentajes, regla de tres, proporcionalidad, sucesiones |
| **Geometría** | Áreas, perímetros, volúmenes, escalas |

---

## 🧩 1. PROBLEMAS DE PORCENTAJE — CASOS AVANZADOS

### Caso 1: Aumento porcentual
Si un precio aumenta un 20%:
- Nuevo precio = Precio original × (1 + 0.20) = Precio × 1.20

### Caso 2: Descuento porcentual
Si hay un descuento del 15%:
- Precio con descuento = Precio × (1 - 0.15) = Precio × 0.85

### Caso 3: Aumentos y descuentos sucesivos (¡No son sumables!)
Si primero aumenta 20% y luego descuenta 20%, el resultado NO es el mismo precio:
- Primero: P × 1.20 = P₁
- Luego: P₁ × 0.80 = P × 0.96 (queda un 4% menos que el original)

### Caso 4: ¿Cuánto hay que aumentar para recuperar un descuento?
Si el precio bajó 20%, ¿cuánto hay que aumentar el precio rebajado para volver al original?
- Si P × 0.80 = P_nuevo → Para volver a P: P_nuevo × X = P → X = 1/0.80 = 1.25 → **25% de aumento**

> 💡 Truco: bajar X% ≠ recuperar con subir X%. Siempre el % de recuperación es mayor.

---

## ⚙️ 2. REGLA DE TRES COMPUESTA

Se usa cuando hay **más de dos variables** relacionadas:

**Ejemplo**: Si 4 docentes califican 120 exámenes en 3 días, ¿cuántos exámenes califican 6 docentes en 5 días?

| Variable | Valor 1 | Valor 2 | ¿Directa o Inversa? |
|---|---|---|---|
| Docentes | 4 | 6 | Directa (más docentes → más exámenes) |
| Días | 3 | 5 | Directa (más días → más exámenes) |
| Exámenes | 120 | X | — |

Fórmula: `X = 120 × (6/4) × (5/3) = 120 × 1.5 × 1.667 = 300`

---

## 📊 3. ESTADÍSTICA — PROBLEMAS FRECUENTES

### Cálculo de la media cuando se agrega un dato:
- Si la media de 5 datos es 7 y se agrega un dato 10, ¿cuál es la nueva media?
  - Suma original = 5 × 7 = 35
  - Nueva suma = 35 + 10 = 45
  - Nueva media = 45 / 6 = **7.5**

### Encontrar un dato faltante dada la media:
- Si la media de 6 datos es 8 y cinco de ellos son 5, 7, 9, 10, 8, ¿cuál es el sexto?
  - Suma total = 6 × 8 = 48
  - Suma conocida = 5 + 7 + 9 + 10 + 8 = 39
  - Dato faltante = 48 - 39 = **9**

### Mediana con datos en tabla de frecuencias:
1. Ordenar los datos.
2. Calcular la posición de la mediana: (n+1)/2.
3. Si n es par: promedio de los dos valores centrales.

### Moda en contexto escolar:
- La nota más frecuente en un grupo.
- Un conjunto puede tener 0, 1 o varias modas (bimodal, multimodal).

---

## 📐 4. GEOMETRÍA — PROBLEMAS FRECUENTES

### Figuras compuestas:
- Dividir en formas simples, calcular cada área y sumar.
- Ejemplo: una piscina en forma de L = rectángulo grande - rectángulo pequeño faltante.

### Escalas (profundización):
- Escala 1:n → 1 unidad en el plano = n unidades en la realidad.
- **Escala para áreas**: si la escala lineal es 1:n, la escala de área es 1:n².
  - Ejemplo: escala 1:100 → 1 cm² en el plano = 10.000 cm² = 1 m² en la realidad.

### Semejanza de figuras:
- Si dos figuras son semejantes con razón k:
  - Sus perímetros tienen razón **k**.
  - Sus áreas tienen razón **k²**.
  - Sus volúmenes tienen razón **k³**.

---

## 🎲 5. PROBABILIDAD — PROBLEMAS FRECUENTES

### Probabilidad de la unión (A o B):
- Si A y B son mutuamente excluyentes: P(A∪B) = P(A) + P(B)
- Si no son excluyentes: P(A∪B) = P(A) + P(B) - P(A∩B)

### Probabilidad condicional:
- P(A|B) = P(A∩B) / P(B)
- Léase: "probabilidad de A, dado que ya ocurrió B"

### Problema típico:
*En un salón de 30 estudiantes, 18 hacen deporte y 12 hacen arte. 6 hacen ambas. ¿Cuál es la probabilidad de que un estudiante elegido al azar haga deporte o arte?*
- P(Deporte ∪ Arte) = 18/30 + 12/30 - 6/30 = 24/30 = **4/5**

---

## 🔢 6. SUCESIONES Y PATRONES

### Sucesión aritmética:
- Diferencia constante entre términos (razón aritmética **d**).
- Término n: `aₙ = a₁ + (n-1)d`
- Suma de n términos: `Sₙ = n(a₁ + aₙ)/2`

### Sucesión geométrica:
- Razón constante entre términos (razón geométrica **r**).
- Término n: `aₙ = a₁ × r^(n-1)`

### Ejemplo frecuente en el examen:
*¿Cuál es el término 10 de la sucesión 3, 7, 11, 15, ...?*
- Es aritmética con d = 4
- a₁₀ = 3 + (10-1)×4 = 3 + 36 = **39**

---

## 🎯 7. ESTRATEGIAS PARA PROBLEMAS COMPLEJOS

1. **Lee 2 veces** el enunciado — los errores son casi siempre de comprensión.
2. **Identifica las variables** y qué relación tienen (directa o inversa).
3. **Estima el resultado** antes de calcular — si es absurdo, revisa.
4. **Dibuja o esquematiza** si el problema es geométrico.
5. **Verifica la unidad** de la respuesta — ¿pide metros, kilómetros, porcentajes?
6. **En probabilidades**: verifica que la suma de todas las probabilidades = 1.
7. **En estadística**: cuidado con confundir media (sensible a extremos) y mediana (robusta).

---

## 💡 PUNTOS CLAVE PARA EL CONCURSO (¡Memorizar!)

- **Porcentajes sucesivos no se suman**: bajar 20% y subir 20% no es neutro.
- **Regla de tres compuesta**: identificar qué variables son directas y cuáles inversas.
- Para encontrar un dato faltante en la media: **suma total = media × n**.
- **Escalas de área**: si la escala lineal es 1:n, el área escala 1:n².
- **Probabilidad condicional**: P(A|B) = P(A∩B) / P(B).
- En sucesiones: identificar si es aritmética (diferencia) o geométrica (razón).

---

## ✅ Tareas del Video #24

- [ ] Practicar **5 problemas de porcentajes** con aumentos y descuentos sucesivos
- [ ] Practicar **3 problemas de regla de tres compuesta** en contexto escolar
- [ ] Practicar **5 problemas de estadística**: calcular media/mediana/moda con datos en tabla
- [ ] Practicar **3 problemas de probabilidad** (unión y probabilidad condicional)
- [ ] Practicar **3 problemas de sucesiones** (identificar el tipo y calcular el término n)

---

## 🧠 Flashcards – Preguntas de Práctica

**P: Si un precio sube 25% y luego baja 25%, ¿vuelve al precio original?**
R: No. Ejemplo: 100 → +25% = 125 → -25% = 93.75. El precio queda por debajo del original.

**P: La media de 4 números es 10. Si se agrega el número 20, ¿cuál es la nueva media?**
R: Suma original = 40. Nueva suma = 60. Nueva media = 60/5 = **12**.

**P: En una figura semejante con razón de semejanza 3, ¿cuál es la razón de sus áreas?**
R: Las áreas tienen razón 3² = **9** (el área de la figura mayor es 9 veces la de la menor).

**P: ¿Cuál es el término 8 de la sucesión 2, 5, 8, 11, ...?**
R: Aritmética con d=3. a₈ = 2 + 7×3 = 2 + 21 = **23**.

**P: ¿Cuándo se usa la mediana en lugar de la media aritmética?**
R: Cuando hay valores extremos (muy altos o muy bajos) que distorsionan el promedio.

---

*Fuente: Canal El Profe Curioso – Clase #24 del Curso de Preparación Concurso Docente de Ingreso*
*Siguiente clase: Video #25 — Mini Simulacro Integral*
