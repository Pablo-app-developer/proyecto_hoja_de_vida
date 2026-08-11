var RAZONAMIENTO_AVANZADO_QUESTIONS = [
  {
    "id":"RQ001",
    "componente":"razonamiento",
    "subtema":"interpretacion_graficas",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un diario publica un grafico de barras titulado 'Aumento del desempleo en Colombia'. El eje vertical va de 8.5% a 9.2% y las barras muestran cifras trimestrales: T1=8.6%, T2=8.7%, T3=8.9%, T4=9.1%. Visualmente las barras parecen mostrar un aumento dramatico. Cual es la interpretacion MAS correcta?",
    "opciones":[
      "El desempleo se duplico en el ano",
      "El desempleo aumento 0.5 puntos porcentuales, pero el eje truncado exagera visualmente la magnitud del cambio",
      "El desempleo aumento exponencialmente",
      "La grafica es incorrecta porque no comienza en cero"
    ],
    "correcta":1,
    "explicacion":"El cambio real es de 0.5 puntos porcentuales (aumento relativo de aproximadamente 5.8%, no del 100%). El truncamiento del eje vertical es una tecnica valida en visualizacion pero puede engañar visualmente al no comenzar en cero. La opcion D es incorrecta porque truncar ejes es aceptable si se advierte, aunque poco recomendable en periodismo."
  },
  {
    "id":"RQ002",
    "componente":"razonamiento",
    "subtema":"interpretacion_graficas",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un diagrama de dispersion muestra la relacion entre horas de estudio (eje X, de 0 a 20) y puntaje en Saber 11 (eje Y, de 200 a 500) para 300 estudiantes. Se observan dos nubes claramente separadas: una nube de puntos con pendiente positiva marcada en estudiantes de colegio privado y otra nube con pendiente menor en estudiantes de colegio publico. La linea de tendencia global es positiva. Que conclusion es la MAS solida?",
    "opciones":[
      "Estudiar mas horas siempre aumenta el puntaje en la misma proporcion para todos",
      "La relacion entre horas de estudio y puntaje depende del tipo de colegio; agregar todos los datos oculta esta heterogeneidad",
      "El tipo de colegio no influye porque la tendencia global es positiva",
      "Los estudiantes de colegio publico estudian menos"
    ],
    "correcta":1,
    "explicacion":"Cuando existen subgrupos con pendientes distintas, la linea de tendencia global oculta la heterogeneidad. Debe analizarse por estratos. La opcion A ignora la diferencia de pendientes; C confunde tendencia global con efecto homogeneo; D infiere una causa no mostrada."
  },
  {
    "id":"RQ003",
    "componente":"razonamiento",
    "subtema":"interpretacion_graficas",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"Un grafico de barras apiladas muestra la matricula por nivel educativo en cuatro departamentos. En Antioquia la barra total es de 1.200.000 estudiantes (60% primaria, 30% secundaria, 10% media). En Choco la barra total es de 200.000 (70% primaria, 20% secundaria, 10% media). Un analista concluye: 'Antioquia atiende MEJOR la educacion media que Choco porque su segmento es mas alto visualmente'. Cual es el error?",
    "opciones":[
      "Ningun error, la conclusion es correcta",
      "El analista compara alturas absolutas cuando debe comparar porcentajes o tasas per capita para juzgar la cobertura relativa",
      "Deberia usarse un grafico circular",
      "Los porcentajes suman 100% en ambos casos, no hay diferencia"
    ],
    "correcta":1,
    "explicacion":"Ambos departamentos dedican el mismo 10% a educacion media. Antioquia tiene mas estudiantes en cifras absolutas simplemente por ser mas poblado. Comparar alturas absolutas confunde poblacion con cobertura. Debe compararse la proporcion o tasa por habitante en edad escolar."
  },
  {
    "id":"RQ004",
    "componente":"razonamiento",
    "subtema":"interpretacion_graficas",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"Un docente presenta la distribucion de edades de sus estudiantes con un HISTOGRAMA (barras pegadas) con intervalos de 2 años. Un colega sugiere que use un grafico de BARRAS (con espacios) porque 'se ve mas ordenado'. Cual afirmacion es correcta?",
    "opciones":[
      "Da igual cual usar, ambos representan lo mismo",
      "El histograma es lo apropiado porque la edad es variable cuantitativa continua agrupada en intervalos; el grafico de barras se usa para variables categoricas",
      "El grafico de barras es siempre mejor porque es mas claro",
      "Deberia usar un grafico circular"
    ],
    "correcta":1,
    "explicacion":"El histograma es para variables cuantitativas continuas agrupadas en intervalos (las barras se tocan indicando continuidad). El grafico de barras es para variables categoricas o discretas (barras separadas). Usar uno por el otro tergiversa la naturaleza del dato."
  },
  {
    "id":"RQ005",
    "componente":"razonamiento",
    "subtema":"interpretacion_graficas",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un boxplot (diagrama de caja) de los salarios de docentes en un municipio muestra: minimo=1.500.000, Q1=2.100.000, mediana=2.400.000, Q3=2.800.000, maximo=8.500.000. Hay varios puntos aislados por encima de 5.000.000 marcados como outliers. Que interpretacion es correcta?",
    "opciones":[
      "El salario promedio es 2.400.000",
      "El 50% central de los salarios esta entre 2.100.000 y 2.800.000; existen algunos salarios muy altos que sesgan la distribucion hacia la derecha",
      "Todos los docentes ganan entre 1.500.000 y 8.500.000 por igual",
      "La mediana y la media coinciden en 2.400.000"
    ],
    "correcta":1,
    "explicacion":"El rango intercuartilico (Q1 a Q3) captura el 50% central. Los outliers superiores indican asimetria positiva (cola derecha), lo cual normalmente hace que la media sea mayor que la mediana. La opcion A confunde mediana con media; C ignora la distribucion desigual."
  },
  {
    "id":"RQ006",
    "componente":"razonamiento",
    "subtema":"interpretacion_graficas",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"La piramide poblacional de Colombia en 2005 mostraba base ancha (muchos niños) y punta angosta (pocos mayores). En 2025 la base se ha estrechado y la parte media ensanchado. Que fenomeno demografico describe MEJOR este cambio?",
    "opciones":[
      "Aumento de la mortalidad infantil",
      "Transicion demografica: disminucion de la natalidad y aumento de la esperanza de vida, con envejecimiento poblacional",
      "Migracion masiva de niños hacia otros paises",
      "Aumento explosivo de la natalidad"
    ],
    "correcta":1,
    "explicacion":"El estrechamiento de la base indica caida de la natalidad; el ensanchamiento del centro y aumento hacia arriba indica que las cohortes previas envejecen. Es el patron clasico de transicion demografica que Colombia atraviesa."
  },
  {
    "id":"RQ007",
    "componente":"razonamiento",
    "subtema":"interpretacion_graficas",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"Un grafico circular muestra el gasto publico municipal: Educacion 35%, Salud 25%, Infraestructura 20%, Cultura 15%, Otros 10%. Un politico afirma: 'La suma da 105%, hay corrupcion'. Cual es la explicacion MAS razonable?",
    "opciones":[
      "El politico tiene razon, hay evidencia de corrupcion",
      "Los porcentajes fueron redondeados individualmente y la suma acumula error de redondeo; es un artefacto de representacion, no evidencia de fraude",
      "El grafico circular no puede sumar 100%",
      "Faltan datos en el grafico"
    ],
    "correcta":1,
    "explicacion":"Es comun que redondeos individuales (por ejemplo 34.6 a 35, 24.8 a 25) hagan que el total sume 101% o 99%. Es un error de precision, no de fondo. Interpretar redondeos como fraude es una falacia."
  },
  {
    "id":"RQ008",
    "componente":"razonamiento",
    "subtema":"interpretacion_graficas",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un mapa de calor (heatmap) muestra el desempeño en Saber 11 por departamento y area evaluada. Los colores van de rojo (bajo) a verde (alto). Un lector nota que Vaupes aparece en gris. Que representa MAS probablemente el gris?",
    "opciones":[
      "Que Vaupes tuvo puntaje intermedio",
      "Datos faltantes o insuficientes para el departamento; no debe interpretarse como desempeño intermedio ni como cero",
      "Que Vaupes obtuvo el mejor puntaje",
      "Un error de impresion"
    ],
    "correcta":1,
    "explicacion":"En mapas de calor el gris usualmente codifica ausencia de datos. Confundirlo con un valor intermedio genera interpretaciones erroneas. Debe siempre revisarse la leyenda antes de concluir."
  },
  {
    "id":"RQ009",
    "componente":"razonamiento",
    "subtema":"analisis_datos",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Una tabla de contingencia muestra: de 200 pacientes que tomaron un medicamento, 60 mejoraron. De 100 pacientes sin medicamento, 20 mejoraron. La conclusion 'el medicamento funciona porque mas pacientes mejoraron' es problematica porque:",
    "opciones":[
      "Es correcta, 60 es mayor que 20",
      "Debe compararse la TASA de mejora (30% con medicamento vs 20% sin medicamento) y evaluar si la diferencia es estadisticamente significativa, no las cifras absolutas",
      "El medicamento no puede ser evaluado sin conocer su composicion quimica",
      "La conclusion es correcta pero deberia usarse otro medicamento"
    ],
    "correcta":1,
    "explicacion":"Comparar cifras absolutas entre grupos de distinto tamaño es engañoso. La tasa de mejora es 30% vs 20% (10 puntos de diferencia), lo cual sugiere efecto pero requiere prueba de significancia. Confundir absoluto con tasa es un error frecuente."
  },
  {
    "id":"RQ010",
    "componente":"razonamiento",
    "subtema":"analisis_datos",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"En una encuesta a 500 docentes: 300 son mujeres, 200 hombres. De las mujeres, 210 usan tecnologia en el aula (70%). De los hombres, 140 la usan (70%). Que se puede concluir sobre la independencia entre 'genero' y 'uso de tecnologia'?",
    "opciones":[
      "Hay dependencia porque hay mas mujeres que hombres",
      "Las variables son INDEPENDIENTES en la muestra: la proporcion que usa tecnologia es identica (70%) en ambos generos, por lo que conocer el genero no cambia la probabilidad de uso",
      "Hay dependencia porque las cifras absolutas son distintas",
      "No se puede determinar sin mas informacion"
    ],
    "correcta":1,
    "explicacion":"La independencia estadistica se verifica cuando P(A|B) = P(A). Aqui P(usa tecnologia | mujer) = P(usa tecnologia | hombre) = 70%, por tanto son independientes en la muestra. Las cifras absolutas distintas se deben al tamaño del subgrupo, no a la relacion."
  },
  {
    "id":"RQ011",
    "componente":"razonamiento",
    "subtema":"analisis_datos",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"Datos longitudinales del Icfes muestran que el puntaje promedio en Saber 11 en un colegio paso de 250 en 2020 a 280 en 2025. Sin embargo la desercion escolar aumento del 5% al 20% en el mismo periodo. Que sesgo afecta MAS la interpretacion del aumento del puntaje?",
    "opciones":[
      "No hay sesgo, el colegio mejoro",
      "Sesgo de seleccion por atricion: los estudiantes con bajo desempeño desertaron, dejando una muestra final mas selecta que infla el promedio artificialmente",
      "Sesgo de recuerdo",
      "Sesgo del entrevistador"
    ],
    "correcta":1,
    "explicacion":"Cuando desertan quienes tenian peores resultados, el promedio de los que quedan aumenta sin que necesariamente mejore la calidad educativa. Este es sesgo de seleccion por atricion, comun en estudios longitudinales."
  },
  {
    "id":"RQ012",
    "componente":"razonamiento",
    "subtema":"analisis_datos",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un colegio con 800 estudiantes tuvo 40 casos de COVID en 2022. Otro colegio con 200 estudiantes tuvo 20 casos. Un padre concluye: 'El primer colegio es mas peligroso porque tuvo el doble de casos'. Cual analisis es correcto?",
    "opciones":[
      "El padre tiene razon: 40 > 20",
      "La tasa de contagio del primer colegio es 5% (40/800) y la del segundo es 10% (20/200); el segundo tiene MAYOR tasa relativa aunque menos casos absolutos",
      "Ambos colegios son igual de peligrosos",
      "No hay suficiente informacion"
    ],
    "correcta":1,
    "explicacion":"Al comparar riesgos entre grupos de distinto tamaño debe usarse tasa relativa (casos por estudiante) y no cifras absolutas. El segundo colegio tiene el doble de riesgo relativo. Este error es la falacia de las cifras absolutas."
  },
  {
    "id":"RQ013",
    "componente":"razonamiento",
    "subtema":"analisis_datos",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Una tabla de contingencia sobre aprobacion en calculo: aprobaron 60% de los 100 estudiantes que asistieron a tutorias y 50% de los 200 que no asistieron. Alguien afirma: 'Las tutorias causan mejor rendimiento'. Que variable de confusion podria explicar la asociacion sin causalidad directa?",
    "opciones":[
      "El clima del semestre",
      "La motivacion previa: estudiantes mas comprometidos tienden a asistir a tutorias Y a estudiar mas por su cuenta; la motivacion causa ambas cosas",
      "El precio de los libros",
      "No existe variable de confusion posible"
    ],
    "correcta":1,
    "explicacion":"Una correlacion observacional no prueba causalidad si existe una variable de confusion (aqui, motivacion) que afecta a ambas variables. Solo un experimento con asignacion aleatoria a tutorias permitiria concluir causalidad."
  },
  {
    "id":"RQ014",
    "componente":"razonamiento",
    "subtema":"analisis_datos",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"En una tabla de frecuencia sobre nivel socioeconomico y acceso a internet en un municipio: nivel bajo 40% con acceso; nivel medio 75%; nivel alto 95%. Cual es el marginal condicional correcto para 'probabilidad de tener acceso dado que se es de nivel bajo'?",
    "opciones":[
      "40%",
      "75%",
      "95%",
      "El promedio de los tres: 70%"
    ],
    "correcta":0,
    "explicacion":"El marginal condicional P(acceso | nivel bajo) es directamente el 40% reportado. Promediar los tres niveles ignora que la pregunta ya especifica la condicion (nivel bajo)."
  },
  {
    "id":"RQ015",
    "componente":"razonamiento",
    "subtema":"modelado",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un municipio observa que el numero de casos de dengue durante 12 semanas fue: 5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240. Que modelo describe MEJOR el fenomeno?",
    "opciones":[
      "Lineal, porque los casos aumentan constantemente",
      "Exponencial: cada semana los casos se duplican, lo que corresponde a f(t) = 5 x 2^t",
      "Cuadratico, porque hay crecimiento acelerado",
      "Logaritmico"
    ],
    "correcta":1,
    "explicacion":"El cociente entre valores consecutivos es constante (2), lo cual es la firma del crecimiento exponencial. Un modelo lineal predeciria incrementos constantes (no proporcionales), y uno cuadratico daria razones cambiantes."
  },
  {
    "id":"RQ016",
    "componente":"razonamiento",
    "subtema":"modelado",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Se ajusta un modelo lineal salario = 1.000.000 + 150.000 x años_experiencia. Un docente pregunta: 'Segun este modelo, cuanto ganaria alguien con 40 años de experiencia?'. La prediccion seria 7.000.000. Cual es la advertencia mas importante?",
    "opciones":[
      "El modelo es perfecto y la prediccion es exacta",
      "Es una EXTRAPOLACION fuera del rango de datos observados (probablemente ajustados con 0-25 años); el modelo puede no ser valido para valores extremos",
      "Debe agregarse el IPC",
      "El modelo lineal siempre da resultados exactos"
    ],
    "correcta":1,
    "explicacion":"Los modelos son validos dentro del rango de datos con que se ajustaron (interpolacion). Extrapolar mucho mas alla es riesgoso: puede que la relacion se aplane, sature o cambie. Siempre debe advertirse el limite del dominio."
  },
  {
    "id":"RQ017",
    "componente":"razonamiento",
    "subtema":"modelado",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"En un modelo salario = 1.000.000 + 150.000 x años_experiencia, cual es la interpretacion CORRECTA del coeficiente 150.000?",
    "opciones":[
      "El salario total de una persona sin experiencia",
      "El aumento promedio en el salario por cada año adicional de experiencia, manteniendo lo demas constante",
      "El salario maximo posible",
      "El error del modelo"
    ],
    "correcta":1,
    "explicacion":"En un modelo lineal, el coeficiente de una variable representa el cambio esperado en la variable dependiente por cada unidad de cambio en la independiente. El intercepto (1.000.000) representa el valor cuando experiencia=0."
  },
  {
    "id":"RQ018",
    "componente":"razonamiento",
    "subtema":"modelado",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un investigador ajusta un polinomio de grado 15 a 20 puntos de datos y obtiene un ajuste 'perfecto' (R^2 = 1). Al aplicar el modelo a nuevos datos falla estrepitosamente. Que fenomeno describe esto?",
    "opciones":[
      "Subajuste: el modelo es demasiado simple",
      "Sobreajuste (overfitting): el modelo se adapto al ruido de los datos de entrenamiento y perdio capacidad de generalizacion",
      "Los datos nuevos estan incorrectos",
      "R^2 no sirve para evaluar modelos"
    ],
    "correcta":1,
    "explicacion":"Un modelo con demasiados parametros ajusta perfectamente los datos de entrenamiento (incluyendo el ruido) pero no generaliza. Debe preferirse un modelo mas simple que capture el patron sin memorizar los datos: principio de parsimonia."
  },
  {
    "id":"RQ019",
    "componente":"razonamiento",
    "subtema":"modelado",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"Un docente modela el numero de estudiantes que ingresan al colegio cada año. Cual tipo de modelo es MAS apropiado?",
    "opciones":[
      "Continuo (funcion real de variable real)",
      "Discreto: el numero de estudiantes solo toma valores enteros no negativos, por lo que un modelo continuo es una aproximacion",
      "Complejo con numeros imaginarios",
      "Aleatorio sin estructura"
    ],
    "correcta":1,
    "explicacion":"El numero de estudiantes es una variable discreta (enteros). Aunque los modelos continuos (funciones reales) pueden servir como aproximacion, deben interpretarse con cuidado: no tiene sentido predecir '234.7 estudiantes'."
  },
  {
    "id":"RQ020",
    "componente":"razonamiento",
    "subtema":"estadistica_inferencial",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Los salarios en un municipio tienen media $3.500.000 y mediana $2.200.000. Que interpretacion es MAS solida?",
    "opciones":[
      "La distribucion es simetrica",
      "La distribucion esta sesgada a la derecha: unos pocos salarios muy altos elevan la media por encima de la mediana; la mediana es mas representativa del salario tipico",
      "La mediana esta mal calculada",
      "Todos ganan el mismo salario"
    ],
    "correcta":1,
    "explicacion":"Cuando media > mediana, la distribucion es sesgada positivamente (cola larga a la derecha). En distribuciones de ingresos y salarios, la mediana refleja mejor el 'salario tipico' porque no es distorsionada por outliers como millonarios o CEOs."
  },
  {
    "id":"RQ021",
    "componente":"razonamiento",
    "subtema":"estadistica_inferencial",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"Dos grupos de estudiantes tienen misma media (70) pero desviacion estandar diferente: grupo A tiene DE=5, grupo B tiene DE=20. Que se puede concluir?",
    "opciones":[
      "Los grupos son identicos",
      "El grupo A es MAS homogeneo (calificaciones agrupadas cerca del 70); el grupo B es MAS heterogeneo con estudiantes muy distintos entre si",
      "El grupo B es mejor",
      "El grupo A tiene mejores estudiantes"
    ],
    "correcta":1,
    "explicacion":"La desviacion estandar mide dispersion alrededor de la media. Un DE bajo indica homogeneidad; un DE alto indica alta variabilidad. Dos grupos con igual media pueden diferir enormemente en composicion."
  },
  {
    "id":"RQ022",
    "componente":"razonamiento",
    "subtema":"detección_sesgos",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un estudio encuentra correlacion positiva alta (r=0.9) entre el numero de heladerias en una ciudad y el numero de ahogamientos mensuales. Un periodista escribe: 'Las heladerias causan ahogamientos'. Cual es el error?",
    "opciones":[
      "Ninguno, la correlacion prueba causalidad",
      "Correlacion no implica causalidad. Una tercera variable (el calor del verano) explica ambos fenomenos: mas heladerias abren y mas gente se baña cuando hace calor",
      "El coeficiente 0.9 es muy bajo",
      "Deberia usarse el numero de mesas en las heladerias"
    ],
    "correcta":1,
    "explicacion":"Este es el ejemplo clasico de correlacion espuria: ambas variables dependen de una tercera (temperatura). Establecer causalidad requiere experimento controlado o descartar variables de confusion, no solo correlacion."
  },
  {
    "id":"RQ023",
    "componente":"razonamiento",
    "subtema":"estadistica_inferencial",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un canal de TV quiere estimar la intencion de voto y encuesta a 10.000 personas EN LA CALLE en el norte de Bogota entre 10am y 12pm. Cual es el problema MAS grave?",
    "opciones":[
      "La muestra es pequeña",
      "Sesgo de seleccion: la muestra no es representativa de la poblacion votante (excluye trabajadores, personas de otras zonas, quienes no salen a esa hora)",
      "10.000 es demasiado grande",
      "Debe hacerse a las 3pm"
    ],
    "correcta":1,
    "explicacion":"Un tamaño de muestra grande no salva un sesgo de seleccion. Encuestar solo en cierta zona y horario excluye sistematicamente a grupos completos, produciendo resultados no generalizables. La representatividad importa mas que el tamaño."
  },
  {
    "id":"RQ024",
    "componente":"razonamiento",
    "subtema":"proporcionalidad_avanzada",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Si 6 obreros construyen 3 muros en 12 dias, cuantos dias necesitan 9 obreros para construir 6 muros del mismo tamaño?",
    "opciones":[
      "8 dias",
      "16 dias",
      "12 dias",
      "18 dias"
    ],
    "correcta":1,
    "explicacion":"Regla de tres compuesta. Trabajo total (muros) es directamente proporcional al tiempo e inversamente al numero de obreros. Dias = 12 x (6/3) x (6/9) = 12 x 2 x 0.667 = 16 dias."
  },
  {
    "id":"RQ025",
    "componente":"razonamiento",
    "subtema":"proporcionalidad_avanzada",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Se triplica el radio de una esfera de agua. En que factor aumenta su volumen?",
    "opciones":[
      "3 veces",
      "9 veces",
      "27 veces",
      "6 veces"
    ],
    "correcta":2,
    "explicacion":"El volumen de una esfera es V = (4/3)pi r^3. Al triplicar r, el volumen se multiplica por 3^3 = 27. Este escalado no lineal (potencia cubica) es un error frecuente: la gente asume que triplicar radio triplica volumen."
  },
  {
    "id":"RQ026",
    "componente":"razonamiento",
    "subtema":"proporcionalidad_avanzada",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"Se mezclan 40 litros de alcohol al 70% con 60 litros de alcohol al 40%. Cual es la concentracion final?",
    "opciones":[
      "52%",
      "55%",
      "50%",
      "60%"
    ],
    "correcta":0,
    "explicacion":"Alcohol puro: 40 x 0.70 + 60 x 0.40 = 28 + 24 = 52 litros. Volumen total 100 litros. Concentracion 52/100 = 52%. Promediar directamente 70% y 40% (=55%) es un error clasico: debe ponderarse por volumen."
  },
  {
    "id":"RQ027",
    "componente":"razonamiento",
    "subtema":"proporcionalidad_avanzada",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un producto sube 20% y luego baja 20%. Cual es el precio final respecto al original?",
    "opciones":[
      "Igual al original (0% de cambio)",
      "4% menor que el original",
      "4% mayor que el original",
      "20% menor"
    ],
    "correcta":1,
    "explicacion":"Si el original es 100: sube 20% a 120, y bajar 20% de 120 da 120 x 0.80 = 96. El precio final es 96, es decir 4% menor. Los porcentajes no se cancelan aritmeticamente porque se aplican sobre bases distintas."
  },
  {
    "id":"RQ028",
    "componente":"razonamiento",
    "subtema":"detección_sesgos",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un colegio compara dos metodos de enseñanza (A y B) en dos grados. En grado 6, el metodo A tuvo 80% de aprobacion (40/50) vs B con 75% (60/80). En grado 7, A tuvo 60% (30/50) vs B con 55% (33/60). Al agregar, B tuvo 66.4% (93/140) vs A con 70% (70/100). Que metodo es realmente superior?",
    "opciones":[
      "El metodo B, porque tiene mayor total agregado",
      "El metodo A, porque supera al B en cada grado individualmente (paradoja de Simpson)",
      "Ambos son equivalentes",
      "No se puede concluir sin mas datos"
    ],
    "correcta":1,
    "explicacion":"El metodo A supera al B en cada grado (80>75, 60>55), pero al agregar aparece la paradoja de Simpson: el metodo B se aplico mas a grado 6 (donde ambos aprueban mas), inflando su promedio agregado. Al comparar debe estratificarse por variables de confusion."
  },
  {
    "id":"RQ029",
    "componente":"razonamiento",
    "subtema":"detección_sesgos",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"En el chance han salido rojos 10 veces seguidas. Un apostador razona: 'Como ha salido tanto rojo, ya toca que salga negro'. Que falacia comete?",
    "opciones":[
      "Ninguna, es una prediccion valida",
      "Falacia del jugador: cada tirada es independiente; el pasado no afecta la probabilidad futura si el mecanismo es aleatorio",
      "Sesgo de confirmacion",
      "Sesgo de supervivencia"
    ],
    "correcta":1,
    "explicacion":"En eventos independientes (como ruleta o dado), cada resultado no depende del anterior. La probabilidad de rojo o negro sigue siendo la misma en la siguiente tirada. Creer lo contrario es la falacia del jugador o falacia de Montecarlo."
  },
  {
    "id":"RQ030",
    "componente":"razonamiento",
    "subtema":"detección_sesgos",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un estudiante saca una nota excepcionalmente alta (95) en un examen. En el siguiente examen saca 82 (aun buena, pero menor). El docente concluye: 'Se relajo por la felicitacion, es la prueba de que felicitar desmotiva'. Cual es la explicacion alternativa MAS solida?",
    "opciones":[
      "El docente tiene razon: felicitar desmotiva",
      "Regresion a la media: valores extremos tienden estadisticamente a ser seguidos por valores mas cercanos al promedio del estudiante, sin necesidad de causa psicologica",
      "El segundo examen fue mas dificil",
      "El estudiante hizo trampa"
    ],
    "correcta":1,
    "explicacion":"La regresion a la media explica que quienes tienen desempeños extremos (altos o bajos) tienden a mostrar valores mas cercanos a su media real en la siguiente medicion. Es un artefacto estadistico, no evidencia de que la intervencion (felicitar o regañar) tenga efecto causal."
  },
  {
    "id":"RQ031",
    "componente":"razonamiento",
    "subtema":"detección_sesgos",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un anuncio dice: 'El 90% de nuestros egresados consiguen empleo en 3 meses'. La cifra se calculo solo con los egresados que respondieron a la encuesta enviada por correo. Que sesgo afecta la conclusion?",
    "opciones":[
      "Ninguno, la cifra es objetiva",
      "Sesgo de supervivencia y de no respuesta: los egresados sin empleo tienen menos motivacion para responder, sobreestimando la tasa de empleabilidad real",
      "Sesgo de recuerdo",
      "Falacia del jugador"
    ],
    "correcta":1,
    "explicacion":"Cuando la respuesta es voluntaria, quienes tienen buenas noticias suelen responder mas que quienes tienen malas. La muestra queda sesgada hacia los exitosos. Es un ejemplo de sesgo de supervivencia y de no respuesta combinado."
  },
  {
    "id":"RQ032",
    "componente":"razonamiento",
    "subtema":"probabilidad_condicional",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Una prueba para una enfermedad rara (1 en 1000) tiene 99% de sensibilidad (detecta a los enfermos) y 95% de especificidad (99% correcto en sanos... corregido: da 5% de falsos positivos). Una persona da POSITIVO. Cual es aproximadamente la probabilidad de que realmente este enferma?",
    "opciones":[
      "99%",
      "Aproximadamente 2%: aun con positivo, la enfermedad es tan rara que la mayoria de positivos son falsos positivos (Bayes)",
      "50%",
      "95%"
    ],
    "correcta":1,
    "explicacion":"De 1000 personas: 1 enferma (positiva con probabilidad 99%, aproximadamente 1 positivo verdadero). 999 sanas: 5% de falsos positivos aproximadamente 50. Total positivos aproximadamente 51. P(enferma | positiva) aproximadamente 1/51 aproximadamente 2%. La rareza de la enfermedad hace que los falsos positivos dominen. Este es el resultado clasico del teorema de Bayes que sorprende incluso a medicos."
  },
  {
    "id":"RQ033",
    "componente":"razonamiento",
    "subtema":"probabilidad_condicional",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"Se lanzan dos dados. Cual es la probabilidad de que la suma sea 7 DADO que uno de los dados muestra 3?",
    "opciones":[
      "1/6",
      "2/11",
      "1/11",
      "1/3"
    ],
    "correcta":1,
    "explicacion":"Casos donde al menos un dado es 3: (3,1),(3,2),(3,3),(3,4),(3,5),(3,6),(1,3),(2,3),(4,3),(5,3),(6,3) = 11 casos. De estos, suman 7: (3,4) y (4,3) = 2 casos. Por tanto 2/11. Confundir con P(suma=7) sin condicion (=6/36=1/6) es un error clasico."
  },
  {
    "id":"RQ034",
    "componente":"razonamiento",
    "subtema":"probabilidad_condicional",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"En una urna hay 3 bolas rojas y 2 azules. Se extraen dos bolas sin reposicion. Cual es la probabilidad de sacar dos rojas?",
    "opciones":[
      "9/25",
      "3/10",
      "6/20 = 3/10",
      "2/5"
    ],
    "correcta":1,
    "explicacion":"Sin reposicion: P(1a roja) = 3/5. P(2a roja | 1a roja) = 2/4 = 1/2. Producto = 3/5 x 1/2 = 3/10. La opcion 9/25 corresponderia a extraccion CON reposicion (eventos independientes), lo cual es error frecuente."
  },
  {
    "id":"RQ035",
    "componente":"razonamiento",
    "subtema":"funciones_avanzadas",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"En una grafica de posicion vs tiempo de un carro, la pendiente en un punto representa:",
    "opciones":[
      "La distancia recorrida",
      "La velocidad instantanea (razon de cambio de la posicion respecto al tiempo)",
      "El tiempo transcurrido",
      "La aceleracion"
    ],
    "correcta":1,
    "explicacion":"La pendiente de una grafica f(t) representa la razon de cambio df/dt (derivada). En posicion vs tiempo eso es velocidad. Si fuera velocidad vs tiempo, la pendiente seria aceleracion. Interpretar pendientes es lectura basica de derivadas."
  },
  {
    "id":"RQ036",
    "componente":"razonamiento",
    "subtema":"funciones_avanzadas",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un rectangulo tiene perimetro fijo de 40 metros. Que dimensiones dan el area MAXIMA?",
    "opciones":[
      "20 x 0",
      "10 x 10 (cuadrado): entre todos los rectangulos de perimetro fijo, el cuadrado maximiza el area",
      "15 x 5",
      "12 x 8"
    ],
    "correcta":1,
    "explicacion":"Con perimetro 2(x+y)=40, y=20-x. A(x) = x(20-x) = 20x-x^2. Derivando: A'(x) = 20-2x = 0, x=10. Maximo en x=10, y=10 (cuadrado). Area maxima 100 m^2. Es un resultado geometrico clasico: entre rectangulos de perimetro fijo el cuadrado maximiza area."
  },
  {
    "id":"RQ037",
    "componente":"razonamiento",
    "subtema":"funciones_avanzadas",
    "dificultad":"alta",
    "fuente":"banco_propio",
    "pregunta":"Un banco ofrece dos alternativas para $1.000.000: (A) 6% simple anual durante 10 años, (B) 5% compuesto anual durante 10 años. Cual da mayor monto final?",
    "opciones":[
      "A, porque 6% > 5%",
      "B: 5% compuesto genera $1.628.895 (aproximadamente) vs 6% simple genera $1.600.000. El crecimiento exponencial supera al lineal para plazos suficientemente largos",
      "Son iguales",
      "Depende del banco"
    ],
    "correcta":1,
    "explicacion":"A: 1.000.000 x (1 + 0.06 x 10) = 1.600.000. B: 1.000.000 x (1.05)^10 aproximadamente 1.628.895. El interes compuesto crece exponencialmente y termina superando al simple aun con menor tasa, si el plazo es suficiente. Es la razon por la cual se dice que el interes compuesto es la 'octava maravilla'."
  },
  {
    "id":"RQ038",
    "componente":"razonamiento",
    "subtema":"estimacion",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"Estima el numero de docentes en Colombia (aproximadamente). Poblacion aproximada 50 millones, aproximadamente 10 millones en edad escolar, ratio aproximado 25 estudiantes por docente.",
    "opciones":[
      "40.000",
      "400.000 (aproximadamente 10 millones / 25 estudiantes por docente)",
      "4.000.000",
      "4.000"
    ],
    "correcta":1,
    "explicacion":"Estimacion por orden de magnitud: 10.000.000 estudiantes / 25 = 400.000 docentes. La cifra oficial ronda los 320-400 mil docentes oficiales. Este tipo de estimacion se llama analisis de Fermi y es util para validar rapidamente afirmaciones cuantitativas."
  },
  {
    "id":"RQ039",
    "componente":"razonamiento",
    "subtema":"estimacion",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"Aproxima el valor de la raiz cuadrada de 50 sin calculadora.",
    "opciones":[
      "Aproximadamente 5",
      "Aproximadamente 7.07 (porque 7^2=49 y 8^2=64, y 50 esta muy cerca de 49)",
      "Aproximadamente 25",
      "Aproximadamente 10"
    ],
    "correcta":1,
    "explicacion":"Se ubica entre 7 (49) y 8 (64). Como 50 esta muy cerca de 49, la raiz esta apenas encima de 7. Aproximacion lineal: raiz(50) aproximadamente 7 + (50-49)/(2 x 7) = 7 + 1/14 aproximadamente 7.07. Estimar sin calculadora ayuda a detectar errores gruesos."
  },
  {
    "id":"RQ040",
    "componente":"razonamiento",
    "subtema":"estimacion",
    "dificultad":"media",
    "fuente":"banco_propio",
    "pregunta":"En un colegio de 480 estudiantes, aproximadamente 63 pasaron un examen. Cual es el porcentaje aproximado sin calculadora?",
    "opciones":[
      "Aproximadamente 6%",
      "Aproximadamente 13% (porque 10% de 480 es 48, y 63 esta cerca de 48+10% adicional; 63/480 aproximadamente 0.131)",
      "Aproximadamente 25%",
      "Aproximadamente 50%"
    ],
    "correcta":1,
    "explicacion":"Estimacion rapida: 10% de 480 = 48. 63 es aproximadamente 48 + 15 (aproximadamente 3% adicional), asi que aproximadamente 13%. Calculando exacto: 63/480 = 0.1313 aproximadamente 13.1%. Anclar en el 10% (facil de calcular) y ajustar es una tecnica poderosa de estimacion."
  }
];
