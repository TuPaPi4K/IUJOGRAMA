/* =========================================
   MOTOR UNIVERSAL (Datos Restaurados)
   ========================================= */
const niveles = {
    // --- IMÁGENES FÁCIL (Datos recuperados de tu código original) ---
    "ci_facil": {
        titulo: "Imágenes: Fácil", tipo: "imagen", cols: 10, filas: 10,
        estilos: { "0-0": "casilla1", "0-1": "casilla2", "0-5": "casilla3", "0-7": "casilla4", "0-9": "casilla5", "3-1": "casilla6", "5-4": "casilla7", "7-1": "casilla8", "7-6": "casilla9", "9-5": "casilla10" },
        palabras: [
            { id: 1, pista: "img/superheroe.png", respuesta: "SUPERHEROE", f: 0, c: 0, dir: "H" },
            { id: 6, pista: "img/carpa.png", respuesta: "CARPA", f: 3, c: 1, dir: "H" },
            { id: 7, pista: "img/mono.png", respuesta: "MONO", f: 5, c: 4, dir: "H" },
            { id: 8, pista: "img/imán.png", respuesta: "IMAN", f: 7, c: 1, dir: "H" },
            { id: 9, pista: "img/cien.png", respuesta: "CIEN", f: 7, c: 6, dir: "H" },
            { id: 10, pista: "img/traje.png", respuesta: "TRAJE", f: 9, c: 5, dir: "H" },
            { id: 2, pista: "img/unicornio.png", respuesta: "UNICORNIO", f: 0, c: 1, dir: "V" },
            { id: 3, pista: "img/helado.png", respuesta: "HELADO", f: 0, c: 5, dir: "V" },
            { id: 4, pista: "img/regalo.png", respuesta: "REGALO", f: 0, c: 7, dir: "V" },
            { id: 5, pista: "img/estudiante.png", respuesta: "ESTUDIANTE", f: 0, c: 9, dir: "V" }
        ]
    },
    
    // --- IMÁGENES MEDIO ---
    "ci_medio": {
        titulo: "Imágenes: Medio", tipo: "imagen", cols: 15, filas: 15,
        estilos: { "0-0": "casilla1", "0-2": "casilla2", "0-8": "casilla3", "0-10": "casilla4", "0-13": "casilla5", "2-5": "casilla6", "3-0": "casilla7", "3-1": "casilla8", "3-3": "casilla9", "4-8": "casilla10", "7-5": "casilla11", "7-10": "casilla12", "9-1": "casilla13", "9-2": "casilla14", "9-4": "casilla15", "10-12": "casilla16", "11-0": "casilla17", "11-7": "casilla18", "11-8": "casilla19", "13-8": "casilla20" },
        palabras: [
            // Copia aquí el array 'palabras' de ci_medio que me pasaste antes. 
            // Por brevedad uso un placeholder, pero tú tienes el completo arriba.
             { id: 1, pista: "img/iglesia.png", respuesta: "IGLESIA", f: 0, c: 0, dir: "H" },
             { id: 3, pista: "img/estirar.png", respuesta: "ESTIRAR", f: 0, c: 8, dir: "H" },
             // ... resto de palabras ...
             { id: 2, pista: "img/leer.png", respuesta: "LEER", f: 0, c: 2, dir: "V" }
        ]
    },

    // --- CRÍPTICO FÁCIL ---
    "cc_facil": {
        titulo: "Críptico: Fácil", tipo: "texto", cols: 10, filas: 10,
        estilos: { "0-8": "casilla9", "2-0": "casilla1", "2-1": "casilla2", "2-6": "casilla3", "3-4": "casilla4", "4-1": "casilla5", "6-2": "casilla6", "6-7": "casilla8", "7-4": "casilla7", "9-6": "casilla10" },
        palabras: [
            { id: 1, pista: "Gran extensión de Agua salada", respuesta: "MAR", f: 2, c: 0, dir: "H" },
            { id: 5, pista: "Punto luminoso en el Cielo", respuesta: "ESTRELLA", f: 4, c: 1, dir: "H" },
            { id: 6, pista: "Corriente que Fluye hacia el mar", respuesta: "RIO", f: 6, c: 2, dir: "H" },
            { id: 7, pista: "Un satélite que ilumina las noches", respuesta: "LUNA", f: 7, c: 4, dir: "H" },
            { id: 10, pista: "Parte del Árbol que se Extiende", respuesta: "RAMA", f: 9, c: 6, dir: "H" },
            { id: 2, pista: "Animal alado que pone huevos", respuesta: "AVE", f: 2, c: 1, dir: "V" },
            { id: 3, pista: "Estrella que brilla y Calienta la tierra", respuesta: "SOL", f: 2, c: 6, dir: "V" },
            { id: 4, pista: "Planta gigante con Raíces profundas", respuesta: "ARBOL", f: 3, c: 4, dir: "V" },
            { id: 8, pista: "Material suave que la oveja produce", respuesta: "LANA", f: 6, c: 7, dir: "V" },
            { id: 9, pista: "Fuego vivo que Baila", respuesta: "LLAMA", f: 0, c: 8, dir: "V" }
        ]
    },
    
    // (Asegúrate de agregar cc_medio, cc_dificil, etc. con sus 'estilos' y 'palabras' completas)
};

