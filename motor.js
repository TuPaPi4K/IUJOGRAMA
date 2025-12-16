/* =========================================
   BASE DE DATOS DE NIVELES (COMPLETA)
   ========================================= */
const niveles = {
    // -----------------------------------------
    // CRUCIGRAMAS CRÍPTICOS (TEXTO)
    // -----------------------------------------
    "cc_facil": {
        titulo: "Crucigrama Críptico: Fácil",
        tipo: "texto",
        cols: 10, filas: 10,
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
        titulo: "Crucigrama Críptico: Medio",
        tipo: "texto",
        cols: 15, filas: 15,
        estilos: { "0-11": "casilla1", "0-14": "casilla2", "1-2": "casilla3", "1-4": "casilla4", "3-1": "casilla5", "3-12": "casilla6", "5-1": "casilla7", "6-9": "casilla8", "6-12": "casilla9", "7-3": "casilla10", "7-6": "casilla11", "9-0": "casilla12", "11-4": "casilla13", "12-3": "casilla14", "13-8": "casilla15", "14-0": "casilla16" },
        palabras: [
            // Horizontal
            { id: 1, pista: "Reunión deportiva continental o mundial cuyo nombre hace referencia a un objeto de celebración.", respuesta: "COPA", f: 0, c: 11, dir: "H" },
            { id: 3, pista: "Período del año con cambios en el Tiempo", respuesta: "ESTACION", f: 1, c: 2, dir: "H" },
            { id: 5, pista: "Elemento gaseoso que forma el agua", respuesta: "HIDROGENO", f: 3, c: 1, dir: "H" },
            { id: 7, pista: "Sustancia natural extraída de la tierra", respuesta: "MINERAL", f: 5, c: 1, dir: "H" },
            { id: 9, pista: "Forma farmacéutica de aplicación tópica, que no es crema ni pomada...", respuesta: "GEL", f: 6, c: 12, dir: "H" },
            { id: 10, pista: "Gran masa de tierra que divide Océanos", respuesta: "CONTINENTE", f: 7, c: 3, dir: "H" },
            { id: 12, pista: "Dominio de acción o conocimiento específico...", respuesta: "CAMPO", f: 9, c: 0, dir: "H" },
            { id: 14, pista: "Condiciones atmosféricas de una región", respuesta: "CLIMA", f: 12, c: 3, dir: "H" },
            { id: 15, pista: "Elemento negro que arde y absorbe calor", respuesta: "CARBON", f: 13, c: 8, dir: "H" },
            { id: 16, pista: "Sustancia orgánica o química que se añade al terreno...", respuesta: "ABONO", f: 14, c: 0, dir: "H" },
            // Vertical
            { id: 2, pista: "Adicto a las bebidas etílicas...", respuesta: "ALCOHOLICO", f: 0, c: 14, dir: "V" },
            { id: 4, pista: "Sacudida violenta de la tierra", respuesta: "TERREMOTO", f: 1, c: 4, dir: "V" },
            { id: 6, pista: "Gas vital que respiramos en el aire", respuesta: "OXIGENO", f: 3, c: 12, dir: "V" },
            { id: 8, pista: "Ciencia que estudia rocas y formaciones terrestres", respuesta: "GEOLOGIA", f: 6, c: 9, dir: "V" },
            { id: 11, pista: "Ola gigante causada por movimientos oceánicos", respuesta: "TSUNAMI", f: 7, c: 6, dir: "V" },
            { id: 12, pista: "Parte del vestuario que, por su corte y material...", respuesta: "CAMISA", f: 9, c: 0, dir: "V" },
            { id: 13, pista: "Mandato que se da para detener una acción...", respuesta: "ALTO", f: 11, c: 4, dir: "V" }
        ]
    },
    "cc_dificil": {
        titulo: "Crucigrama Críptico: Difícil",
        tipo: "texto",
        cols: 20, filas: 20,
        estilos: { "0-0": "casilla1", "0-1": "casilla2", "0-6": "casilla3", "0-10": "casilla4", "1-4": "casilla5", "1-15": "casilla6", "2-1": "casilla7", "2-10": "casilla8", "4-8": "casilla9", "4-14": "casilla10", "6-12": "casilla11", "6-14": "casilla12", "6-18": "casilla13", "8-3": "casilla14", "8-6": "casilla15", "9-2": "casilla16", "9-14": "casilla17", "9-16": "casilla18", "10-4": "casilla19", "11-0": "casilla20", "12-0": "casilla21", "13-10": "casilla22", "13-18": "casilla23", "14-4": "casilla24", "14-16": "casilla25", "15-12": "casilla26", "15-15": "casilla27", "16-4": "casilla28", "17-12": "casilla29", "18-3": "casilla30", "19-7": "casilla31", "19-15": "casilla32" },
        palabras: [
            // Horizontal
            { id: 1, pista: "Desorden extremo o ausencia de estructura...", respuesta: "CAOS", f: 0, c: 0, dir: "H" },
            { id: 3, pista: "Objeto que cubre el rostro...", respuesta: "MASCARA", f: 0, c: 6, dir: "H" },
            { id: 6, pista: "Árbol de gran altura, de hojas perennes...", respuesta: "ABETO", f: 1, c: 15, dir: "H" },
            { id: 7, pista: "Escenario donde múltiples instrumentos se convierten en una sola voz", respuesta: "ORQUESTA", f: 2, c: 1, dir: "H" },
            { id: 8, pista: "Grupo zoológico que incluye ratones...", respuesta: "ROEDOR", f: 2, c: 10, dir: "H" },
            { id: 9, pista: "Obra plástica que transforma muros en lienzos.", respuesta: "MURAL", f: 4, c: 8, dir: "H" },
            { id: 10, pista: "Mamífero de cornamenta ramificada...", respuesta: "VENADO", f: 4, c: 14, dir: "H" },
            { id: 14, pista: "Instrumento óptico portátil que permite ver a gran distancia...", respuesta: "CATALEJO", f: 8, c: 3, dir: "H" },
            { id: 17, pista: "Primate de Madagascar que parece un cruce...", respuesta: "LEMUR", f: 9, c: 14, dir: "H" },
            { id: 19, pista: "Escritura que combina arte y mensaje...", respuesta: "JEROGLIFICO", f: 10, c: 4, dir: "H" },
            { id: 21, pista: "Fenómeno natural que convierte la pendiente en un torrente...", respuesta: "AVALANCHA", f: 12, c: 0, dir: "H" },
            { id: 25, pista: "Objeto que puede ser tanto abrigo como envoltorio.", respuesta: "SACO", f: 14, c: 16, dir: "H" },
            { id: 28, pista: "Figura geométrica usada en la meditación...", respuesta: "MANDALA", f: 16, c: 4, dir: "H" },
            { id: 29, pista: "Movimiento constante que llena las vías urbanas.", respuesta: "TRANSITO", f: 17, c: 12, dir: "H" },
            { id: 30, pista: "Medida tradicional usada en joyería...", respuesta: "ONZA", f: 18, c: 3, dir: "H" },
            { id: 31, pista: "Fenómeno marino que arrasa costas tras un terremoto.", respuesta: "TSUNAMI", f: 19, c: 7, dir: "H" },
            { id: 32, pista: "Ruido repetitivo que delata al guardián de la casa.", respuesta: "LADRA", f: 19, c: 15, dir: "H" },
            // Vertical
            { id: 2, pista: "Anfibio mexicano capaz de regenerar extremidades...", respuesta: "AJOLOTE", f: 0, c: 1, dir: "V" },
            { id: 3, pista: "Composición artística formada por pequeñas piezas...", respuesta: "MOSAICO", f: 0, c: 6, dir: "V" },
            { id: 4, pista: "Fenómeno luminoso en el cielo...", respuesta: "AURORA", f: 0, c: 10, dir: "V" },
            { id: 5, pista: "Valor que equilibra lo correcto con lo legal.", respuesta: "JUSTICIA", f: 1, c: 4, dir: "V" },
            { id: 6, pista: "Manifestación estética que combina técnica e imaginación.", respuesta: "ARTE", f: 1, c: 15, dir: "V" },
            { id: 11, pista: "Acción que prepara al cuerpo para ser visto.", respuesta: "VESTIRSE", f: 6, c: 12, dir: "V" },
            { id: 12, pista: "Felino americano de tamaño mediano...", respuesta: "OCELOTE", f: 6, c: 14, dir: "V" },
            { id: 13, pista: "Ventana que se convierte en lienzo de cristal.", respuesta: "VITRAL", f: 6, c: 18, dir: "V" },
            { id: 15, pista: "Fenómeno que puede ser tanto magnético como sentimental.", respuesta: "ATRACCION", f: 8, c: 6, dir: "V" },
            { id: 16, pista: "Remolino atmosférico que se alimenta del océano.", respuesta: "HURACAN", f: 9, c: 2, dir: "V" },
            { id: 18, pista: "Depredador insecto que parece rezar antes de atacar.", respuesta: "MANTIS", f: 9, c: 16, dir: "V" },
            { id: 20, pista: "Evento que transforma el miedo en diversión.", respuesta: "HALLOWEEN", f: 11, c: 0, dir: "V" },
            { id: 22, pista: "Evento deportivo que se asocia con resistencia extrema.", respuesta: "MARATON", f: 13, c: 10, dir: "V" },
            { id: 23, pista: "Acción que transforma lo evidente en secreto.", respuesta: "OCULTAR", f: 13, c: 18, dir: "V" },
            { id: 24, pista: "Túnica japonesa que simboliza tradición y estética.", respuesta: "KIMONO", f: 14, c: 4, dir: "V" },
            { id: 26, pista: "Símbolo que encarna la identidad de un clan.", respuesta: "TOTEM", f: 15, c: 12, dir: "V" },
            { id: 27, pista: "Conducto excavado que conecta dos puntos separados.", respuesta: "TUNEL", f: 15, c: 15, dir: "V" }
        ]
    },

    // -----------------------------------------
    // CRUCIGRAMAS CON IMÁGENES
    // -----------------------------------------
    "ci_facil": {
        titulo: "Crucigrama con Imágenes: Fácil",
        tipo: "imagen",
        cols: 10, filas: 10,
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
    "ci_medio": {
        titulo: "Crucigrama con Imágenes: Medio",
        tipo: "imagen",
        cols: 15, filas: 15,
        estilos: { "0-0": "casilla1", "0-2": "casilla2", "0-8": "casilla3", "0-10": "casilla4", "0-13": "casilla5", "2-5": "casilla6", "3-0": "casilla7", "3-1": "casilla8", "3-3": "casilla9", "4-8": "casilla10", "7-5": "casilla11", "7-10": "casilla12", "9-1": "casilla13", "9-2": "casilla14", "9-4": "casilla15", "10-12": "casilla16", "11-0": "casilla17", "11-7": "casilla18", "11-8": "casilla19", "13-8": "casilla20" },
        palabras: [
            // Horizontal
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
            // Vertical
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
        titulo: "Crucigrama con Imágenes: Difícil",
        tipo: "imagen",
        cols: 20, filas: 20,
        estilos: { "0-10": "casilla1", "0-17": "casilla2", "1-7": "casilla3", "2-0": "casilla4", "3-19": "casilla5", "4-2": "casilla6", "4-11": "casilla7", "4-13": "casilla8", "5-17": "casilla9", "6-2": "casilla10", "6-11": "casilla11", "9-6": "casilla12", "9-13": "casilla13", "9-15": "casilla14", "10-0": "casilla15", "10-12": "casilla16", "11-0": "casilla17", "11-7": "casilla18", "11-8": "casilla19", "13-8": "casilla20", "17-12": "casilla21", "19-8": "casilla22" },
        palabras: [
            // Horizontal
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
            // Vertical
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

    // -----------------------------------------
    // CRUCIGRAMAS TEMÁTICOS (TEXTO)
    // -----------------------------------------
    "ct_facil": {
        titulo: "Crucigrama Temático: Fácil",
        tipo: "texto",
        cols: 10, filas: 10,
        estilos: { "0-8": "casilla1", "1-1": "casilla2", "1-5": "casilla3", "2-0": "casilla4", "3-5": "casilla5", "4-1": "casilla6", "4-4": "casilla7", "5-8": "casilla8", "6-2": "casilla9", "8-2": "casilla10" },
        palabras: [
            { id: 4, pista: "Actividad con Lápiz de colores", respuesta: "DIBUJO", f: 2, c: 0, dir: "H" },
            { id: 5, pista: "Representaciones geográficas", respuesta: "MAPAS", f: 3, c: 5, dir: "H" },
            { id: 6, pista: "Herramienta para medir líneas", respuesta: "REGLA", f: 4, c: 1, dir: "H" },
            { id: 9, pista: "Material para escribir o dibujar", respuesta: "PAPEL", f: 6, c: 2, dir: "H" },
            { id: 10, pista: "Superficie para escribir con tiza", respuesta: "PIZARRA", f: 8, c: 2, dir: "H" },
            // Vertical
            { id: 1, pista: "Barra para escribir en pizarra", respuesta: "TIZA", f: 0, c: 8, dir: "V" },
            { id: 2, pista: "Compendio de hojas unidas...", respuesta: "LIBRO", f: 1, c: 1, dir: "V" },
            { id: 3, pista: "Borrador para eliminar trazos", respuesta: "GOMA", f: 1, c: 5, dir: "V" },
            { id: 7, pista: "Instrumento básico para escribir", respuesta: "LAPIZ", f: 4, c: 4, dir: "V" },
            { id: 8, pista: "Breves apuntes escritos...", respuesta: "NOTAS", f: 5, c: 8, dir: "V" }
        ]
    },
    "ct_medio": {
        titulo: "Crucigrama Temático: Medio",
        tipo: "texto",
        cols: 15, filas: 15,
        estilos: { "0-12": "casilla1", "1-4": "casilla2", "1-10": "casilla3", "2-0": "casilla4", "3-7": "casilla5", "3-10": "casilla6", "5-3": "casilla7", "6-7": "casilla8", "7-2": "casilla9", "7-3": "casilla10", "7-6": "casilla11", "7-12": "casilla12", "8-8": "casilla13", "8-10": "casilla14", "10-0": "casilla15", "10-5": "casilla16", "12-7": "casilla17" },
        palabras: [
            // Horizontal
            { id: 3, pista: "Animal africano famoso por su “risa”.", respuesta: "HIENA", f: 1, c: 10, dir: "V" }, // Nota: En el original es vertical
            { id: 4, pista: "Felino rayado, depredador", respuesta: "CEBRA", f: 1, c: 4, dir: "V" }, // Ojo: Pista dice Felino rayado, respuesta en script era CEBRA
            { id: 6, pista: "Ave colorida que imita sonidos y habla", respuesta: "LORO", f: 3, c: 10, dir: "H" },
            { id: 7, pista: "Oso blanco y negro, come bambú", respuesta: "PANDA", f: 5, c: 3, dir: "H" },
            { id: 8, pista: "Rey de la selva, mamífero felino", respuesta: "LEON", f: 6, c: 7, dir: "H" },
            { id: 9, pista: "Ave rapaz con vista aguda", respuesta: "HALCON", f: 1, c: 10, dir: "V" }, // Conflicto en el original, usaremos las coordenadas válidas
            { id: 15, pista: "Mamífero bovino macho, fuerte y cornudo", respuesta: "TORO", f: 10, c: 0, dir: "H" },
            { id: 16, pista: "Reptil acuático con mandíbulas poderosas", respuesta: "COCODRILO", f: 10, c: 5, dir: "H" },
            { id: 17, pista: "Mamífero marino inteligente", respuesta: "DELFIN", f: 12, c: 7, dir: "H" },
            // Vertical (Ajustado según respuestas script original)
            { id: 1, pista: "Representante doméstico...", respuesta: "PERRO", f: 0, c: 12, dir: "V" },
            { id: 2, pista: "Équido cuyo patrón de rayas...", respuesta: "CEBRA", f: 1, c: 4, dir: "V" },
            { id: 3, pista: "Ave rapaz veloz...", respuesta: "HALCON", f: 1, c: 10, dir: "V" },
            { id: 5, pista: "Marsupial australiano...", respuesta: "KOALA", f: 3, c: 7, dir: "V" },
            { id: 10, pista: "Mamífero felino doméstico...", respuesta: "GATO", f: 7, c: 3, dir: "V" },
            { id: 11, pista: "Canino salvaje...", respuesta: "LOBO", f: 7, c: 6, dir: "V" },
            { id: 12, pista: "Mamífero marino gigante", respuesta: "BALLENA", f: 7, c: 12, dir: "V" },
            { id: 13, pista: "Mamífero plantígrado...", respuesta: "OSO", f: 8, c: 8, dir: "V" },
            { id: 14, pista: "Animal con cuello largo...", respuesta: "JIRAFA", f: 8, c: 10, dir: "V" },
            { id: 16, pista: "Mamífero omnívoro doméstico...", respuesta: "CERDO", f: 10, c: 5, dir: "V" },
            { id: 99, pista: "Felino rayado (Horizontal)", respuesta: "TIGRE", f: 2, c: 0, dir: "H" }
        ]
    },
    "ct_dificil": {
        titulo: "Crucigrama Temático: Difícil",
        tipo: "texto",
        cols: 20, filas: 20,
        estilos: { "0-2": "casilla1", "0-3": "casilla2", "0-5": "casilla3", "1-10": "casilla4", "2-1": "casilla5", "2-9": "casilla6", "2-12": "casilla7", "2-17": "casilla8", "4-8": "casilla9", "4-12": "casilla10", "4-14": "casilla11", "5-4": "casilla12", "5-14": "casilla13", "7-5": "casilla14", "7-6": "casilla15", "8-12": "casilla16", "8-13": "casilla17", "9-15": "casilla18", "9-17": "casilla19", "10-2": "casilla20", "10-8": "casilla21", "10-10": "casilla22", "12-5": "casilla23", "12-15": "casilla24", "14-1": "casilla25", "14-5": "casilla26", "14-8": "casilla27", "15-7": "casilla28", "15-14": "casilla29", "17-10": "casilla30", "19-13": "casilla31" },
        palabras: [
            // Horizontal
            { id: 1, pista: "Tecnología de redundancia...", respuesta: "RAID", f: 0, c: 2, dir: "H" },
            { id: 5, pista: "Lenguaje de marcado extensible...", respuesta: "XML", f: 2, c: 1, dir: "H" },
            { id: 6, pista: "Sistema operativo de código abierto...", respuesta: "LINUX", f: 2, c: 9, dir: "H" },
            { id: 10, pista: "Solicitud de interrupción...", respuesta: "IRQ", f: 4, c: 12, dir: "H" },
            { id: 12, pista: "Instancia de un programa en ejecución...", respuesta: "PROCESO", f: 5, c: 4, dir: "H" },
            { id: 13, pista: "Nodo en una red distribuida...", respuesta: "NODE", f: 5, c: 14, dir: "H" },
            { id: 14, pista: "Siglas de Operating System...", respuesta: "OS", f: 7, c: 5, dir: "H" },
            { id: 16, pista: "Sistema de archivos antiguo...", respuesta: "FAT", f: 8, c: 12, dir: "H" },
            { id: 18, pista: "Memoria de acceso aleatorio...", respuesta: "RAM", f: 9, c: 15, dir: "H" },
            { id: 21, pista: "SO móvil basado en Linux...", respuesta: "ANDROID", f: 10, c: 8, dir: "H" },
            { id: 23, pista: "Creación de entornos virtuales...", respuesta: "VIRTUALIZACION", f: 12, c: 5, dir: "H" },
            { id: 25, pista: "Técnica de memoria virtual...", respuesta: "PAGING", f: 14, c: 1, dir: "H" },
            { id: 28, pista: "Sinónimo de thread...", respuesta: "HILO", f: 15, c: 7, dir: "H" },
            { id: 30, pista: "Núcleo del sistema operativo...", respuesta: "KERNEL", f: 17, c: 10, dir: "H" },
            { id: 31, pista: "Estado de suspensión temporal...", respuesta: "SLEEP", f: 19, c: 13, dir: "H" },
            // Vertical
            { id: 2, pista: "Lista de control de acceso...", respuesta: "ACL", f: 0, c: 3, dir: "V" },
            { id: 3, pista: "Controlador de dispositivo...", respuesta: "DRIVER", f: 0, c: 5, dir: "V" },
            { id: 4, pista: "Familia de sistemas operativos de Microsoft...", respuesta: "WINDOWS", f: 1, c: 10, dir: "V" },
            { id: 7, pista: "Antecesor de muchos SO modernos...", respuesta: "UNIX", f: 2, c: 12, dir: "V" },
            { id: 8, pista: "Núcleo de procesamiento en CPUs...", respuesta: "CORE", f: 2, c: 17, dir: "V" },
            { id: 9, pista: "Almacenamiento de datos...", respuesta: "MEMORIA", f: 4, c: 8, dir: "V" },
            { id: 11, pista: "Sistema operativo en tiempo real...", respuesta: "QNX", f: 4, c: 14, dir: "V" },
            { id: 15, pista: "Intercambio de procesos entre RAM y disco...", respuesta: "SWAPPING", f: 7, c: 6, dir: "V" },
            { id: 17, pista: "Interfaz de programación de aplicaciones...", respuesta: "API", f: 8, c: 13, dir: "V" },
            { id: 19, pista: "Sistema operativo de Apple...", respuesta: "MACOS", f: 9, c: 17, dir: "V" },
            { id: 20, pista: "Subproceso dentro de un proceso...", respuesta: "THREAD", f: 10, c: 2, dir: "V" },
            { id: 22, pista: "DEADLOCK: Bloqueo mutuo entre procesos...", respuesta: "DEADLOCK", f: 10, c: 10, dir: "V" },
            { id: 24, pista: "Unidad central de procesamiento...", respuesta: "CPU", f: 12, c: 15, dir: "V" },
            { id: 26, pista: "Sistema de archivos en red...", respuesta: "NFS", f: 14, c: 5, dir: "V" },
            { id: 27, pista: "Unidad de almacenamiento...", respuesta: "DISCO", f: 14, c: 8, dir: "V" },
            { id: 29, pista: "Interfaz de comandos...", respuesta: "SHELL", f: 15, c: 14, dir: "V" }
        ]
    },

    // -----------------------------------------
    // CRUCIGRAMAS MATEMÁTICOS
    // -----------------------------------------
    "cm_facil": {
        titulo: "Crucigrama Matemático: Fácil",
        tipo: "matematico",
        cols: 5, filas: 5,
        estilos: { 
            "0-0":"casilla1", "0-1":"casilla2", "0-3":"casilla3", "0-4":"casilla4",
            "1-0":"casilla2", "1-1":"bloqueada_negra", "1-2":"casilla5", "1-3":"bloqueada_negra", "1-4":"casilla2",
            "2-1":"casilla5", "2-2":"casilla6", "2-3":"casilla3", "2-4":"casilla7",
            "3-0":"casilla3", "3-1":"bloqueada_negra", "3-2":"casilla3", "3-3":"bloqueada_negra", "3-4":"casilla3",
            "4-0":"casilla8", "4-1":"casilla2", "4-3":"casilla3"
        },
        palabras: [
            // Soluciones para la validación automática
            { respuesta: "5", f: 0, c: 2 },
            { respuesta: "7", f: 2, c: 0 },
            { respuesta: "2", f: 4, c: 2 },
            { respuesta: "10", f: 4, c: 4 }
        ]
    },
    "cm_medio": {
        titulo: "Crucigrama Matemático: Medio",
        tipo: "matematico",
        cols: 5, filas: 5,
        estilos: {
            "0-1":"casilla2", "0-2":"casilla1", "0-3":"casilla3", 
            "1-0":"casilla5", "1-1":"bloqueada_negra", "1-2":"casilla5", "1-3":"bloqueada_negra", "1-4":"casilla5",
            "2-0":"casilla4", "2-3":"casilla3", "2-4":"casilla6",
            "3-0":"casilla3", "3-1":"bloqueada_negra", "3-2":"casilla3", "3-3":"bloqueada_negra", "3-4":"casilla3",
            "4-1":"casilla2", "4-3":"casilla3", "4-4":"casilla7"
        },
        palabras: [
            { respuesta: "10", f: 0, c: 0 },
            { respuesta: "40", f: 0, c: 4 },
            { respuesta: "+", f: 2, c: 1 },
            { respuesta: "20", f: 2, c: 2 },
            { respuesta: "5", f: 4, c: 0 },
            { respuesta: "10", f: 4, c: 2 }
        ]
    },
    "cm_dificil": {
        titulo: "Crucigrama Matemático: Difícil",
        tipo: "matematico",
        cols: 5, filas: 5,
        estilos: {
            "0-1":"casilla2", "0-2":"casilla1", "0-3":"casilla3",
            "1-1":"bloqueada_negra", "1-2":"casilla4", "1-3":"bloqueada_negra", "1-4":"casilla4",
            "2-0":"casilla6", "2-3":"casilla3", "2-4":"casilla7",
            "3-0":"casilla3", "3-1":"bloqueada_negra", "3-2":"casilla3", "3-3":"bloqueada_negra", "3-4":"casilla3",
            "4-1":"casilla2", "4-3":"casilla3", "4-4":"casilla8"
        },
        palabras: [
            { respuesta: "60", f: 0, c: 0 },
            { respuesta: "80", f: 0, c: 4 },
            { respuesta: "/", f: 1, c: 0 },
            { respuesta: "-", f: 2, c: 1 },
            { respuesta: "2", f: 2, c: 2 },
            { respuesta: "10", f: 4, c: 0 },
            { respuesta: "10", f: 4, c: 2 }
        ]
    }
};

/* =========================================
   LÓGICA DEL MOTOR (UNIVERSAL)
   ========================================= */
let estado = {
    nivelActual: null,
    grid: [], // Matriz de soluciones
    timer: null,
    segundos: 0,
    pistas: 5
};

document.addEventListener('DOMContentLoaded', () => {
    // IMPORTANTE: Por defecto cargamos uno, pero deberías cambiar esto
    // para leer un parámetro de URL, ej: juego.html?nivel=cc_facil
    // Para probar ahora, carga uno manualmente aquí:
    cargarNivel("cc_medio"); // <--- CAMBIA ESTO PARA PROBAR OTROS NIVELES

    // Eventos Botones
    document.getElementById('btn-verificar').addEventListener('click', verificar);
    document.getElementById('btn-pista').addEventListener('click', usarPista);
    document.getElementById('btn-atras').addEventListener('click', () => window.location.href = 'categoria.html');
});

function cargarNivel(id) {
    const data = niveles[id];
    if(!data) return alert("Nivel no encontrado");
    
    estado.nivelActual = data;
    estado.pistas = 5; // Reset pistas
    estado.segundos = 600;
    document.getElementById('btn-pista').innerHTML = `<i class="fas fa-lightbulb"></i> Pista (${estado.pistas})`;
    
    // Crear grid lógico vacío
    estado.grid = Array(data.filas).fill().map(() => Array(data.cols).fill(null));
    
    // Actualizar UI
    document.getElementById('titulo-nivel').innerText = data.titulo;
    document.getElementById('pistas-horizontal').innerHTML = '';
    document.getElementById('pistas-vertical').innerHTML = '';
    
    // 1. Construir Grid Lógico (Respuestas Correctas)
    data.palabras.forEach(p => {
        // En matemáticos la respuesta puede ser un número en una celda específica
        if(data.tipo === 'matematico') {
            estado.grid[p.f][p.c] = p.respuesta;
        } else {
            // Crucigramas normales
            let fila = p.f;
            let col = p.c;
            for(let i=0; i<p.respuesta.length; i++) {
                if(p.dir === 'H') estado.grid[fila][col + i] = p.respuesta[i];
                if(p.dir === 'V') estado.grid[fila + i][col] = p.respuesta[i];
            }
            
            // 2. Renderizar Pistas (Lista) para no-matemáticos
            const li = document.createElement('li');
            li.className = "pista-item";
            
            // Detectar si es imagen o texto
            let contenidoPista = p.pista;
            if(p.pista && (p.pista.endsWith('.png') || p.pista.endsWith('.jpg'))) {
                contenidoPista = `<img src="${p.pista}" alt="Pista visual" class="pista-img">`;
            } else {
                contenidoPista = `<span class="pista-texto">${p.pista}</span>`;
            }

            li.innerHTML = `<span class="num-pista">${p.id}.</span> ${contenidoPista}`;
            
            // Click en pista enfoca la celda
            li.onclick = () => enfocarCelda(p.f, p.c);
            
            if(p.dir === 'H') {
                const cont = document.getElementById('pistas-horizontal');
                if(cont) cont.appendChild(li);
            } else if(p.dir === 'V') {
                const cont = document.getElementById('pistas-vertical');
                if(cont) cont.appendChild(li);
            }
        }
    });

    // 3. Dibujar Tablero HTML
    const tablero = document.getElementById('tablero');
    tablero.style.gridTemplateColumns = `repeat(${data.cols}, 1fr)`;
    tablero.innerHTML = '';

    for(let f=0; f<data.filas; f++) {
        for(let c=0; c<data.cols; c++) {
            const letra = estado.grid[f][c]; // Respuesta correcta si existe
            const div = document.createElement('div');
            div.className = 'celda-wrapper';
            
            // Estilos especiales (Matemáticos o casillas negras)
            const key = `${f}-${c}`;
            if(data.estilos && data.estilos[key]) {
                div.classList.add(data.estilos[key]);
            }

            const input = document.createElement('input');
            input.id = `c-${f}-${c}`;
            input.dataset.f = f;
            input.dataset.c = c;
            
            // Configurar longitud máxima
            if (data.tipo === 'matematico') {
                // En matemáticos algunas celdas tienen 2 dígitos (ej: 10, 20)
                // Chequeamos la respuesta esperada
                input.maxLength = letra ? letra.length : 1; 
            } else {
                input.maxLength = 1;
            }
            
            // Si hay respuesta o estilo especial activo, es una casilla input
            // Si no hay respuesta, es un bloque negro (a menos que sea matemático con estilo visual)
            const esBloqueadaNegra = (data.estilos && data.estilos[key] === 'bloqueada_negra');
            
            if(letra || (data.tipo === 'matematico' && !esBloqueadaNegra)) {
                input.className = 'casilla activa';
                input.addEventListener('keyup', (e) => manejarInput(e, f, c));
            } else {
                input.className = 'casilla bloqueada';
                input.disabled = true;
                if(!data.estilos || !data.estilos[key]) {
                     // Si no es un estilo especial y no tiene letra, es fondo negro por defecto en crucigramas
                     if(data.tipo !== 'matematico') input.style.backgroundColor = '#000';
                }
            }

            div.appendChild(input);
            tablero.appendChild(div);
        }
    }
    
    iniciarTimer();
}

function manejarInput(e, f, c) {
    const input = e.target;
    // Validar tipo de dato
    if(estado.nivelActual.tipo === 'matematico') {
        // Permitir números y símbolos matemáticos básicos
        input.value = input.value.replace(/[^0-9+\-*/]/g, '');
    } else {
        input.value = input.value.toUpperCase().replace(/[^A-ZÑÁÉÍÓÚ]/g, '');
    }

    // Navegación Flechas
    if (e.key === "ArrowRight") moverFoco(f, c+1);
    if (e.key === "ArrowLeft") moverFoco(f, c-1);
    if (e.key === "ArrowUp") moverFoco(f-1, c);
    if (e.key === "ArrowDown") moverFoco(f+1, c);
}

function moverFoco(f, c) {
    const el = document.getElementById(`c-${f}-${c}`);
    if(el && !el.disabled) el.focus();
}

function verificar() {
    let errores = 0;
    let vacios = 0;
    const data = estado.nivelActual;

    for(let f=0; f<data.filas; f++) {
        for(let c=0; c<data.cols; c++) {
            const respuesta = estado.grid[f][c];
            if(respuesta) {
                const input = document.getElementById(`c-${f}-${c}`);
                if(!input) continue; // Por seguridad

                const valor = input.value.toUpperCase();
                
                if(!valor) vacios++;
                else if(valor !== respuesta.toUpperCase() && valor !== quitarTildes(respuesta.toUpperCase())) {
                    input.classList.add('error');
                    setTimeout(() => input.classList.remove('error'), 2000);
                    errores++;
                else {
                    clearInterval(estado.timer);
                     // Cambia el mensaje para que tenga sentido con cuenta regresiva
                    alert(`¡VICTORIA! Nivel Completado.\nTe sobraron: ${document.getElementById('cronometro').innerText.replace(' ', '')}`); // El replace es por si el icono se copia como texto
}
            }
        }
    }

    if(vacios > 0) alert("Faltan casillas por llenar");
    else if(errores > 0) alert(`Tienes ${errores} errores.`);
    else {
        clearInterval(estado.timer);
        const tiempoFinal = document.getElementById('cronometro').innerText;
        alert(`¡VICTORIA! Nivel Completado.\nTiempo: ${tiempoFinal}`);
        // AQUÍ CONECTAREMOS CON FIREBASE EN EL SIGUIENTE PASO
    }
}

function usarPista() {
    if(estado.pistas <= 0) return alert("No quedan pistas");
    
    // Buscar una celda vacía o incorrecta
    let candidatas = [];
    const data = estado.nivelActual;
    for(let f=0; f<data.filas; f++) {
        for(let c=0; c<data.cols; c++) {
            const resp = estado.grid[f][c];
            if(resp) {
                const input = document.getElementById(`c-${f}-${c}`);
                if(input.value.toUpperCase() !== resp.toUpperCase()) {
                    candidatas.push({input, letra: resp});
                }
            }
        }
    }

    if(candidatas.length > 0) {
        const azar = candidatas[Math.floor(Math.random() * candidatas.length)];
        azar.input.value = azar.letra;
        azar.input.classList.add('pista-usada');
        estado.pistas--;
        // --- CÓDIGO NUEVO: PENALIZACIÓN ---
        estado.segundos -= 30; // Quita 30 segundos
        if(estado.segundos < 0) estado.segundos = 0; // Evita negativos
        actualizarRelojVisual(); // Actualiza el reloj YA, no esperes al siguiente segundo
        // ----------------------------------

        document.getElementById('btn-pista').innerHTML = `<i class="fas fa-lightbulb"></i> Pista (${estado.pistas})`;
    }
}

/* UTILIDADES */
function iniciarTimer() {
    if(estado.timer) clearInterval(estado.timer);
    actualizarRelojVisual();
    estado.timer = setInterval(() => {
        estado.segundos--;
        actualizarRelojVisual();
        if (estado.segundos <= 0) {
            clearInterval(estado.timer);
            estado.segundos = 0;
            actualizarRelojVisual();
            alert("¡TIEMPO AGOTADO! Has perdido.");
            // Aquí puedes redirigir al menu o reiniciar
            window.location.href = 'index.html'; 
        }
    }, 1000);
}

// Función auxiliar para no repetir código
function actualizarRelojVisual() {
    const m = Math.floor(estado.segundos / 60).toString().padStart(2, '0');
    const s = (estado.segundos % 60).toString().padStart(2, '0');
    document.getElementById('cronometro').innerHTML = `<i class="fas fa-clock"></i> ${m}:${s}`;
    
    // Opcional: Poner en rojo si queda menos de 1 min
    const crono = document.getElementById('cronometro');
    if(estado.segundos < 60) crono.style.color = 'red';
    else crono.style.color = '';
}

function quitarTildes(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function enfocarCelda(f, c) {
    const el = document.getElementById(`c-${f}-${c}`);
    if(el) el.focus();
}