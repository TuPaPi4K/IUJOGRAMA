import { db, collection, addDoc } from './firebase.js';

const niveles = {
    // --- IMÁGENES ---
    "ci_facil": {
        titulo: "Imágenes: Fácil", css: "crucigrama1.css", tipo: "imagen", cols: 10, filas: 10,
        estilos: { "0-0": "casilla1", "0-1": "casilla2", "0-5": "casilla3", "0-7": "casilla4", "0-9": "casilla5", "3-1": "casilla6", "5-4": "casilla7", "7-1": "casilla8", "7-6": "casilla9", "9-5": "casilla10" },
        palabras: [
            { id: 1, pista: "img/superheroe.png", respuesta: "SUPERHÉROE", f: 0, c: 0, dir: "H" },
            { id: 6, pista: "img/carpa.png", respuesta: "CARPA", f: 3, c: 1, dir: "H" },
            { id: 7, pista: "img/mono.png", respuesta: "MONO", f: 5, c: 4, dir: "H" },
            { id: 8, pista: "img/imán.png", respuesta: "IMÁN", f: 7, c: 1, dir: "H" },
            { id: 9, pista: "img/cien.png", respuesta: "CIEN", f: 7, c: 6, dir: "H" },
            { id: 10, pista: "img/traje.png", respuesta: "TRAJE", f: 9, c: 5, dir: "H" },
            { id: 2, pista: "img/unicornio.png", respuesta: "UNICORNIO", f: 0, c: 1, dir: "V" },
            { id: 3, pista: "img/helado.png", respuesta: "HELADO", f: 0, c: 5, dir: "V" },
            { id: 4, pista: "img/regalo.png", respuesta: "REGALO", f: 0, c: 7, dir: "V" },
            { id: 5, pista: "img/estudiante.png", respuesta: "ESTUDIANTE", f: 0, c: 9, dir: "V" }
        ]
    },
    "ci_medio": {
        titulo: "Imágenes: Medio", css: "crucigrama2.css", tipo: "imagen", cols: 15, filas: 15,
        estilos: { "0-0": "casilla1", "0-2": "casilla2", "0-8": "casilla3", "0-10": "casilla4", "0-13": "casilla5", "2-5": "casilla6", "3-0": "casilla7", "3-1": "casilla8", "3-3": "casilla9", "4-8": "casilla10", "7-5": "casilla11", "7-10": "casilla12", "9-1": "casilla13", "9-2": "casilla14", "9-4": "casilla15", "10-12": "casilla16", "11-0": "casilla17", "11-7": "casilla18", "11-8": "casilla19", "13-8": "casilla20" },
        palabras: [
            { id: 1, pista: "img/iglesia.png", respuesta: "IGLESIA", f: 0, c: 0, dir: "H" },
            { id: 3, pista: "img/estirar.png", respuesta: "ESTIRAR", f: 0, c: 8, dir: "H" },
            { id: 6, pista: "img/altura.png", respuesta: "ALTURA", f: 2, c: 5, dir: "H" },
            { id: 7, pista: "img/cartel.png", respuesta: "CARTEL", f: 3, c: 0, dir: "H" },
            { id: 10, pista: "img/liquido.png", respuesta: "LIQUIDO", f: 4, c: 8, dir: "H" },
            { id: 11, pista: "img/reir.png", respuesta: "REIR", f: 7, c: 5, dir: "H" },
            { id: 12, pista: "img/lunar.png", respuesta: "LUNAR", f: 7, c: 10, dir: "H" },
            { id: 13, pista: "img/casco.png", respuesta: "CASCO", f: 9, c: 1, dir: "H" },
            { id: 17, pista: "img/ayudar.png", respuesta: "AYUDAR", f: 11, c: 0, dir: "H" },
            { id: 18, pista: "img/banderin.png", respuesta: "BANDERIN", f: 11, c: 7, dir: "H" },
            { id: 20, pista: "img/naranja.png", respuesta: "NARANJA", f: 13, c: 8, dir: "H" },
            { id: 2, pista: "img/leer.png", respuesta: "LEER", f: 0, c: 2, dir: "V" },
            { id: 3, pista: "img/equilibrio.png", respuesta: "EQUILIBRIO", f: 0, c: 8, dir: "V" },
            { id: 4, pista: "img/tranquilidad.png", respuesta: "TRANQUILIDAD", f: 0, c: 10, dir: "V" },
            { id: 5, pista: "img/abandonado.png", respuesta: "ABANDONADO", f: 0, c: 13, dir: "V" },
            { id: 6, pista: "img/almuerzo.png", respuesta: "ALMUERZO", f: 2, c: 5, dir: "V" },
            { id: 8, pista: "img/amor.png", respuesta: "AMOR", f: 3, c: 1, dir: "V" },
            { id: 9, pista: "img/tacones.png", respuesta: "TACONES", f: 3, c: 3, dir: "V" },
            { id: 14, pista: "img/abuela.png", respuesta: "ABUELA", f: 9, c: 2, dir: "V" },
            { id: 15, pista: "img/crayon.png", respuesta: "CRAYON", f: 9, c: 4, dir: "V" },
            { id: 16, pista: "img/arena.png", respuesta: "ARENA", f: 10, c: 12, dir: "V" },
            { id: 19, pista: "img/asno.png", respuesta: "ASNO", f: 11, c: 8, dir: "V" }
        ]
    },
    "ci_dificil": {
        titulo: "Imágenes: Difícil", css: "crucigrama3.css", tipo: "imagen", cols: 20, filas: 20,
        estilos: { "0-10": "casilla1", "0-17": "casilla2", "1-7": "casilla3", "2-0": "casilla4", "3-19": "casilla5", "4-2": "casilla6", "4-11": "casilla7", "4-13": "casilla8", "5-17": "casilla9", "6-2": "casilla10", "6-11": "casilla11", "9-6": "casilla12", "9-13": "casilla13", "9-15": "casilla14", "10-0": "casilla15", "12-2": "casilla16", "13-15": "casilla17", "13-19": "casilla18", "14-1": "casilla19", "16-0": "casilla20", "17-12": "casilla21", "19-8": "casilla22" },
        palabras: [
            { id: 1, pista: "img/prevención.png", respuesta: "PREVENCION", f: 0, c: 10, dir: "H" },
            { id: 4, pista: "img/alfileres.png", respuesta: "ALFILERES", f: 2, c: 0, dir: "H" },
            { id: 6, pista: "img/solución.png", respuesta: "SOLUCION", f: 4, c: 2, dir: "H" },
            { id: 8, pista: "img/ideal.png", respuesta: "IDEAL", f: 4, c: 13, dir: "H" },
            { id: 9, pista: "img/oír.png", respuesta: "OIR", f: 5, c: 17, dir: "H" },
            { id: 11, pista: "img/clan.png", respuesta: "CLAN", f: 6, c: 11, dir: "H" },
            { id: 15, pista: "img/otorrinolaringología.png", respuesta: "OTORRINOLARINGOLOGIA", f: 10, c: 0, dir: "H" },
            { id: 16, pista: "img/extrañar.png", respuesta: "EXTRAÑAR", f: 12, c: 2, dir: "H" },
            { id: 17, pista: "img/opera.png", respuesta: "OPERA", f: 13, c: 15, dir: "H" },
            { id: 19, pista: "img/variables.png", respuesta: "VARIABLES", f: 14, c: 1, dir: "H" },
            { id: 20, pista: "img/inventario.png", respuesta: "INVENTARIO", f: 16, c: 0, dir: "H" },
            { id: 21, pista: "img/fantasía.png", respuesta: "FANTASIA", f: 17, c: 12, dir: "H" },
            { id: 22, pista: "img/cosmetología.png", respuesta: "COSMETOLOGIA", f: 19, c: 8, dir: "H" },
            { id: 2, pista: "img/ideología.png", respuesta: "IDEOLOGIA", f: 0, c: 17, dir: "V" },
            { id: 3, pista: "img/petición.png", respuesta: "PETICION", f: 1, c: 7, dir: "V" },
            { id: 4, pista: "img/antropología.png", respuesta: "ANTROPOLOGIA", f: 2, c: 0, dir: "V" },
            { id: 5, pista: "img/verificar.png", respuesta: "VERIFICAR", f: 3, c: 19, dir: "V" },
            { id: 7, pista: "img/incognita.png", respuesta: "INCOGNITA", f: 4, c: 11, dir: "V" },
            { id: 10, pista: "img/grado.png", respuesta: "GRADO", f: 6, c: 2, dir: "V" },
            { id: 12, pista: "img/ensamblaje.png", respuesta: "ENSAMBLAJE", f: 9, c: 6, dir: "V" },
            { id: 13, pista: "img/egoísmo.png", respuesta: "EGOISMO", f: 9, c: 13, dir: "V" },
            { id: 14, pista: "img/plazo.png", respuesta: "PLAZO", f: 9, c: 15, dir: "V" },
            { id: 18, pista: "img/atacada.png", respuesta: "ATACADA", f: 13, c: 19, dir: "V" }
        ]
    },

    // --- CRÍPTICOS ---
    "cc_facil": {
        titulo: "Críptico: Fácil", css: "crucigrama4.css", tipo: "texto", cols: 10, filas: 10,
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
    "cc_medio": {
        titulo: "Críptico: Medio", css: "crucigrama5.css", tipo: "texto", cols: 15, filas: 15,
        estilos: { "0-11": "casilla1", "0-14": "casilla2", "1-2": "casilla3", "1-4": "casilla4", "3-1": "casilla5", "3-12": "casilla6", "5-1": "casilla7", "6-9": "casilla8", "6-12": "casilla9", "7-3": "casilla10", "7-6": "casilla11", "9-0": "casilla12", "11-4": "casilla13", "12-3": "casilla14", "13-8": "casilla15", "14-0": "casilla16" },
        palabras: [
            { id: 1, pista: "Reunión deportiva continental", respuesta: "COPA", f: 0, c: 11, dir: "H" },
            { id: 3, pista: "Período del año con cambios en el Tiempo", respuesta: "ESTACION", f: 1, c: 2, dir: "H" },
            { id: 5, pista: "Elemento gaseoso que forma el agua", respuesta: "HIDROGENO", f: 3, c: 1, dir: "H" },
            { id: 7, pista: "Sustancia natural extraída de la tierra", respuesta: "MINERAL", f: 5, c: 1, dir: "H" },
            { id: 9, pista: "Forma farmacéutica de aplicación tópica", respuesta: "GEL", f: 6, c: 12, dir: "H" },
            { id: 10, pista: "Gran masa de tierra que divide Océanos", respuesta: "CONTINENTE", f: 7, c: 3, dir: "H" },
            { id: 12, pista: "Dominio de acción o conocimiento específico", respuesta: "CAMPO", f: 9, c: 0, dir: "H" },
            { id: 14, pista: "Condiciones atmosféricas de una región", respuesta: "CLIMA", f: 12, c: 3, dir: "H" },
            { id: 15, pista: "Elemento negro que arde y absorbe calor", respuesta: "CARBON", f: 13, c: 8, dir: "H" },
            { id: 16, pista: "Sustancia orgánica o química que se añade al terreno", respuesta: "ABONO", f: 14, c: 0, dir: "H" },
            { id: 2, pista: "Adicto a las bebidas etílicas", respuesta: "ALCOHOLICO", f: 0, c: 14, dir: "V" },
            { id: 4, pista: "Sacudida violenta de la tierra", respuesta: "TERREMOTO", f: 1, c: 4, dir: "V" },
            { id: 6, pista: "Gas vital que respiramos", respuesta: "OXIGENO", f: 3, c: 12, dir: "V" },
            { id: 8, pista: "Ciencia que estudia rocas", respuesta: "GEOLOGIA", f: 6, c: 9, dir: "V" },
            { id: 11, pista: "Ola gigante oceánica", respuesta: "TSUNAMI", f: 7, c: 6, dir: "V" },
            { id: 12, pista: "Parte del vestuario, uniforme", respuesta: "CAMISA", f: 9, c: 0, dir: "V" },
            { id: 13, pista: "Mandato para detener una acción", respuesta: "ALTO", f: 11, c: 4, dir: "V" }
        ]
    },
    "cc_dificil": {
        titulo: "Críptico: Difícil", css: "crucigrama6.css", tipo: "texto", cols: 20, filas: 20,
        estilos: { "0-0": "casilla1", "0-1": "casilla2", "0-6": "casilla3", "0-10": "casilla4", "1-4": "casilla5", "1-15": "casilla6", "2-1": "casilla7", "2-10": "casilla8", "4-8": "casilla9", "4-14": "casilla10", "6-12": "casilla11", "6-14": "casilla12", "6-18": "casilla13", "8-3": "casilla14", "8-6": "casilla15", "9-2": "casilla16", "9-14": "casilla17", "9-16": "casilla18", "10-4": "casilla19", "11-0": "casilla20", "12-0": "casilla21", "13-10": "casilla22", "13-18": "casilla23", "14-4": "casilla24", "14-16": "casilla25", "15-12": "casilla26", "15-15": "casilla27", "16-4": "casilla28", "17-12": "casilla29", "18-3": "casilla30", "19-7": "casilla31", "19-15": "casilla32" },
        palabras: [
            { id: 1, pista: "Desorden extremo", respuesta: "CAOS", f: 0, c: 0, dir: "H" },
            { id: 3, pista: "Cubre el rostro", respuesta: "MASCARA", f: 0, c: 6, dir: "H" },
            { id: 6, pista: "Árbol navideño", respuesta: "ABETO", f: 1, c: 15, dir: "H" },
            { id: 7, pista: "Músicos juntos", respuesta: "ORQUESTA", f: 2, c: 1, dir: "H" },
            { id: 8, pista: "Ratón o castor", respuesta: "ROEDOR", f: 2, c: 10, dir: "H" },
            { id: 9, pista: "Arte en muro", respuesta: "MURAL", f: 4, c: 8, dir: "H" },
            { id: 10, pista: "Bambi adulto", respuesta: "VENADO", f: 4, c: 14, dir: "H" },
            { id: 14, pista: "Para ver lejos", respuesta: "CATALEJO", f: 8, c: 3, dir: "H" },
            { id: 17, pista: "Primate Madagascar", respuesta: "LEMUR", f: 9, c: 14, dir: "H" },
            { id: 19, pista: "Escritura egipcia", respuesta: "JEROGLIFICO", f: 10, c: 4, dir: "H" },
            { id: 21, pista: "Nieve cayendo", respuesta: "AVALANCHA", f: 12, c: 0, dir: "H" },
            { id: 25, pista: "Abrigo formal", respuesta: "SACO", f: 14, c: 16, dir: "H" },
            { id: 28, pista: "Arte circular zen", respuesta: "MANDALA", f: 16, c: 4, dir: "H" },
            { id: 29, pista: "Tráfico urbano", respuesta: "TRANSITO", f: 17, c: 12, dir: "H" },
            { id: 30, pista: "Peso ligero", respuesta: "ONZA", f: 18, c: 3, dir: "H" },
            { id: 31, pista: "Ola gigante", respuesta: "TSUNAMI", f: 19, c: 7, dir: "H" },
            { id: 32, pista: "Sonido de perro", respuesta: "LADRA", f: 19, c: 15, dir: "H" },
            { id: 2, pista: "Anfibio mexicano", respuesta: "AJOLOTE", f: 0, c: 1, dir: "V" },
            { id: 3, pista: "Arte con teselas", respuesta: "MOSAICO", f: 0, c: 6, dir: "V" },
            { id: 4, pista: "Luces del norte", respuesta: "AURORA", f: 0, c: 10, dir: "V" },
            { id: 5, pista: "Equidad legal", respuesta: "JUSTICIA", f: 1, c: 4, dir: "V" },
            { id: 6, pista: "Creación estética", respuesta: "ARTE", f: 1, c: 15, dir: "V" },
            { id: 11, pista: "Ponerse ropa", respuesta: "VESTIRSE", f: 6, c: 12, dir: "V" },
            { id: 12, pista: "Felino manchado", respuesta: "OCELOTE", f: 6, c: 14, dir: "V" },
            { id: 13, pista: "Ventana coloreada", respuesta: "VITRAL", f: 6, c: 18, dir: "V" },
            { id: 15, pista: "Fuerza magnética", respuesta: "ATRACCION", f: 8, c: 6, dir: "V" },
            { id: 16, pista: "Tormenta viento", respuesta: "HURACAN", f: 9, c: 2, dir: "V" },
            { id: 18, pista: "Insecto religioso", respuesta: "MANTIS", f: 9, c: 16, dir: "V" },
            { id: 20, pista: "Fiesta de brujas", respuesta: "HALLOWEEN", f: 11, c: 0, dir: "V" },
            { id: 22, pista: "Carrera larga", respuesta: "MARATON", f: 13, c: 10, dir: "V" },
            { id: 23, pista: "Esconder algo", respuesta: "OCULTAR", f: 13, c: 18, dir: "V" },
            { id: 24, pista: "Traje japonés", respuesta: "KIMONO", f: 14, c: 4, dir: "V" },
            { id: 26, pista: "Símbolo clan", respuesta: "TOTEM", f: 15, c: 12, dir: "V" },
            { id: 27, pista: "Paso subterráneo", respuesta: "TUNEL", f: 15, c: 15, dir: "V" }
        ]
    },

    // --- MATEMÁTICOS ---
    "cm_facil": {
        titulo: "Matemático: Fácil", css: "crucigrama7.css", tipo: "matematico", cols: 5, filas: 5,
        estilos: {
            "0-2": "casilla1", "0-1": "casilla2", "0-3": "casilla3", "2-0": "casilla4",
            "1-2": "casilla5", "1-0": "casilla5", "1-4": "casilla5", "2-1": "casilla5", // Repetimos clase si es visual
            "2-4": "casilla6", "4-4": "casilla7", "4-0": "casilla8",
            "1-1": "bloqueada_negra", "1-3": "bloqueada_negra", "3-1": "bloqueada_negra", "3-3": "bloqueada_negra"
        },
        palabras: [
            { respuesta: "5", f: 0, c: 2 }, { respuesta: "7", f: 2, c: 0 },
            { respuesta: "2", f: 4, c: 2 }, { respuesta: "10", f: 4, c: 4 },
            { respuesta: "5", f: 0, c: 0 }, { respuesta: "+", f: 0, c: 1 }, { respuesta: "=", f: 0, c: 3 }, { respuesta: "5", f: 0, c: 4 } // Fila completa ejemplo
        ]
    },
    "cm_medio": {
        titulo: "Matemático: Medio", css: "crucigrama8.css", tipo: "matematico", cols: 5, filas: 5,
        estilos: {
            "0-2": "casilla1", "0-1": "casilla2", "0-3": "casilla3", "2-0": "casilla4",
            "1-0": "casilla5", "1-2": "casilla5", "1-4": "casilla5",
            "2-4": "casilla6", "4-4": "casilla7",
            "1-1": "bloqueada_negra", "1-3": "bloqueada_negra", "3-1": "bloqueada_negra", "3-3": "bloqueada_negra"
        },
        palabras: [
            { respuesta: "10", f: 0, c: 0 }, { respuesta: "40", f: 0, c: 4 },
            { respuesta: "+", f: 2, c: 1 }, { respuesta: "20", f: 2, c: 2 },
            { respuesta: "5", f: 4, c: 0 }, { respuesta: "10", f: 4, c: 2 }
        ]
    },
    "cm_dificil": {
        titulo: "Matemático: Difícil", css: "crucigrama9.css", tipo: "matematico", cols: 5, filas: 5,
        estilos: {
            "0-2": "casilla1", "4-1": "casilla2", "0-3": "casilla3", "1-2": "casilla4",
            "2-0": "casilla6", "2-4": "casilla7", "4-4": "casilla8",
            "1-1": "bloqueada_negra", "1-3": "bloqueada_negra", "3-1": "bloqueada_negra", "3-3": "bloqueada_negra"
        },
        palabras: [
            { respuesta: "60", f: 0, c: 0 }, { respuesta: "80", f: 0, c: 4 },
            { respuesta: "/", f: 1, c: 0 }, { respuesta: "-", f: 2, c: 1 },
            { respuesta: "2", f: 2, c: 2 }, { respuesta: "10", f: 4, c: 0 }, { respuesta: "10", f: 4, c: 2 }
        ]
    },

    // --- TEMÁTICOS ---
    "ct_facil": {
        titulo: "Temático: Útiles", css: "crucigrama10.css", tipo: "texto", cols: 10, filas: 10,
        estilos: { "0-8": "casilla1", "1-1": "casilla2", "1-5": "casilla3", "2-0": "casilla4", "3-5": "casilla5", "4-1": "casilla6", "4-4": "casilla7", "5-8": "casilla8", "6-2": "casilla9", "8-2": "casilla10" },
        palabras: [
            { id: 1, pista: "Hacer trazos", respuesta: "DIBUJO", f: 2, c: 0, dir: "H" },
            { id: 2, pista: "Guía de calles", respuesta: "MAPAS", f: 3, c: 5, dir: "H" },
            { id: 3, pista: "Para medir", respuesta: "REGLA", f: 4, c: 1, dir: "H" },
            { id: 4, pista: "Soporte escritura", respuesta: "PAPEL", f: 6, c: 2, dir: "H" },
            { id: 5, pista: "Tablero de aula", respuesta: "PIZARRA", f: 8, c: 2, dir: "H" },
            { id: 6, pista: "Escribe blanco", respuesta: "TIZA", f: 0, c: 8, dir: "V" },
            { id: 7, pista: "Obra escrita", respuesta: "LIBRO", f: 1, c: 1, dir: "V" },
            { id: 8, pista: "Para borrar", respuesta: "GOMA", f: 1, c: 5, dir: "V" },
            { id: 9, pista: "Grafito madera", respuesta: "LAPIZ", f: 4, c: 4, dir: "V" },
            { id: 10, pista: "Apuntes", respuesta: "NOTAS", f: 5, c: 8, dir: "V" }
        ]
    },
    "ct_medio": {
        titulo: "Temático: Animales", css: "crucigrama11.css", tipo: "texto", cols: 15, filas: 15,
        estilos: { "0-12": "casilla1", "1-4": "casilla2", "1-10": "casilla3", "2-0": "casilla4", "3-7": "casilla5", "3-10": "casilla6", "5-3": "casilla7", "6-7": "casilla8", "7-2": "casilla9", "7-3": "casilla10", "7-6": "casilla11", "7-12": "casilla12", "8-8": "casilla13", "8-10": "casilla14", "10-0": "casilla15", "10-5": "casilla16", "12-7": "casilla17" },
        palabras: [
            { id: 3, pista: "Se ríe mucho", respuesta: "HIENA", f: 1, c: 10, dir: "V" },
            { id: 4, pista: "Rayada B/N", respuesta: "CEBRA", f: 1, c: 4, dir: "V" },
            { id: 6, pista: "Repite todo", respuesta: "LORO", f: 3, c: 10, dir: "H" },
            { id: 7, pista: "Come bambú", respuesta: "PANDA", f: 5, c: 3, dir: "H" },
            { id: 8, pista: "Rey selva", respuesta: "LEON", f: 6, c: 7, dir: "H" },
            { id: 9, pista: "Rapaz veloz", respuesta: "HALCON", f: 1, c: 10, dir: "V" },
            { id: 15, pista: "Toro bravo", respuesta: "TORO", f: 10, c: 0, dir: "H" },
            { id: 16, pista: "Reptil rio", respuesta: "COCODRILO", f: 10, c: 5, dir: "H" },
            { id: 17, pista: "Marino listo", respuesta: "DELFIN", f: 12, c: 7, dir: "H" },
            { id: 1, pista: "Mejor amigo", respuesta: "PERRO", f: 0, c: 12, dir: "V" },
            { id: 5, pista: "Marsupial", respuesta: "KOALA", f: 3, c: 7, dir: "V" },
            { id: 10, pista: "Felino casero", respuesta: "GATO", f: 7, c: 3, dir: "V" },
            { id: 11, pista: "Canino salvaje", respuesta: "LOBO", f: 7, c: 6, dir: "V" },
            { id: 12, pista: "Gigante marino", respuesta: "BALLENA", f: 7, c: 12, dir: "V" },
            { id: 13, pista: "Plantígrado", respuesta: "OSO", f: 8, c: 8, dir: "V" },
            { id: 14, pista: "Cuello largo", respuesta: "JIRAFA", f: 8, c: 10, dir: "V" },
            { id: 16, pista: "De granja", respuesta: "CERDO", f: 10, c: 5, dir: "V" }
        ]
    },
    "ct_dificil": {
        titulo: "Temático: Informática", css: "crucigrama12.css", tipo: "texto", cols: 20, filas: 20,
        estilos: { "0-2": "casilla1", "0-3": "casilla2", "0-5": "casilla3", "1-10": "casilla4", "2-1": "casilla5", "2-9": "casilla6", "2-12": "casilla7", "2-17": "casilla8", "4-8": "casilla9", "4-12": "casilla10", "4-14": "casilla11", "5-4": "casilla12", "5-14": "casilla13", "7-5": "casilla14", "7-6": "casilla15", "8-12": "casilla16", "8-13": "casilla17", "9-15": "casilla18", "9-17": "casilla19", "10-2": "casilla20", "10-8": "casilla21", "10-10": "casilla22", "12-5": "casilla23", "12-15": "casilla24", "14-1": "casilla25", "14-5": "casilla26", "14-8": "casilla27", "15-7": "casilla28", "15-14": "casilla29", "17-10": "casilla30", "19-13": "casilla31" },
        palabras: [
            { id: 1, pista: "Redundancia discos", respuesta: "RAID", f: 0, c: 2, dir: "H" },
            { id: 5, pista: "Marcado extensible", respuesta: "XML", f: 2, c: 1, dir: "H" },
            { id: 6, pista: "SO Pingüino", respuesta: "LINUX", f: 2, c: 9, dir: "H" },
            { id: 10, pista: "Interrupción", respuesta: "IRQ", f: 4, c: 12, dir: "H" },
            { id: 12, pista: "Instancia programa", respuesta: "PROCESO", f: 5, c: 4, dir: "H" },
            { id: 13, pista: "Punto red", respuesta: "NODE", f: 5, c: 14, dir: "H" },
            { id: 14, pista: "Sistema Operativo", respuesta: "OS", f: 7, c: 5, dir: "H" },
            { id: 16, pista: "File System viejo", respuesta: "FAT", f: 8, c: 12, dir: "H" },
            { id: 18, pista: "Memoria volátil", respuesta: "RAM", f: 9, c: 15, dir: "H" },
            { id: 21, pista: "SO móvil Google", respuesta: "ANDROID", f: 10, c: 8, dir: "H" },
            { id: 23, pista: "Entornos virtuales", respuesta: "VIRTUALIZACION", f: 12, c: 5, dir: "H" },
            { id: 25, pista: "Memoria virtual", respuesta: "PAGING", f: 14, c: 1, dir: "H" },
            { id: 28, pista: "Subproceso ligero", respuesta: "HILO", f: 15, c: 7, dir: "H" },
            { id: 30, pista: "Núcleo SO", respuesta: "KERNEL", f: 17, c: 10, dir: "H" },
            { id: 31, pista: "Pausa temporal", respuesta: "SLEEP", f: 19, c: 13, dir: "H" },
            { id: 2, pista: "Control acceso", respuesta: "ACL", f: 0, c: 3, dir: "V" },
            { id: 3, pista: "Controlador", respuesta: "DRIVER", f: 0, c: 5, dir: "V" },
            { id: 4, pista: "SO Microsoft", respuesta: "WINDOWS", f: 1, c: 10, dir: "V" },
            { id: 7, pista: "Padre de Linux", respuesta: "UNIX", f: 2, c: 12, dir: "V" },
            { id: 8, pista: "Núcleo CPU", respuesta: "CORE", f: 2, c: 17, dir: "V" },
            { id: 9, pista: "Almacén datos", respuesta: "MEMORIA", f: 4, c: 8, dir: "V" },
            { id: 11, pista: "SO Tiempo Real", respuesta: "QNX", f: 4, c: 14, dir: "V" },
            { id: 15, pista: "Intercambio RAM", respuesta: "SWAPPING", f: 7, c: 6, dir: "V" },
            { id: 17, pista: "Interfaz Programación", respuesta: "API", f: 8, c: 13, dir: "V" },
            { id: 19, pista: "SO Apple", respuesta: "MACOS", f: 9, c: 17, dir: "V" },
            { id: 20, pista: "Hilo ejecución", respuesta: "THREAD", f: 10, c: 2, dir: "V" },
            { id: 22, pista: "Abrazo mortal", respuesta: "DEADLOCK", f: 10, c: 10, dir: "V" },
            { id: 24, pista: "Cerebro PC", respuesta: "CPU", f: 12, c: 15, dir: "V" },
            { id: 26, pista: "Sistema Archivos Red", respuesta: "NFS", f: 14, c: 5, dir: "V" },
            { id: 27, pista: "Unidad almacenamiento", respuesta: "DISCO", f: 14, c: 8, dir: "V" },
            { id: 29, pista: "Intérprete comandos", respuesta: "SHELL", f: 15, c: 14, dir: "V" }
        ]
    }
};

/* =========================================
   LÓGICA DEL MOTOR (UNIVERSAL)
   ========================================= */
let estado = {
    nivelActual: null,
    grid: [],
    timer: null,
    segundos: 0, // Empieza en 0
    pistas: 5
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const nivelID = params.get('nivel');

    if (nivelID && niveles[nivelID]) {
        cargarNivel(nivelID);
    } else {
        console.warn("Nivel inválido, cargando defecto");
        cargarNivel("ci_facil");
    }

    document.getElementById('btn-verificar').addEventListener('click', verificar);
    document.getElementById('btn-pista').addEventListener('click', usarPista);
    document.getElementById('btn-atras').addEventListener('click', () => window.location.href = 'categoria.html');

    document.getElementById('cerrarModal').addEventListener('click', () => {
        document.getElementById('modalResultado').classList.add('ocultar');
    });
});

