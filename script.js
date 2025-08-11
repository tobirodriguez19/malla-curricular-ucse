const materias = {
    1: [
        { codigo: "1", nombre: "Filosofía", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "2", nombre: "Algoritmos y Programación", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "3", nombre: "Álgebra", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "4", nombre: "Calculo I", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "5", nombre: "Arquitectura de Computadoras", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "6", nombre: "Comunicación Oral y Escrita", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "7", nombre: "Calculo II", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "8", nombre: "Algebra Lineal", correlativasFuertes: [], correlativasDebiles: ["4"] },
        { codigo: "9", nombre: "Organización Empresarial", correlativasFuertes: [], correlativasDebiles: ["3"] }
    ],
    2: [
        { codigo: "10", nombre: "Teología", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "11", nombre: "Inglés", correlativasFuertes: [], correlativasDebiles: [] },
        { codigo: "12", nombre: "Programación I", correlativasFuertes: [], correlativasDebiles: ["2","5"] },
        { codigo: "13", nombre: "Estructuras de Datos", correlativasFuertes: [], correlativasDebiles: ["2"] },
        { codigo: "14", nombre: "Sistemas de Informacion I", correlativasFuertes: [], correlativasDebiles: ["2","9"] },
        { codigo: "15", nombre: "Matemática Discreta", correlativasFuertes: [], correlativasDebiles: ["3","4"] },
        { codigo: "16", nombre: "Física I", correlativasFuertes: ["4"], correlativasDebiles: ["7"] },
        { codigo: "17", nombre: "Sistemas Operativos I", correlativasFuertes: [], correlativasDebiles: ["5","13"] },
        { codigo: "18", nombre: "Base de Datos I", correlativasFuertes: [], correlativasDebiles: ["13","14"] },
        { codigo: "19", nombre: "Física II", correlativasFuertes: [], correlativasDebiles: ["7","16"] }
    ],
    3: [
        { codigo: "20", nombre: "Programacion II", correlativasFuertes: ["13"], correlativasDebiles: ["12","18"] },
        { codigo: "21", nombre: "Probabilidad y Estadística", correlativasFuertes: ["4","8"], correlativasDebiles: [] },
        { codigo: "22", nombre: "Información y Comunicación", correlativasFuertes: [], correlativasDebiles: ["17"] },
        { codigo: "23", nombre: "Legislación y Gestión Ambiental", correlativasFuertes: ["9"], correlativasDebiles: [] },
        { codigo: "24", nombre: "Sistemas Operativos II", correlativasFuertes: ["13"], correlativasDebiles: ["17"] },
        { codigo: "25", nombre: "Base de Datos II", correlativasFuertes: ["14"], correlativasDebiles: ["18"] },
        { codigo: "26", nombre: "Análisis Numérico", correlativasFuertes: ["2","7"], correlativasDebiles: [] },
        { codigo: "27", nombre: "Redes de Computadoras", correlativasFuertes: [], correlativasDebiles: ["22"] },
        { codigo: "28", nombre: "Ingeniería de Software I", correlativasFuertes: ["17","18"], correlativasDebiles: ["22","25"] },
        { codigo: "29", nombre: "Estrategias y habilidades digitales (Electiva I)", correlativasFuertes: ["6","9"], correlativasDebiles: ["18","22"] },
        { codigo: "30", nombre: "Servicio Comunitario", correlativasFuertes: [], correlativasDebiles: ["1","10"] }
    ],
    4: [
        { codigo: "31", nombre: "Inteligencia Artificial", correlativasFuertes: ["14"], correlativasDebiles: ["20","21"] },
        { codigo: "32", nombre: "Sistemas de Información II", correlativasFuertes: ["14","17","18"], correlativasDebiles: ["20","25","27"] },
        { codigo: "33", nombre: "Ética y Profesión", correlativasFuertes: [], correlativasDebiles: ["30"] },
        { codigo: "34", nombre: "Base de Datos III", correlativasFuertes: ["18"], correlativasDebiles: ["25"] },
        { codigo: "35", nombre: "Ingeniería de Software II", correlativasFuertes: ["13"], correlativasDebiles: ["27","28"] },
        { codigo: "36", nombre: "Lenguajes Formales y Autómatas", correlativasFuertes: ["15"], correlativasDebiles: ["20"] },
        { codigo: "37", nombre: "Modelos y Simulación", correlativasFuertes: ["21"], correlativasDebiles: ["26"] },
        { codigo: "38", nombre: "Seguridad Informática", correlativasFuertes: ["22","23"], correlativasDebiles: ["25","28"] },
        { codigo: "39", nombre: "Ingeniería Web (Electiva II)", correlativasFuertes: ["12","14","18"], correlativasDebiles: ["20","25"] },
        { codigo: "40", nombre: "Innovación e Investigación Tecnológica", correlativasFuertes: [], correlativasDebiles: ["28"] }
    ],
    5: [
        { codigo: "41", nombre: "Trabajo Final", correlativasFuertes: ["20","24","27","28"], correlativasDebiles: ["31","32","34","35","36","38","40"] },
        { codigo: "42", nombre: "Economía para Ingenieros", correlativasFuertes: ["9"], correlativasDebiles: ["33"] },
        { codigo: "43", nombre: "Formulación y Evaluación de Proyectos TIC", correlativasFuertes: [], correlativasDebiles: ["32","40"] },
        { codigo: "44", nombre: "Tópicos Avanzados en Inteligencia Artifical (Electiva III)", correlativasFuertes: [], correlativasDebiles: ["25","31"] },
        { codigo: "45", nombre: "Emprendedorismo", correlativasFuertes: [], correlativasDebiles: ["40","42"] },
        { codigo: "46", nombre: "Dirección de Proyectos TIC", correlativasFuertes: ["25"], correlativasDebiles: ["35","43"] },
        { codigo: "47", nombre: "Auditoría y Peritaje", correlativasFuertes: ["24"], correlativasDebiles: ["38"] },
        { codigo: "48", nombre: "Práctica Profesional Supervisada", correlativasFuertes: [], correlativasDebiles: [] }
    ]
};