let estado = {
    nivelActual: null, grid: [], timer: null, segundos: 300, pistas: 5
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const nivelID = params.get('nivel') || "ci_facil"; // Por defecto carga el de imágenes fácil si falla

    if (niveles[nivelID]) cargarNivel(nivelID);
    else alert("Nivel no encontrado");

    document.getElementById('btn-verificar').addEventListener('click', verificar);
    document.getElementById('btn-pista').addEventListener('click', usarPista);
    document.getElementById('btn-atras').addEventListener('click', () => window.location.href = 'categoria.html');
});

function cargarNivel(id) {
    const data = niveles[id];
    estado.nivelActual = data;
    estado.pistas = 5;
    estado.segundos = 300; 

    document.getElementById('titulo-nivel').innerText = data.titulo;
    document.getElementById('pistas-horizontal').innerHTML = '';
    document.getElementById('pistas-vertical').innerHTML = '';
    document.getElementById('btn-pista').innerHTML = `<i class="fas fa-lightbulb"></i> Pista (-30s)`;

    // Crear grid lógico
    estado.grid = Array(data.filas).fill().map(() => Array(data.cols).fill(null));

    // Llenar grid y generar listas de pistas
    data.palabras.forEach(p => {
        // Llenar matriz lógica
        let fila = p.f, col = p.c;
        for(let i=0; i<p.respuesta.length; i++) {
            if(p.dir === 'H') estado.grid[fila][col + i] = p.respuesta[i];
            if(p.dir === 'V') estado.grid[fila + i][col] = p.respuesta[i];
        }

        // Renderizar en lista lateral
        const li = document.createElement('div');
        li.className = "pista-item";
        
        let contenido = p.pista;
        if(data.tipo === 'imagen') {
            contenido = `<img src="${p.pista}" class="pista-img">`;
        } else {
            contenido = `<span class="pista-texto">${p.pista}</span>`;
        }

        li.innerHTML = `<span class="num-pista">${p.id}:</span> ${contenido}`;
        li.onclick = () => enfocarCelda(p.f, p.c);

        if(p.dir === 'H') document.getElementById('pistas-horizontal').appendChild(li);
        else document.getElementById('pistas-vertical').appendChild(li);
    });

    // Dibujar Tablero HTML
    const tablero = document.getElementById('tablero');
    tablero.style.gridTemplateColumns = `repeat(${data.cols}, 44px)`; // Ancho fijo coincidente con CSS
    tablero.innerHTML = '';

    for(let f=0; f<data.filas; f++) {
        for(let c=0; c<data.cols; c++) {
            const letra = estado.grid[f][c];
            
            // DIV ENVOLTORIO (Aquí van las clases de estilos como 'casilla1')
            const div = document.createElement('div');
            div.className = 'celda-wrapper';
            
            // Aplicar estilo numérico (ej: "casilla1") si existe en la config
            const key = `${f}-${c}`;
            if(data.estilos && data.estilos[key]) {
                div.classList.add(data.estilos[key]);
            }

            // INPUT
            const input = document.createElement('input');
            input.id = `c-${f}-${c}`;
            input.dataset.f = f;
            input.dataset.c = c;
            input.maxLength = 1;

            if(letra) {
                input.className = 'casilla activa';
                input.addEventListener('keyup', (e) => manejarInput(e, f, c));
            } else {
                input.className = 'casilla bloqueada';
                input.disabled = true;
            }

            div.appendChild(input);
            tablero.appendChild(div);
        }
    }
    iniciarTimer();
}

