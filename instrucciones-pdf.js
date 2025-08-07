// INSTRUCCIONES PARA COMPLETAR LA MALLA CON EL PDF
// ================================================

// 1. ESTRUCTURA ACTUAL (ejemplo con materias genéricas)
// Necesitas reemplazar esta información con los datos exactos del PDF

// 2. CÓMO LEER EL PDF DE CORRELATIVIDADES
/*
Busca en el PDF una tabla similar a esta:

CÓDIGO | MATERIA              | CORRELATIVAS PARA CURSAR | CORRELATIVAS PARA RENDIR
-------|---------------------|--------------------------|-------------------------
001    | Matemática I        | Ninguna                  | Ninguna
010    | Matemática II       | 001 (Regular)            | 001 (Aprobada)
020    | Matemática III      | 010 (Aprobada)           | 001, 010 (Aprobadas)

En nuestro sistema:
- "Regular" = correlativasDebiles
- "Aprobada" = correlativasFuertes
*/

// 3. EJEMPLO DE CÓMO CONVERTIR LA INFORMACIÓN
/*
Del PDF: "Para cursar Matemática II necesitas Matemática I Regular"
En el código:
{
    codigo: "010",
    nombre: "Matemática II",
    correlativasFuertes: [],      // Ninguna materia debe estar aprobada
    correlativasDebiles: ["001"]  // Matemática I debe estar regular
}

Del PDF: "Para cursar Programación III necesitas Programación II Aprobada y Matemática II Regular"
En el código:
{
    codigo: "032",
    nombre: "Programación III",
    correlativasFuertes: ["021"],     // Programación II debe estar aprobada
    correlativasDebiles: ["010"]      // Matemática II debe estar regular
}
*/

// 4. PLANTILLA PARA COMPLETAR
// Copia esta estructura y completa con los datos del PDF:

const plantillaMaterias = {
    1: [
        // 1° AÑO - Materias 001 a 009
        { codigo: "001", nombre: "NOMBRE_DESDE_PDF", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "002", nombre: "NOMBRE_DESDE_PDF", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "003", nombre: "NOMBRE_DESDE_PDF", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "004", nombre: "NOMBRE_DESDE_PDF", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "005", nombre: "NOMBRE_DESDE_PDF", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "006", nombre: "NOMBRE_DESDE_PDF", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "007", nombre: "NOMBRE_DESDE_PDF", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "008", nombre: "NOMBRE_DESDE_PDF", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "009", nombre: "NOMBRE_DESDE_PDF", correlativasFuertes: [], correlativasDebiles: [] }
    ],
    2: [
        // 2° AÑO - Materias 010 a 019
        { codigo: "010", nombre: "NOMBRE_DESDE_PDF", correlativasFuertes: ["XXX"], correlativasDebiles: ["YYY"] },
        // ... continúa con las demás
    ],
    3: [
        // 3° AÑO - Materias 020 a 030
    ],
    4: [
        // 4° AÑO - Materias 031 a 040
    ],
    5: [
        // 5° AÑO - Materias 041 a 048
    ]
};

// 5. PASOS PARA ACTUALIZAR:
/*
1. Abre el PDF de correlatividades
2. Para cada materia, identifica:
   - Código (001, 002, etc.)
   - Nombre completo
   - Qué materias necesitas REGULAR para cursarla (correlativasDebiles)
   - Qué materias necesitas APROBADAS para cursarla (correlativasFuertes)
3. Reemplaza la información en script.js
4. Guarda y recarga la página
*/

// 6. VERIFICACIÓN
/*
Para verificar que está correcto:
1. Una materia de 1° año no debería tener correlativas
2. Una materia de 2° año debería tener correlativas de 1° año
3. Y así sucesivamente...
4. Prueba haciendo clic en las materias para verificar que se bloqueen/desbloqueen correctamente
*/

// 7. CONSEJOS
/*
- Empieza por las materias de 1° año (generalmente sin correlativas)
- Continúa año por año
- Si una materia tiene muchas correlativas, revisa bien el PDF
- Las materias electivas suelen tener pocas o ninguna correlativa
- Proyecto Final suele tener muchas correlativas
*/