// Estados posibles de una materia
const ESTADOS = {
    NO_CURSADA: 'no-cursada',
    CURSANDO: 'cursando',
    REGULAR: 'regular',
    APROBADA: 'aprobada',
    PROMOCIONADA: 'promocionada',
    BLOQUEADA: 'bloqueada'
};

// Almacenar el estado actual de cada materia
let estadoMaterias = {};

// Variables para Firebase
let firebaseUser = null;
let isSyncEnabled = false;
let isInitialLoad = true;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    inicializarMaterias();
    renderizarMaterias();
    actualizarEstados();
    
    // Mostrar modal de login inmediatamente
    showLoginModal();
    
    // Inicializar Firebase cuando esté disponible
    setTimeout(() => {
        if (window.firebaseAuth) {
            initializeFirebase();
        }
    }, 1000);
});

function showLoginModal() {
    console.log('🔐 Mostrando modal de login');
    
    // Mostrar el modal inmediatamente
    document.getElementById('loginModal').style.display = 'flex';
    
    // Verificar si hay un usuario ya autenticado cada 500ms
    const checkAuthInterval = setInterval(() => {
        if (window.firebaseAuth) {
            window.onAuthStateChanged(window.firebaseAuth, (user) => {
                if (user) {
                    // Usuario autenticado, cerrar modal
                    console.log('✅ Usuario autenticado, cerrando modal');
                    document.getElementById('loginModal').style.display = 'none';
                    clearInterval(checkAuthInterval);
                }
            });
        }
    }, 500);
}

function inicializarMaterias() {
    // Inicializar todas las materias como no cursadas
    for (let año in materias) {
        materias[año].forEach(materia => {
            estadoMaterias[materia.codigo] = ESTADOS.NO_CURSADA;
        });
    }
}

function renderizarMaterias() {
    for (let año in materias) {
        const container = document.getElementById(`year-${año}`);
        container.innerHTML = '';
        
        materias[año].forEach(materia => {
            const materiaElement = crearElementoMateria(materia);
            container.appendChild(materiaElement);
        });
    }
    
    // Actualizar colores de correlativas después del renderizado inicial
    setTimeout(() => {
        actualizarColoresCorrelativas();
    }, 100);
}

function crearElementoMateria(materia) {
    const div = document.createElement('div');
    div.className = 'subject';
    div.dataset.codigo = materia.codigo;
    
    div.innerHTML = `
        <div class="subject-header">
            <div class="subject-code">${materia.codigo}</div>
            <div class="subject-name">${materia.nombre}</div>
        </div>
        <div class="subject-status">${getStatusText(ESTADOS.NO_CURSADA)}</div>
        <div class="correlativas">
            ${materia.correlativasFuertes.length > 0 ? 
                `<div><span class="correlativas-label">F:</span>${materia.correlativasFuertes.map(c => 
                    `<span class="correlativas-fuertes" data-codigo="${c}">${c}</span>`
                ).join('')}</div>` : ''}
            ${materia.correlativasDebiles.length > 0 ? 
                `<div><span class="correlativas-label">D:</span>${materia.correlativasDebiles.map(c => 
                    `<span class="correlativas-debiles" data-codigo="${c}">${c}</span>`
                ).join('')}</div>` : ''}
        </div>
    `;
    
    div.addEventListener('click', () => cambiarEstadoMateria(materia.codigo));
    
    return div;
}

function cambiarEstadoMateria(codigo) {
    const estadoActual = estadoMaterias[codigo];
    const materia = encontrarMateriaPorCodigo(codigo);
    
    if (!materia) return;
    
    let nuevoEstado;
    
    // Si la materia está bloqueada, mostrar mensaje informativo y no cambiar estado
    if (estadoActual === ESTADOS.BLOQUEADA) {
        mostrarMensajeBloqueada(materia);
        return;
    }
    
    // Verificar si puede avanzar a APROBADA o PROMOCIONADA
    const puedeRendir = verificarSiPuedesRendir(codigo);
    
    // Ciclo de estados con restricciones
    switch (estadoActual) {
        case ESTADOS.NO_CURSADA:
            nuevoEstado = ESTADOS.CURSANDO;
            break;
        case ESTADOS.CURSANDO:
            nuevoEstado = ESTADOS.REGULAR;
            break;
        case ESTADOS.REGULAR:
            // Solo puede aprobar si tiene TODAS las correlativas aprobadas
            if (puedeRendir) {
                nuevoEstado = ESTADOS.APROBADA;
            } else {
                // Si no puede rendir, vuelve a No Cursada
                nuevoEstado = ESTADOS.NO_CURSADA;
                mostrarMensajeRestriccion(materia);
            }
            break;
        case ESTADOS.APROBADA:
            nuevoEstado = ESTADOS.PROMOCIONADA;
            break;
        case ESTADOS.PROMOCIONADA:
            nuevoEstado = ESTADOS.NO_CURSADA;
            break;
        default:
            nuevoEstado = ESTADOS.NO_CURSADA;
    }
    
    // Guardar el estado anterior para poder revertir si es necesario
    const estadoAnterior = estadoActual;
    estadoMaterias[codigo] = nuevoEstado;
    
    console.log(`Cambio: ${codigo} de ${estadoAnterior} a ${nuevoEstado}`);
    
    // NUEVA FUNCIONALIDAD: Desbloqueo automático
    // Si una materia pasa a estado APROBADA, PROMOCIONADA o REGULAR, desbloquear materias dependientes
    if ((nuevoEstado === ESTADOS.APROBADA || nuevoEstado === ESTADOS.PROMOCIONADA || nuevoEstado === ESTADOS.REGULAR) && 
        (estadoAnterior !== ESTADOS.APROBADA && estadoAnterior !== ESTADOS.PROMOCIONADA && estadoAnterior !== ESTADOS.REGULAR)) {
        console.log(`Intentando desbloquear dependientes de ${codigo}`);
        desbloquearMateriasDependientes(codigo);
    }
    
    // Si una materia vuelve a NO_CURSADA desde APROBADA/PROMOCIONADA/REGULAR, verificar bloqueos
    if (nuevoEstado === ESTADOS.NO_CURSADA && 
        (estadoAnterior === ESTADOS.APROBADA || estadoAnterior === ESTADOS.PROMOCIONADA || estadoAnterior === ESTADOS.REGULAR)) {
        verificarBloqueosPorRegresion(codigo);
    }
    
    actualizarEstados();
    
    // Sincronizar con Firebase si está habilitado
    console.log('🔄 Verificando sincronización:', { isSyncEnabled, firebaseUser: !!firebaseUser });
    if (isSyncEnabled && firebaseUser) {
        console.log('☁️ Sincronizando cambio con Firebase...');
        syncToFirebase();
    } else {
        console.log('❌ No se puede sincronizar:', { isSyncEnabled, hasFirebaseUser: !!firebaseUser });
    }
}