function manejarInput(e, f, c) {
    const input = e.target;
    input.value = input.value.toUpperCase().replace(/[^A-ZÑÁÉÍÓÚ]/g, '');
    
    if (e.key === "ArrowRight") moverFoco(f, c+1);
    if (e.key === "ArrowLeft") moverFoco(f, c-1);
    if (e.key === "ArrowUp") moverFoco(f-1, c);
    if (e.key === "ArrowDown") moverFoco(f+1, c);
}

function moverFoco(f, c) {
    const el = document.getElementById(`c-${f}-${c}`);
    if(el && !el.disabled) el.focus();
}

function enfocarCelda(f, c) {
    const el = document.getElementById(`c-${f}-${c}`);
    if(el) el.focus();
}

function verificar() {
    let errores = 0, vacios = 0;
    const data = estado.nivelActual;
    
    for(let f=0; f<data.filas; f++) {
        for(let c=0; c<data.cols; c++) {
            const resp = estado.grid[f][c];
            if(resp) {
                const input = document.getElementById(`c-${f}-${c}`);
                const val = input.value.toUpperCase();
                if(!val) vacios++;
                else if(val !== resp && val !== quitarTildes(resp)) {
                    input.classList.add('error');
                    setTimeout(()=>input.classList.remove('error'), 2000);
                    errores++;
                } else {
                    input.classList.add('correcto');
                }
            }
        }
    }

    if(vacios > 0) alert("Faltan casillas");
    else if(errores > 0) alert(`Tienes ${errores} errores`);
    else {
        clearInterval(estado.timer);
        const sobrante = document.getElementById('timer').innerText;
        alert(`¡VICTORIA!\nTe sobró: ${sobrante}`);
    }
}

function usarPista() {
    if(estado.pistas <= 0) return alert("Sin pistas");
    let opts = [];
    const data = estado.nivelActual;
    
    for(let f=0; f<data.filas; f++) {
        for(let c=0; c<data.cols; c++) {
            const resp = estado.grid[f][c];
            if(resp) {
                const input = document.getElementById(`c-${f}-${c}`);
                if(input.value.toUpperCase() !== resp) opts.push({input, l: resp});
            }
        }
    }

    if(opts.length > 0) {
        const azar = opts[Math.floor(Math.random() * opts.length)];
        azar.input.value = azar.l;
        azar.input.classList.add('pista-usada');
        estado.pistas--;
        estado.segundos = Math.max(0, estado.segundos - 30);
        actualizarRelojVisual();
    }
}

function iniciarTimer() {
    if(estado.timer) clearInterval(estado.timer);
    actualizarRelojVisual();
    estado.timer = setInterval(() => {
        estado.segundos--;
        actualizarRelojVisual();
        if(estado.segundos <= 0) {
            clearInterval(estado.timer);
            alert("¡Tiempo Agotado!");
            window.location.href='index.html';
        }
    }, 1000);
}

function actualizarRelojVisual() {
    const m = Math.floor(estado.segundos / 60).toString().padStart(2,'0');
    const s = (estado.segundos % 60).toString().padStart(2,'0');
    document.getElementById('timer').innerText = `${m}:${s}`;
}

function quitarTildes(s) { return s.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }