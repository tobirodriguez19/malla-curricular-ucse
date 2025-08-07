// HERRAMIENTA PARA COMPLETAR MATERIAS DESDE EL EXCEL
// =================================================

// INSTRUCCIONES PASO A PASO:
// 1. Abre el Excel "Correlatividades ING en INFORMATICA en Blanco"
// 2. Para cada materia, copia la información aquí usando este formato
// 3. Luego copia y pega cada año en el archivo script.js

// FORMATO DE CONVERSIÓN:
// Excel: "4°, cod 34, Base de Datos III, F Base de Datos I (18). D Base de Datos II (25)"
// Código: { codigo: "34", nombre: "Base de Datos III", correlativasFuertes: ["18"], correlativasDebiles: ["25"] }

// ===============================
// 1° AÑO (códigos 1-9)
// ===============================
const año1 = [
    { codigo: "1", nombre: "Filosofía", correlativasFuertes: [], correlativasDebiles: [] },
    { codigo: "2", nombre: "Algoritmos y Programación", correlativasFuertes: [], correlativasDebiles: [] },
    { codigo: "3", nombre: "Álgebra", correlativasFuertes: [], correlativasDebiles: [] },
    { codigo: "4", nombre: "Calculo I", correlativasFuertes: [], correlativasDebiles: [] },
    { codigo: "5", nombre: "Arquitectura de Computadoras", correlativasFuertes: [], correlativasDebiles: [] },
    { codigo: "6", nombre: "Comunicación Oral y Escrita", correlativasFuertes: [], correlativasDebiles: [] },
    { codigo: "7", nombre: "Calculo II", correlativasFuertes: [], correlativasDebiles: [] },
    { codigo: "8", nombre: "Algebra Lineal", correlativasFuertes: [], correlativasDebiles: [4] },
    { codigo: "9", nombre: "Organización Empresarial", correlativasFuertes: [], correlativasDebiles: [3] }
];

// ===============================
// 2° AÑO (códigos 10-19)
// ===============================
const año2 = [
    { codigo: "10", nombre: "Teología", correlativasFuertes: [], correlativasDebiles: [] },
    { codigo: "11", nombre: "Inglés", correlativasFuertes: [], correlativasDebiles: [] },
    { codigo: "12", nombre: "Programación I", correlativasFuertes: [], correlativasDebiles: [2,5] },
    { codigo: "13", nombre: "Estructuras de Datos", correlativasFuertes: [], correlativasDebiles: [2] },
    { codigo: "14", nombre: "Sistemas de Informacion I", correlativasFuertes: [], correlativasDebiles: [2,9] },
    { codigo: "15", nombre: "Matemática Discreta", correlativasFuertes: [], correlativasDebiles: [3,4] },
    { codigo: "16", nombre: "Física I", correlativasFuertes: [4], correlativasDebiles: [7] },
    { codigo: "17", nombre: "Sistemas Operativos I", correlativasFuertes: [], correlativasDebiles: [5,13] },
    { codigo: "18", nombre: "Base de Datos I", correlativasFuertes: [], correlativasDebiles: [13,14] },
    { codigo: "19", nombre: "Física II", correlativasFuertes: [], correlativasDebiles: [7,16] }
];

// ===============================
// 3° AÑO (códigos 20-30)
// ===============================
const año3 = [
    { codigo: "20", nombre: "Programacion II", correlativasFuertes: [13], correlativasDebiles: [12,18] },
    { codigo: "21", nombre: "Probabilidad y Estadística", correlativasFuertes: [4,8], correlativasDebiles: [] },
    { codigo: "22", nombre: "Información y Comunicación", correlativasFuertes: [], correlativasDebiles: [17] },
    { codigo: "23", nombre: "Legislación y Gestión Ambiental", correlativasFuertes: [9], correlativasDebiles: [] },
    { codigo: "24", nombre: "Sistemas Operativos II", correlativasFuertes: [13], correlativasDebiles: [17] },
    { codigo: "25", nombre: "Base de Datos II", correlativasFuertes: [14], correlativasDebiles: [18] },
    { codigo: "26", nombre: "Análisis Numérico", correlativasFuertes: [2,7], correlativasDebiles: [] },
    { codigo: "27", nombre: "Redes de Computadoras", correlativasFuertes: [], correlativasDebiles: [22] },
    { codigo: "28", nombre: "Ingeniería de Software I", correlativasFuertes: [17,18], correlativasDebiles: [22,25] },
    { codigo: "29", nombre: "Estrategias y habilidades digitales (Electiva I)", correlativasFuertes: [6,9], correlativasDebiles: [18,22] },
    { codigo: "30", nombre: "Servicio Comunitario", correlativasFuertes: [], correlativasDebiles: [1,10] }
];