function mostrarMensajeBloqueada(materia) {
    // Encontrar qué correlativas faltan para poder cursar
    const correlativasFaltantes = [];
    
    // Verificar correlativas fuertes - necesitan estar APROBADAS o PROMOCIONADAS
    for (let correlativa of materia.correlativasFuertes) {
        const codigoCorrelativa = String(correlativa);
        const estadoCorrelativa = estadoMaterias[codigoCorrelativa];
        if (estadoCorrelativa !== ESTADOS.APROBADA && estadoCorrelativa !== ESTADOS.PROMOCIONADA) {
            const materiaCorrelativa = encontrarMateriaPorCodigo(codigoCorrelativa);
            const estadoTexto = estadoCorrelativa === ESTADOS.NO_CURSADA ? 'no cursada' : 
                              estadoCorrelativa === ESTADOS.CURSANDO ? 'cursando' : 
                              estadoCorrelativa === ESTADOS.REGULAR ? 'regular' : 
                              estadoCorrelativa === ESTADOS.BLOQUEADA ? 'bloqueada' : estadoCorrelativa;
            correlativasFaltantes.push({
                codigo: codigoCorrelativa,
                nombre: materiaCorrelativa ? materiaCorrelativa.nombre : 'Materia no encontrada',
                tipo: 'fuerte',
                estadoActual: estadoTexto,
                requiere: 'APROBADA o PROMOCIONADA'
            });
        }
    }
    
    // Verificar correlativas débiles - necesitan estar REGULARES, APROBADAS o PROMOCIONADAS
    for (let correlativa of materia.correlativasDebiles) {
        const codigoCorrelativa = String(correlativa);
        const estadoCorrelativa = estadoMaterias[codigoCorrelativa];
        if (estadoCorrelativa !== ESTADOS.REGULAR && 
            estadoCorrelativa !== ESTADOS.APROBADA && 
            estadoCorrelativa !== ESTADOS.PROMOCIONADA) {
            const materiaCorrelativa = encontrarMateriaPorCodigo(codigoCorrelativa);
            const estadoTexto = estadoCorrelativa === ESTADOS.NO_CURSADA ? 'no cursada' : 
                              estadoCorrelativa === ESTADOS.CURSANDO ? 'cursando' : 
                              estadoCorrelativa === ESTADOS.BLOQUEADA ? 'bloqueada' : estadoCorrelativa;
            correlativasFaltantes.push({
                codigo: codigoCorrelativa,
                nombre: materiaCorrelativa ? materiaCorrelativa.nombre : 'Materia no encontrada',
                tipo: 'débil',
                estadoActual: estadoTexto,
                requiere: 'REGULAR, APROBADA o PROMOCIONADA'
            });
        }
    }
    
    if (correlativasFaltantes.length > 0) {
        const notification = document.createElement('div');
        notification.className = 'bloqueo-notification';
        notification.innerHTML = `
            <strong>🔒 ${materia.nombre} está BLOQUEADA</strong><br>
            <small>Necesitas completar estas correlativas:</small><br><br>
            ${correlativasFaltantes.map(c => 
                `• <strong>${c.codigo} - ${c.nombre}</strong><br>
                   &nbsp;&nbsp;Estado actual: <em>${c.estadoActual}</em><br>
                   &nbsp;&nbsp;Necesitas: <strong>${c.requiere}</strong><br>
                   &nbsp;&nbsp;Tipo: ${c.tipo === 'fuerte' ? 'Correlativa Fuerte (F)' : 'Correlativa Débil (D)'}<br>`
            ).join('<br>')}
        `;
        
        document.body.appendChild(notification);
        
        // Remover la notificación después de 8 segundos (más tiempo para leer)
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 8000);
    }
}

function mostrarMensajeRestriccion(materia) {
    // Encontrar qué correlativas faltan
    const correlativasFaltantes = [];
    
    // Verificar correlativas fuertes
    for (let correlativa of materia.correlativasFuertes) {
        const codigoCorrelativa = String(correlativa);
        const estadoCorrelativa = estadoMaterias[codigoCorrelativa];
        if (estadoCorrelativa !== ESTADOS.APROBADA && estadoCorrelativa !== ESTADOS.PROMOCIONADA) {
            const materiaCorrelativa = encontrarMateriaPorCodigo(codigoCorrelativa);
            correlativasFaltantes.push(`${codigoCorrelativa} ${materiaCorrelativa ? materiaCorrelativa.nombre : ''} (debe estar APROBADA)`);
        }
    }
    
    // Verificar correlativas débiles
    for (let correlativa of materia.correlativasDebiles) {
        const codigoCorrelativa = String(correlativa);
        const estadoCorrelativa = estadoMaterias[codigoCorrelativa];
        if (estadoCorrelativa !== ESTADOS.APROBADA && estadoCorrelativa !== ESTADOS.PROMOCIONADA) {
            const materiaCorrelativa = encontrarMateriaPorCodigo(codigoCorrelativa);
            correlativasFaltantes.push(`${codigoCorrelativa} ${materiaCorrelativa ? materiaCorrelativa.nombre : ''} (debe estar APROBADA)`);
        }
    }
    
    if (correlativasFaltantes.length > 0) {
        const notification = document.createElement('div');
        notification.className = 'bloqueo-notification';
        notification.innerHTML = `
            <strong>⚠️ No puedes aprobar ${materia.nombre}</strong><br>
            <small>Faltan correlativas:</small><br>
            ${correlativasFaltantes.map(c => `• ${c}`).join('<br>')}
        `;
        
        document.body.appendChild(notification);
        
        // Remover la notificación después de 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
    }
}