function cargarNivel(id) {
    const data = niveles[id];
    estado.nivelActual = data;
    estado.pistas = 5;
    estado.segundos = 0; // REINICIAR A 0

    // 1. CSS y Textos
    document.getElementById('estilo-nivel').href = data.css;
    document.getElementById('titulo-nivel').innerText = data.titulo;
    // Actualizar texto del botón para reflejar la penalización de SUMA
    document.getElementById('btn-pista').innerHTML = `<i class="fas fa-lightbulb"></i> Pista (${estado.pistas}) +30s`;
    document.getElementById('btn-pista').disabled = false; // Reactivar por si acaso    // 2. Grid Lógico

    estado.grid = Array(data.filas).fill().map(() => Array(data.cols).fill(null));
    document.getElementById('btn-verificar').disabled = true;

    let pistasH = [];
    let pistasV = [];

    if (data.tipo === 'matematico') {
        data.palabras.forEach(p => estado.grid[p.f][p.c] = p.respuesta);
    } else {
        data.palabras.forEach(p => {
            let fila = p.f;
            let col = p.c;
            for (let i = 0; i < p.respuesta.length; i++) {
                if (p.dir === 'H') estado.grid[fila][col + i] = p.respuesta[i];
                if (p.dir === 'V') estado.grid[fila + i][col] = p.respuesta[i];
            }

            const htmlPista = `
                <div class="pista-item">
                    <span class="pista-num">${p.id}:</span>
                    ${data.tipo === 'imagen' ? `<img src="${p.pista}" alt="pista" class="pista-img">` : `<h4>${p.pista}</h4>`}
                </div>`;

            if (p.dir === 'H') pistasH.push(htmlPista);
            else pistasV.push(htmlPista);
        });
    }

    const contenedorPistas = document.getElementById('contenedor-pistas');
    if (data.tipo !== 'matematico') {
        contenedorPistas.style.display = 'flex';
        contenedorPistas.innerHTML = `
            <article class="pista"><strong>Horizontal:</strong>${pistasH.join('')}</article>
            <article class="pista"><strong>Vertical:</strong>${pistasV.join('')}</article>
        `;
    } else {
        contenedorPistas.style.display = 'none';
    }

    // Renderizar Tablero
    const contenedorTablero = document.getElementById('tablero-container');
    const table = document.createElement('table');
    table.className = "tablero";
    const tbody = document.createElement('tbody');

    for (let f = 0; f < data.filas; f++) {
        const tr = document.createElement('tr');
        for (let c = 0; c < data.cols; c++) {
            const td = document.createElement('td');
            const letra = estado.grid[f][c];
            const key = `${f}-${c}`;

            if (data.estilos && data.estilos[key]) td.className = data.estilos[key];

            const input = document.createElement('input');
            input.type = "text";
            input.id = `c-${f}-${c}`;
            input.dataset.f = f;
            input.dataset.c = c;
            input.maxLength = (data.tipo === 'matematico') ? 3 : 1;

            if (letra || (data.tipo === 'matematico' && !td.className.includes('bloqueada'))) {
                input.className = "casilla activa";
                input.addEventListener('keyup', (e) => manejarInput(e, f, c));
                input.addEventListener('input', () => {
                    if (data.tipo === 'matematico') input.value = input.value.replace(/[^0-9+\-*/]/g, '');
                    else input.value = input.value.toUpperCase().replace(/[^A-ZÑÁÉÍÓÚ]/g, '');
                });
            } else {
                input.className = "casilla bloqueada";
                input.disabled = true;
            }
            td.appendChild(input);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    contenedorTablero.innerHTML = '';
    contenedorTablero.appendChild(table);

    iniciarTimer();
}

function manejarInput(e, f, c) {
    const input = e.target;

    if (estado.nivelActual.tipo === 'matematico') {
        input.value = input.value.replace(/[^0-9+\-*/]/g, '');
    } else {
        input.value = input.value.toUpperCase().replace(/[^A-ZÑÁÉÍÓÚ]/g, '');
    }

    revisarTablero();

    if (e.key === "ArrowRight") moverFoco(f, c + 1);
    if (e.key === "ArrowLeft") moverFoco(f, c - 1);
    if (e.key === "ArrowUp") moverFoco(f - 1, c);
    if (e.key === "ArrowDown") moverFoco(f + 1, c);
}

function revisarTablero() {
    // Seleccionamos solo las casillas activas (las que se pueden escribir)
    const casillas = document.querySelectorAll('input.casilla.activa');
    let todasLlenas = true;

    casillas.forEach(input => {
        if (input.value.trim() === '') {
            todasLlenas = false;
        }
    });

    // Si todas están llenas, quitamos el 'disabled'
    document.getElementById('btn-verificar').disabled = !todasLlenas;
}

function moverFoco(f, c) {
    const el = document.getElementById(`c-${f}-${c}`);
    if (el && !el.disabled) el.focus();
}

function verificar() {
    let errores = 0;
    let vacios = 0;
    const data = estado.nivelActual;

    for (let f = 0; f < data.filas; f++) {
        for (let c = 0; c < data.cols; c++) {
            const resp = estado.grid[f][c];
            if (resp) {
                const input = document.getElementById(`c-${f}-${c}`);
                if (!input) continue;

                const val = input.value.toUpperCase();
                const respUpper = resp.toString().toUpperCase();

                if (!val) {
                    vacios++;
                } else if (val !== respUpper) {
                    input.classList.add('error');
                    setTimeout(() => input.classList.remove('error'), 2000);
                    errores++;
                }
            }
        }
    }

    if (vacios > 0) {
        mostrarModal(false, "Faltan casillas por llenar.");
    } else if (errores > 0) {
        mostrarModal(false, `Tienes ${errores} errores.`);
    } else {
        clearInterval(estado.timer);
        const tiempoFinal = document.getElementById('timer').innerText;
        // MENSAJE DE VICTORIA CON TIEMPO FINAL
        mostrarModal(true, `¡Nivel Completado!<br>Tiempo total: <strong>${tiempoFinal}</strong>`);
    }
}

function mostrarModal(victoria, mensajeTexto) {
    const modal = document.getElementById('modalResultado');
    const titulo = document.getElementById('tituloModal');
    const mensaje = document.getElementById('mensajeModal');
    const acciones = document.getElementById('accionesModal');

    modal.classList.remove('ocultar');
    mensaje.innerHTML = mensajeTexto;

    if (victoria) {
        titulo.innerHTML = '<i class="fas fa-star"></i> ¡FELICIDADES!';

        // --- CAMBIO: PREGUNTAR NOMBRE ---
        let nombre = prompt("🏆 ¡Nuevo Récord! \nEscribe tu nombre o apodo para el Ranking:");
        if (!nombre || nombre.trim() === "") nombre = "Anónimo"; 
        // -------------------------------

        const tiempoFinal = document.getElementById('timer').innerText;
        
        // Pasamos el nombre a la función de guardar
        guardarPuntuacion(estado.nivelActual.titulo, tiempoFinal, nombre);

        acciones.innerHTML = `
            <button class="btn-modal" onclick="window.location.href='ranking.html'">
                <i class="fas fa-trophy"></i> Ver Ranking
            </button>
            <button class="btn-modal" onclick="window.location.href='categoria.html'">
                <i class="fas fa-home"></i> Menú
            </button>
        `;
    } else {
        titulo.innerHTML = '<i class="fas fa-exclamation-circle"></i> Incorrecto';
        acciones.innerHTML = `
            <button class="btn-modal" id="btnSeguir">
                <i class="fas fa-check"></i> Seguir Jugando
            </button>
        `;
        document.getElementById('btnSeguir').onclick = () => modal.classList.add('ocultar');
    }
}

function usarPista() {
    if (estado.pistas <= 0) return;
    if (estado.pistas <= 0) return alert("Sin pistas");

    let opts = [];
    const data = estado.nivelActual;
    for (let f = 0; f < data.filas; f++) {
        for (let c = 0; c < data.cols; c++) {
            const resp = estado.grid[f][c];
            if (resp) {
                const input = document.getElementById(`c-${f}-${c}`);
                if (input && input.value.toUpperCase() !== resp.toString().toUpperCase()) {
                    opts.push({ input, l: resp });
                }
            }
        }
    }

    if (opts.length > 0) {
        const azar = opts[Math.floor(Math.random() * opts.length)];
        azar.input.value = azar.l.toString().toUpperCase();
        azar.input.classList.add('pista-bloqueada');

        estado.pistas--;

        // --- PENALIZACIÓN: SUMAR TIEMPO ---
        estado.segundos += 30;

        actualizarRelojVisual();
        const btnPista = document.getElementById('btn-pista');
        btnPista.innerHTML = `<i class="fas fa-lightbulb"></i> Pista (${estado.pistas}) +30s`;

        // Si se acaban, lo bloqueamos visualmente
        if (estado.pistas === 0) {
            btnPista.disabled = true;
            btnPista.innerHTML = `<i class="fas fa-lightbulb"></i> Sin pistas`;
        }

        // Importante: Al usar pista se llena una casilla, hay que revisar el botón verificar
        revisarTablero();
    }
}

function iniciarTimer() {
    if (estado.timer) clearInterval(estado.timer);
    actualizarRelojVisual();
    estado.timer = setInterval(() => {
        // --- CRONÓMETRO: SUMAR TIEMPO ---
        estado.segundos++;
        actualizarRelojVisual();
        // Ya no hay Game Over por tiempo, el límite lo pone la paciencia del jugador
    }, 1000);
}

function actualizarRelojVisual() {
    const m = Math.floor(estado.segundos / 60).toString().padStart(2, '0');
    const s = (estado.segundos % 60).toString().padStart(2, '0');
    document.getElementById('timer').innerText = `${m}:${s}`;
}

/* --- FUNCIÓN GUARDAR RANKING --- */
async function guardarPuntuacion(nivelNombre, tiempoTexto, nombreJugador) {
    try {
        await addDoc(collection(db, "ranking"), {
            nivel: nivelNombre,
            tiempo: tiempoTexto,
            nombre: nombreJugador, // <--- GUARDAMOS EL NOMBRE AQUÍ
            fecha: new Date().toLocaleDateString(),
            timestamp: Date.now()
        });
        console.log("¡Guardado con nombre!");
    } catch (e) {
        console.error("Error al subir récord: ", e);
        alert("Error de conexión. No se guardó el récord.");
    }
}