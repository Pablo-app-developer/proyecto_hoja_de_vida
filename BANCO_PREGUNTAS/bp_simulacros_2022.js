// Hub de simulacros - David Tuirán (El Profe Curioso)
// Combina los bancos individuales (2022 liberados + 2026 gratuitos) en SIMULACROS_2022
// Requiere que los archivos bp_2022_*.js y bp_simulacro*_2026.js sean cargados ANTES

var SIMULACROS_2022 = [].concat(
  typeof S2022_PED1        !== 'undefined' ? S2022_PED1        : [],
  typeof S2022_PED2        !== 'undefined' ? S2022_PED2        : [],
  typeof S2022_PED3        !== 'undefined' ? S2022_PED3        : [],
  typeof S2022_V1          !== 'undefined' ? S2022_V1          : [],
  typeof S2022_V2          !== 'undefined' ? S2022_V2          : [],
  typeof S2022_V3          !== 'undefined' ? S2022_V3          : [],
  typeof S2022_N1          !== 'undefined' ? S2022_N1          : [],
  typeof S2022_N2          !== 'undefined' ? S2022_N2          : [],
  typeof S_PROFE_CURIOSO_1 !== 'undefined' ? S_PROFE_CURIOSO_1 : [],
  typeof S_PROFE_CURIOSO_2 !== 'undefined' ? S_PROFE_CURIOSO_2 : []
);

// Lista de simulacros disponibles (para filtros en el UI)
var SIMULACROS_2022_LIST = [
  { key: "Pedagógico #1 - 2022",                        label: "Ped. #1",     componente: "pedagogia"      },
  { key: "Pedagógico #2 - 2022",                        label: "Ped. #2",     componente: "pedagogia"      },
  { key: "Pedagógico #3 - 2022",                        label: "Ped. #3",     componente: "pedagogia"      },
  { key: "Verbal #1 - 2022",                            label: "Verbal #1",   componente: "lectura_critica" },
  { key: "Verbal #2 - 2022",                            label: "Verbal #2",   componente: "lectura_critica" },
  { key: "Verbal #3 - 2022",                            label: "Verbal #3",   componente: "lectura_critica" },
  { key: "Numérico #1 - 2022",                          label: "Num. #1",     componente: "razonamiento"    },
  { key: "Numérico #2 - 2022",                          label: "Num. #2",     componente: "razonamiento"    },
  { key: "Simulacro #1 Gratuito - El Profe Curioso 2026", label: "Sim #1 PC 2026", componente: "pedagogia"      },
  { key: "Simulacro #2 Gratuito - El Profe Curioso 2026", label: "Sim #2 PC 2026", componente: "pedagogia"      }
];