function desbloquearMateriasDependientes(codigoAprobada) {
    // Buscar todas las materias que tienen esta como correlativa
    const materiasDesbloqueadas = [];
    
    console.log(`Buscando materias que dependan de ${codigoAprobada}`);
    
    for (let año in materias) {
        materias[año].forEach(materia => {
            // Si esta materia tiene como correlativa la que acabamos de aprobar
            const tieneCorrelativaFuerte = materia.correlativasFuertes.some(c => String(c) === String(codigoAprobada));
            const tieneCorrelativaDebil = materia.correlativasDebiles.some(c => String(c) === String(codigoAprobada));
            
            if (tieneCorrelativaFuerte || tieneCorrelativaDebil) {
                console.log(`  ${materia.codigo} ${materia.nombre} depende de ${codigoAprobada}, estado actual: ${estadoMaterias[materia.codigo]}`);
            }
            
            if ((tieneCorrelativaFuerte || tieneCorrelativaDebil) && 
                estadoMaterias[materia.codigo] === ESTADOS.BLOQUEADA) {
                
                console.log(`  Verificando si ${materia.codigo} puede desbloquearse...`);
                // Verificar si ahora puede cursarse
                if (verificarSiPuedesCursar(materia)) {
                    estadoMaterias[materia.codigo] = ESTADOS.NO_CURSADA;
                    materiasDesbloqueadas.push(materia);
                    console.log(`✅ Desbloqueada: ${materia.nombre} (${materia.codigo})`);
                }
            }
        });
    }
    
    // Mostrar notificación si se desbloquearon materias
    if (materiasDesbloqueadas.length > 0) {
        mostrarNotificacionDesbloqueo(materiasDesbloqueadas);
    }
}

function verificarBloqueosPorRegresion(codigoRegresada) {
    // Si una materia vuelve a NO_CURSADA, bloquear las que la necesitaban
    const materiasBloqueadas = [];
    
    for (let año in materias) {
        materias[año].forEach(materia => {
            const tieneCorrelativaFuerte = materia.correlativasFuertes.some(c => String(c) === String(codigoRegresada));
            const tieneCorrelativaDebil = materia.correlativasDebiles.some(c => String(c) === String(codigoRegresada));
            
            if (tieneCorrelativaFuerte || tieneCorrelativaDebil) {
                // Si la materia estaba disponible y ahora no puede cursarse, bloquearla
                if (estadoMaterias[materia.codigo] === ESTADOS.NO_CURSADA && 
                    !verificarSiPuedesCursar(materia)) {
                    estadoMaterias[materia.codigo] = ESTADOS.BLOQUEADA;
                    materiasBloqueadas.push(materia);
                    console.log(`🔒 Bloqueada: ${materia.nombre} (${materia.codigo})`);
                }
            }
        });
    }
    
    // Mostrar notificación si se bloquearon materias
    if (materiasBloqueadas.length > 0) {
        mostrarNotificacionBloqueo(materiasBloqueadas);
    }
}

function mostrarNotificacionDesbloqueo(materias) {
    const notification = document.createElement('div');
    notification.className = 'desbloqueo-notification';
    notification.innerHTML = `
        <strong>🎉 ¡Materias Desbloqueadas!</strong><br>
        ${materias.map(m => `• ${m.nombre}`).join('<br>')}
    `;
    
    document.body.appendChild(notification);
    
    // Remover la notificación después de 4 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 4000);
}

function mostrarNotificacionBloqueo(materias) {
    const notification = document.createElement('div');
    notification.className = 'bloqueo-notification';
    notification.innerHTML = `
        <strong>🔒 Materias Bloqueadas</strong><br>
        ${materias.map(m => `• ${m.nombre}`).join('<br>')}
    `;
    
    document.body.appendChild(notification);
    
    // Remover la notificación después de 4 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 4000);
}

function actualizarEstados() {
    console.log('=== actualizarEstados llamado ===');
    // Primero verificar qué materias están bloqueadas
    verificarMateriasBloquedas();
    
    // Actualizar la visualización de todas las materias
    for (let codigo in estadoMaterias) {
        const elemento = document.querySelector(`[data-codigo="${codigo}"]`);
        if (elemento) {
            const estado = estadoMaterias[codigo];
            
            // Remover todas las clases de estado
            Object.values(ESTADOS).forEach(clase => {
                elemento.classList.remove(clase);
            });
            
            // Agregar la clase del estado actual
            elemento.classList.add(estado);
            
            // Actualizar el texto del estado
            const statusElement = elemento.querySelector('.subject-status');
            statusElement.textContent = getStatusText(estado);
            statusElement.className = `subject-status ${estado}`;
        }
    }
    
    // Actualizar colores de correlativas
    actualizarColoresCorrelativas();
    
    console.log('=== Estado final de las materias ===');
    console.log('Materia 7:', estadoMaterias['7']);
    console.log('Materia 16:', estadoMaterias['16']);
    console.log('Materia 19:', estadoMaterias['19']);
}