// ===============================
// 4° AÑO (códigos 31-40)
// ===============================
const año4 = [
    { codigo: "31", nombre: "Inteligencia Artificial", correlativasFuertes: [14], correlativasDebiles: [20,21] },
    { codigo: "32", nombre: "Sistemas de Información II", correlativasFuertes: [14,17,18], correlativasDebiles: [20,25,27] },
    { codigo: "33", nombre: "Ética y Profesión", correlativasFuertes: [], correlativasDebiles: [30] },
    { codigo: "34", nombre: "Base de Datos III", correlativasFuertes: [18], correlativasDebiles: [25] },
    { codigo: "35", nombre: "Ingeniería de Software II", correlativasFuertes: [13], correlativasDebiles: [27,28] },
    { codigo: "36", nombre: "Lenguajes Formales y Autómatas", correlativasFuertes: [15], correlativasDebiles: [20] },
    { codigo: "37", nombre: "Modelos y Simulación", correlativasFuertes: [21], correlativasDebiles: [26] },
    { codigo: "38", nombre: "Seguridad Informática", correlativasFuertes: [22,23], correlativasDebiles: [25,28] },
    { codigo: "39", nombre: "Ingeniería Web (Electiva II)", correlativasFuertes: [12,14,18], correlativasDebiles: [20,25] },
    { codigo: "40", nombre: "Innovación e Investigación Tecnológica", correlativasFuertes: [], correlativasDebiles: [28] }
];

// ===============================
// 5° AÑO (códigos 41-48)
// ===============================
const año5 = [
    { codigo: "41", nombre: "Trabajo Final", correlativasFuertes: [20,24,27,28], correlativasDebiles: [31,32,34,35,36,38,40] },
    { codigo: "42", nombre: "Economía para Ingenieros", correlativasFuertes: [9], correlativasDebiles: [33] },
    { codigo: "43", nombre: "Formulación y Evaluación de Proyectos TIC", correlativasFuertes: [], correlativasDebiles: [32,40] },
    { codigo: "44", nombre: "Tópicos Avanzados en Inteligencia Artifical (Electiva III)", correlativasFuertes: [], correlativasDebiles: [25,31] },
    { codigo: "45", nombre: "Emprendedorismo", correlativasFuertes: [], correlativasDebiles: [40,42] },
    { codigo: "46", nombre: "Dirección de Proyectos TIC", correlativasFuertes: [25], correlativasDebiles: [35,43] },
    { codigo: "47", nombre: "Auditoría y Peritaje", correlativasFuertes: [24], correlativasDebiles: [38] },
    { codigo: "48", nombre: "Práctica Profesional Supervisada", correlativasFuertes: [], correlativasDebiles: [] }
];

// ===============================
// EJEMPLOS DE INTERPRETACIÓN
// ===============================

/*
EJEMPLO 1: Del Excel
"3°, cod 25, Análisis de Sistemas I, D Programación I (11). D Matemática II (10)"

Se convierte en:
{ codigo: "25", nombre: "Análisis de Sistemas I", correlativasFuertes: [], correlativasDebiles: ["11", "10"] }

EJEMPLO 2: Del Excel  
"4°, cod 32, Sistemas Distribuidos, F Sistemas Operativos (22). F Redes I (26). D Base de Datos I (18)"

Se convierte en:
{ codigo: "32", nombre: "Sistemas Distribuidos", correlativasFuertes: ["22", "26"], correlativasDebiles: ["18"] }

EJEMPLO 3: Sin correlativas
"1°, cod 1, Matemática I"

Se convierte en:
{ codigo: "1", nombre: "Matemática I", correlativasFuertes: [], correlativasDebiles: [] }
*/

// ===============================
// REGLAS DE CONVERSIÓN
// ===============================

/*
1. F (Fuerte) → correlativasFuertes: ["codigo"]
   - Para CURSAR la materia necesitas estas materias APROBADAS

2. D (Débil) → correlativasDebiles: ["codigo"]  
   - Para CURSAR la materia necesitas estas materias REGULARES

3. Si hay múltiples correlativas del mismo tipo:
   F Materia1 (11). F Materia2 (12) → correlativasFuertes: ["11", "12"]

4. Si hay correlativas mixtas:
   F Materia1 (11). D Materia2 (12) → correlativasFuertes: ["11"], correlativasDebiles: ["12"]

5. Sin correlativas → correlativasFuertes: [], correlativasDebiles: []
*/

// ===============================
// PASOS PARA COMPLETAR
// ===============================

/*
1. Abre el Excel en otra ventana
2. Ve fila por fila completando cada materia
3. Reemplaza "NOMBRE_EXCEL" con el nombre real
4. Agrega las correlativas según las reglas de arriba
5. Copia cada año y reemplaza en script.js
6. Guarda y prueba la aplicación
*/