function actualizarColoresCorrelativas() {
    // Actualizar todos los elementos de correlativas según su estado
    const correlativasElements = document.querySelectorAll('.correlativas-fuertes, .correlativas-debiles');
    
    correlativasElements.forEach(element => {
        const codigoCorrelativa = element.dataset.codigo;
        const estadoCorrelativa = estadoMaterias[codigoCorrelativa];
        
        // Limpiar clases de estado anteriores
        element.classList.remove('aprobada', 'regular', 'no-cursada', 'cursando');
        
        // Aplicar la clase según el estado
        if (estadoCorrelativa === ESTADOS.APROBADA || estadoCorrelativa === ESTADOS.PROMOCIONADA) {
            element.classList.add('aprobada');
        } else if (estadoCorrelativa === ESTADOS.REGULAR) {
            element.classList.add('regular');
        } else {
            // Para NO_CURSADA, CURSANDO, o BLOQUEADA - usar estilo rojo
            element.classList.add('no-cursada');
        }
    });
}

function verificarMateriasBloquedas() {
    for (let año in materias) {
        materias[año].forEach(materia => {
            const estado = estadoMaterias[materia.codigo];
            
            // Solo verificar si la materia no está cursada O está bloqueada
            if (estado === ESTADOS.NO_CURSADA || estado === ESTADOS.BLOQUEADA) {
                const puedesCursar = verificarSiPuedesCursar(materia);
                console.log(`verificarMateriasBloquedas: ${materia.codigo} puede cursar: ${puedesCursar}, estado actual: ${estado}`);
                
                if (!puedesCursar && estado !== ESTADOS.BLOQUEADA) {
                    estadoMaterias[materia.codigo] = ESTADOS.BLOQUEADA;
                    console.log(`  -> Bloqueando ${materia.codigo}`);
                } else if (puedesCursar && estado === ESTADOS.BLOQUEADA) {
                    estadoMaterias[materia.codigo] = ESTADOS.NO_CURSADA;
                    console.log(`  -> Desbloqueando ${materia.codigo}`);
                }
            }
        });
    }
}

function verificarSiPuedesCursar(materia) {
    // NUEVA LÓGICA SEGÚN TU EXPLICACIÓN:
    // Para CURSAR necesitas:
    // - Correlativas FUERTES (F): APROBADAS o PROMOCIONADAS
    // - Correlativas DÉBILES (D): REGULARES, APROBADAS o PROMOCIONADAS
    
    console.log(`Verificando si puede cursar: ${materia.codigo} ${materia.nombre}`);
    
    // Verificar correlativas fuertes (F) - deben estar APROBADAS o PROMOCIONADAS
    for (let correlativa of materia.correlativasFuertes) {
        // Convertir a string para comparación consistente
        const codigoCorrelativa = String(correlativa);
        const estadoCorrelativa = estadoMaterias[codigoCorrelativa];
        console.log(`  F: ${codigoCorrelativa} está ${estadoCorrelativa}`);
        if (estadoCorrelativa !== ESTADOS.APROBADA && estadoCorrelativa !== ESTADOS.PROMOCIONADA) {
            console.log(`  No puede cursar: correlativa fuerte ${codigoCorrelativa} no está aprobada`);
            return false;
        }
    }
    
    // Verificar correlativas débiles (D) - deben estar REGULARES, APROBADAS o PROMOCIONADAS
    for (let correlativa of materia.correlativasDebiles) {
        // Convertir a string para comparación consistente
        const codigoCorrelativa = String(correlativa);
        const estadoCorrelativa = estadoMaterias[codigoCorrelativa];
        console.log(`  D: ${codigoCorrelativa} está ${estadoCorrelativa}`);
        if (estadoCorrelativa !== ESTADOS.REGULAR && 
            estadoCorrelativa !== ESTADOS.APROBADA && 
            estadoCorrelativa !== ESTADOS.PROMOCIONADA) {
            console.log(`  No puede cursar: correlativa débil ${codigoCorrelativa} no está regular/aprobada`);
            return false;
        }
    }
    
    console.log(`  SÍ puede cursar ${materia.codigo}`);
    return true;
}

function verificarSiPuedesRendir(codigo) {
    // NUEVA LÓGICA SEGÚN TU EXPLICACIÓN:
    // Para RENDIR (aprobar) una materia que está REGULAR necesitas:
    // TODAS las correlativas (tanto F como D) APROBADAS o PROMOCIONADAS
    
    const materia = encontrarMateriaPorCodigo(codigo);
    if (!materia) return false;
    
    // Verificar TODAS las correlativas (fuertes y débiles)
    const todasLasCorrelativas = [...materia.correlativasFuertes, ...materia.correlativasDebiles];
    
    for (let correlativa of todasLasCorrelativas) {
        // Convertir a string para comparación consistente
        const codigoCorrelativa = String(correlativa);
        const estadoCorrelativa = estadoMaterias[codigoCorrelativa];
        if (estadoCorrelativa !== ESTADOS.APROBADA && estadoCorrelativa !== ESTADOS.PROMOCIONADA) {
            return false;
        }
    }
    
    return true;
}

function encontrarMateriaPorCodigo(codigo) {
    for (let año in materias) {
        const materia = materias[año].find(m => m.codigo === codigo);
        if (materia) return materia;
    }
    return null;
}

function getStatusText(estado) {
    switch (estado) {
        case ESTADOS.NO_CURSADA: return 'No Cursada';
        case ESTADOS.CURSANDO: return 'Cursando';
        case ESTADOS.REGULAR: return 'Regular';
        case ESTADOS.APROBADA: return 'Aprobada';
        case ESTADOS.PROMOCIONADA: return 'Promocionada';
        case ESTADOS.BLOQUEADA: return 'Bloqueada';
        default: return 'No Cursada';
    }
}

// Funciones de control
function resetAll() {
    if (confirm('¿Estás seguro de que quieres reiniciar todo el progreso?')) {
        inicializarMaterias();
        actualizarEstados();
    }
}

function saveProgress() {
    localStorage.setItem('mallaInteractivaUCSE', JSON.stringify(estadoMaterias));
    alert('Progreso guardado exitosamente!');
}

function loadProgress() {
    const progreso = localStorage.getItem('mallaInteractivaUCSE');
    if (progreso) {
        estadoMaterias = JSON.parse(progreso);
        actualizarEstados();
        alert('Progreso cargado exitosamente!');
    } else {
        alert('No hay progreso guardado anteriormente.');
    }
}

// Función para agregar nuevas materias (útil para completar desde el PDF)
function agregarMateria(año, codigo, nombre, correlativasFuertes = [], correlativasDebiles = []) {
    if (!materias[año]) {
        materias[año] = [];
    }
    
    materias[año].push({
        codigo: codigo,
        nombre: nombre,
        correlativasFuertes: correlativasFuertes,
        correlativasDebiles: correlativasDebiles
    });
    
    estadoMaterias[codigo] = ESTADOS.NO_CURSADA;
}

// ===== FUNCIONES DE FIREBASE =====

function initializeFirebase() {
    if (!window.firebaseAuth) {
        console.error('❌ Firebase no está disponible');
        updateSyncStatus('Firebase no disponible', 'disconnected');
        return;
    }
    
    console.log('🔥 Iniciando Firebase...');
    
    // Escuchar cambios de autenticación
    window.onAuthStateChanged(window.firebaseAuth, (user) => {
        if (user) {
            firebaseUser = user;
            console.log('✅ Usuario autenticado:', user.email || user.uid);
            console.log('🔄 Configurando sincronización en tiempo real...');
            isSyncEnabled = true;
            updateUI(user);
            setupRealtimeSync();
        } else {
            firebaseUser = null;
            console.log('❌ Usuario no autenticado');
            isSyncEnabled = false;
            updateUI(null);
            updateSyncStatus('No conectado', 'disconnected');
        }
    });
}

function toggleSync() {
    // Mostrar modal de login
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    console.log('🚪 Intentando cerrar modal de login, firebaseUser:', !!firebaseUser);
    // Solo cerrar el modal si hay un usuario autenticado
    if (firebaseUser) {
        document.getElementById('loginModal').style.display = 'none';
        console.log('✅ Modal cerrado exitosamente');
    } else {
        console.log('❌ No se puede cerrar modal sin usuario autenticado');
    }
    // Si no hay usuario autenticado, no hacer nada (no cerrar el modal)
}

function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert('Por favor ingresa email y contraseña');
        return;
    }
    
    updateSyncStatus('Iniciando sesión...', 'syncing');
    
    window.signInWithEmailAndPassword(window.firebaseAuth, email, password)
        .then((userCredential) => {
            console.log('✅ Login exitoso:', userCredential.user.email);
            closeLoginModal();
            isSyncEnabled = true;
            updateUI(userCredential.user);
            updateSyncStatus('✅ Conectado como ' + userCredential.user.email, 'connected');
        })
        .catch((error) => {
            console.error('❌ Error de login:', error);
            let message = 'Error al iniciar sesión';
            if (error.code === 'auth/user-not-found') {
                message = 'Usuario no encontrado';
            } else if (error.code === 'auth/wrong-password') {
                message = 'Contraseña incorrecta';
            } else if (error.code === 'auth/invalid-email') {
                message = 'Email inválido';
            }
            updateSyncStatus(message, 'disconnected');
            alert(message);
        });
}

function registerUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert('Por favor ingresa email y contraseña');
        return;
    }
    
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }
    
    updateSyncStatus('Creando cuenta...', 'syncing');
    
    window.createUserWithEmailAndPassword(window.firebaseAuth, email, password)
        .then((userCredential) => {
            console.log('✅ Cuenta creada:', userCredential.user.email);
            closeLoginModal();
            isSyncEnabled = true;
            updateUI(userCredential.user);
            updateSyncStatus('✅ Cuenta creada y conectado como ' + userCredential.user.email, 'connected');
        })
        .catch((error) => {
            console.error('❌ Error al crear cuenta:', error);
            let message = 'Error al crear cuenta';
            if (error.code === 'auth/email-already-in-use') {
                message = 'El email ya está en uso';
            } else if (error.code === 'auth/weak-password') {
                message = 'Contraseña muy débil';
            } else if (error.code === 'auth/invalid-email') {
                message = 'Email inválido';
            }
            updateSyncStatus(message, 'disconnected');
            alert(message);
        });
}

function logout() {
    window.signOut(window.firebaseAuth)
        .then(() => {
            console.log('✅ Sesión cerrada');
            isSyncEnabled = false;
            updateUI(null);
            updateSyncStatus('Sesión cerrada', 'disconnected');
        })
        .catch((error) => {
            console.error('❌ Error al cerrar sesión:', error);
        });
}

function updateUI(user) {
    const syncButton = document.getElementById('syncButton');
    const logoutButton = document.getElementById('logoutButton');
    const userInfo = document.getElementById('userInfo');
    
    if (user) {
        // Usuario conectado
        syncButton.style.display = 'none';
        logoutButton.style.display = 'inline-block';
        userInfo.style.display = 'block';
        userInfo.textContent = `👤 Conectado como: ${user.email}`;
    } else {
        // Usuario desconectado
        syncButton.style.display = 'inline-block';
        syncButton.textContent = '� Iniciar Sesión';
        logoutButton.style.display = 'none';
        userInfo.style.display = 'none';
    }
}

function setupRealtimeSync() {
    if (!firebaseUser) return;
    
    console.log('🔄 Configurando sincronización en tiempo real...');
    const userRef = window.firebaseRef(window.firebaseDatabase, `users/${firebaseUser.uid}/materias`);
    
    // Escuchar cambios en tiempo real
    window.firebaseOnValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data && !isInitialLoad) {
            // IMPORTANTE: Solo sincronizar desde la nube si no hay cambios locales recientes
            console.log('📥 Datos recibidos desde Firebase - verificando si aplicar...');
            console.log('Estado local actual vs datos remotos:', { local: Object.keys(estadoMaterias).length, remoto: Object.keys(data).length });
            
            // Solo aplicar cambios remotos si son significativamente diferentes
            const cambiosSignificativos = Object.keys(data).some(codigo => 
                estadoMaterias[codigo] !== data[codigo]
            );
            
            if (cambiosSignificativos) {
                console.log('📥 Aplicando sincronización desde la nube...');
                estadoMaterias = data;
                actualizarEstados();
                showSyncNotification('📥 Progreso sincronizado desde la nube');
            } else {
                console.log('📋 Sin cambios significativos - manteniendo estado local');
            }
        } else if (data && isInitialLoad) {
            // Primera carga - usar datos de la nube si existen
            console.log('🔄 Carga inicial desde Firebase...');
            estadoMaterias = data;
            actualizarEstados();
            updateSyncStatus('✅ Conectado y sincronizado', 'connected');
        } else if (isInitialLoad) {
            // Primera vez - subir datos locales
            console.log('📤 Primera vez - subiendo estado inicial...');
            syncToFirebase();
        }
        isInitialLoad = false;
    });
}

function syncToFirebase() {
    console.log('📤 syncToFirebase llamada:', { firebaseUser: !!firebaseUser, isSyncEnabled });
    if (!firebaseUser || !isSyncEnabled) {
        console.log('❌ Sync cancelado - requisitos no cumplidos');
        return;
    }
    
    console.log('📡 Enviando datos a Firebase...');
    const userRef = window.firebaseRef(window.firebaseDatabase, `users/${firebaseUser.uid}/materias`);
    
    window.firebaseSet(userRef, estadoMaterias)
        .then(() => {
            console.log('✅ Datos enviados exitosamente a Firebase');
            updateSyncStatus('✅ Conectado y sincronizado', 'connected');
            showSyncNotification('☁️ Progreso guardado en la nube');
        })
        .catch((error) => {
            console.error('❌ Error al sincronizar con Firebase:', error);
            updateSyncStatus('Error de sincronización', 'disconnected');
        });
}

function updateSyncStatus(message, type) {
    const statusDiv = document.getElementById('syncStatus');
    if (statusDiv) {
        statusDiv.textContent = message;
        statusDiv.className = `sync-status ${type}`;
    }
}

function showSyncNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'desbloqueo-notification';
    notification.innerHTML = `<strong>${message}</strong>`;
    notification.style.background = '#17a2b8';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// ====== SISTEMA DE RECOMENDACIONES DE MESA ======

function mostrarRecomendaciones() {
    const recomendaciones = analizarRecomendaciones();
    const modal = document.getElementById('recomendacionesModal');
    const body = document.getElementById('recomendacionesBody');
    
    body.innerHTML = generarHTMLRecomendaciones(recomendaciones);
    modal.style.display = 'flex';
}

function cerrarRecomendaciones() {
    const modal = document.getElementById('recomendacionesModal');
    modal.style.display = 'none';
}

function analizarRecomendaciones() {
    console.log('🎯 Analizando recomendaciones...');
    
    // Definir las mesas disponibles
    const mesas = [
        { nombre: 'Mesa Septiembre', fechas: '08/09 al 13/09', duracion: 'corta', capacidad: 1 },
        { nombre: 'Mesa Noviembre', fechas: '17/11 al 29/11', duracion: 'larga', capacidad: 2 },
        { nombre: 'Mesa Diciembre', fechas: '08/12 al 20/12', duracion: 'larga', capacidad: 2 }
    ];
    
    // Materias que quiero cursar el año que viene (4to año - 1er cuatrimestre)
    const materias4toPrimerCuatri = ['31', '32', '33', '34', '35', '37'];
    
    // Materias que quiero cursar el año que viene (4to año - 2do cuatrimestre)
    const materias4toSegundoCuatri = ['36', '38', '39', '40'];
    
    // Encontrar materias regulares
    const materiasRegulares = [];
    for (let codigo in estadoMaterias) {
        if (estadoMaterias[codigo] === ESTADOS.REGULAR) {
            const materia = encontrarMateriaPorCodigo(codigo);
            if (materia) {
                materiasRegulares.push({
                    codigo: codigo,
                    nombre: materia.nombre,
                    impacto: calcularImpacto(codigo, materias4toPrimerCuatri, materias4toSegundoCuatri)
                });
            }
        }
    }
    
    // Ordenar por impacto (prioridad)
    materiasRegulares.sort((a, b) => b.impacto.puntos - a.impacto.puntos);
    
    return {
        mesas,
        materiasRegulares,
        materias4toPrimerCuatri,
        materias4toSegundoCuatri
    };
}

function calcularImpacto(codigoMateria, materias4toPrimerCuatri, materias4toSegundoCuatri) {
    let puntos = 0;
    let materiasBloqueadas = [];
    let detalles = [];
    
    // Verificar impacto en materias de 4to año - 1er cuatrimestre
    for (let codigoObjetivo of materias4toPrimerCuatri) {
        const materiaObjetivo = encontrarMateriaPorCodigo(codigoObjetivo);
        if (materiaObjetivo) {
            // Verificar si esta materia es correlativa fuerte o débil
            const esFuerte = materiaObjetivo.correlativasFuertes.includes(codigoMateria);
            const esDebil = materiaObjetivo.correlativasDebiles.includes(codigoMateria);
            
            if (esFuerte) {
                puntos += 10; // Correlativa fuerte tiene más peso
                materiasBloqueadas.push(materiaObjetivo.nombre);
                detalles.push(`${materiaObjetivo.nombre} (Correlativa FUERTE)`);
            } else if (esDebil) {
                puntos += 5; // Correlativa débil tiene menos peso
                materiasBloqueadas.push(materiaObjetivo.nombre);
                detalles.push(`${materiaObjetivo.nombre} (Correlativa DÉBIL)`);
            }
        }
    }
    
    // Verificar impacto en materias de 4to año - 2do cuatrimestre (menor prioridad)
    for (let codigoObjetivo of materias4toSegundoCuatri) {
        const materiaObjetivo = encontrarMateriaPorCodigo(codigoObjetivo);
        if (materiaObjetivo) {
            const esFuerte = materiaObjetivo.correlativasFuertes.includes(codigoMateria);
            const esDebil = materiaObjetivo.correlativasDebiles.includes(codigoMateria);
            
            if (esFuerte) {
                puntos += 5; // Menos prioridad porque es 2do cuatrimestre
                materiasBloqueadas.push(materiaObjetivo.nombre);
                detalles.push(`${materiaObjetivo.nombre} (Correlativa FUERTE - 2do cuatri)`);
            } else if (esDebil) {
                puntos += 2;
                materiasBloqueadas.push(materiaObjetivo.nombre);
                detalles.push(`${materiaObjetivo.nombre} (Correlativa DÉBIL - 2do cuatri)`);
            }
        }
    }
    
    // Determinar prioridad
    let prioridad = 'baja';
    if (puntos >= 15) prioridad = 'alta';
    else if (puntos >= 5) prioridad = 'media';
    
    return {
        puntos,
        prioridad,
        materiasBloqueadas,
        detalles
    };
}

function generarHTMLRecomendaciones(data) {
    if (data.materiasRegulares.length === 0) {
        return `
            <div class="sin-recomendaciones">
                <h4>🎉 ¡Excelente!</h4>
                <p>No tienes materias regulares pendientes para rendir.</p>
                <p>Todas tus materias están aprobadas, promocionadas o aún no cursadas.</p>
            </div>
        `;
    }
    
    let html = `
        <div style="margin-bottom: 20px;">
            <h4>📊 Análisis de Prioridades</h4>
            <p>Basado en las materias que planeas cursar en 4to año (31, 32, 33, 34, 35, 37):</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h4>📅 Mesas Disponibles</h4>
    `;
    
    data.mesas.forEach(mesa => {
        html += `
            <div class="mesa-recomendacion">
                📅 <strong>${mesa.nombre}</strong> (${mesa.fechas})
                ${mesa.duracion === 'corta' ? '⚠️ Mesa corta - 1 materia máximo' : '✅ Mesa larga - Ideal para 2+ materias'}
            </div>
        `;
    });
    
    html += `</div><h4>🎯 Recomendaciones por Prioridad</h4>`;
    
    // Agrupar por prioridad
    const porPrioridad = {
        alta: data.materiasRegulares.filter(m => m.impacto.prioridad === 'alta'),
        media: data.materiasRegulares.filter(m => m.impacto.prioridad === 'media'),
        baja: data.materiasRegulares.filter(m => m.impacto.prioridad === 'baja')
    };
    
    // Mostrar prioridad alta
    if (porPrioridad.alta.length > 0) {
        html += `
            <div class="prioridad-alta">
                <h4>🔴 PRIORIDAD ALTA - Rendir URGENTE</h4>
                <p><strong>Recomendación:</strong> Estas materias bloquean múltiples materias de 4to año</p>
        `;
        
        porPrioridad.alta.forEach(materia => {
            html += `
                <div class="materia-recomendacion">
                    <h4>${materia.codigo} - ${materia.nombre}</h4>
                    <div class="materias-dependientes">
                        <strong>Bloquea:</strong> ${materia.impacto.detalles.join(', ')}
                    </div>
                    <div style="margin-top: 8px; font-weight: bold; color: #dc3545;">
                        💡 Recomendación: Mesa de Septiembre o Noviembre
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
    }
    
    // Mostrar prioridad media
    if (porPrioridad.media.length > 0) {
        html += `
            <div class="prioridad-media">
                <h4>🟡 PRIORIDAD MEDIA - Importante</h4>
                <p><strong>Recomendación:</strong> Importante para algunas materias de 4to año</p>
        `;
        
        porPrioridad.media.forEach(materia => {
            html += `
                <div class="materia-recomendacion">
                    <h4>${materia.codigo} - ${materia.nombre}</h4>
                    <div class="materias-dependientes">
                        <strong>Bloquea:</strong> ${materia.impacto.detalles.join(', ')}
                    </div>
                    <div style="margin-top: 8px; font-weight: bold; color: #ffc107;">
                        💡 Recomendación: Mesa de Noviembre o Diciembre
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
    }
    
    // Mostrar prioridad baja
    if (porPrioridad.baja.length > 0) {
        html += `
            <div class="prioridad-baja">
                <h4>🟢 PRIORIDAD BAJA - Sin urgencia</h4>
                <p><strong>Recomendación:</strong> No afectan materias de 4to año inmediatamente</p>
        `;
        
        porPrioridad.baja.forEach(materia => {
            html += `
                <div class="materia-recomendacion">
                    <h4>${materia.codigo} - ${materia.nombre}</h4>
                    <div style="margin-top: 8px; font-weight: bold; color: #28a745;">
                        💡 Recomendación: Mesa de Diciembre o año siguiente
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
    }
    
    // Estrategia recomendada
    html += `
        <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px; border-left: 4px solid #2196F3;">
            <h4>💡 Estrategia Recomendada</h4>
            <ol>
                <li><strong>Mesa Septiembre:</strong> 1 materia de prioridad ALTA (mesa corta)</li>
                <li><strong>Mesa Noviembre:</strong> 1-2 materias de prioridad ALTA/MEDIA (mesa larga)</li>
                <li><strong>Mesa Diciembre:</strong> Materias restantes de prioridad MEDIA/BAJA</li>
            </ol>
            <p style="margin-top: 10px;"><strong>🎯 Objetivo:</strong> Aprobar correlativas críticas antes de 4to año</p>
        </div>
    `;
    
    return html;
}
