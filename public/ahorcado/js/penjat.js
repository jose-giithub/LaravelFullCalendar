

/* Estructura "constant" del joc */
var gameConfig = {
    liveLook: ["monster5.png", "monster4.png", "monster3.png", "monster2.png", "monster1.png", "monster0.png"],
    wordsToGuess: ["elefant", "criatura", "llapis", "maduixa", "sasha", "mama", "papa",
    "amigo", "perro", "gato", "luz", "sol", "luna", "cielo", "flor", "arbol", "hoja",
    "libro", "agua", "mar", "rio", "lago", "mesa", "silla", "casa", "techo", "pared",
    "campo", "bosque", "niño", "niña", "camino", "coche", "juego", "color", "forma", "punto",
    "linea", "circulo", "cuadro", "recta", "curva", "esfera", "cubo", "sonido", "ruido", "nota",
    "letra", "frase", "texto", "parrafo", "parte", "todo", "nada", "algo", "nadie", "alguien",
    "ayer", "hoy", "mañana", "tarde", "noche", "hora", "minuto", "segundo", "reloj", "tiempo",
    "luz", "calor", "fuego", "frio", "caliente", "helado", "duro", "blando", "seco", "humedo",
    "pesado", "ligero", "alto", "bajo", "grande", "pequeño", "viejo", "nuevo", "bueno", "malo",
    "blanco", "negro", "rojo", "verde", "azul", "amarillo", "naranja", "rosa", "gris", "marron",
    "claro", "oscuro", "fuerte", "debil", "duro", "suave", "rapido", "lento", "cerca", "lejos"],
    numberOfLives: 5,
}

/* Estructura per tenir controlat en tot moment l'estat del joc */
var gameStatus = {
    status: "playing",
    lives: gameConfig.numberOfLives,
    wordToGuess: "",//palabra para adivinar
    wordCompleted: "",//palabra aleatoria
    teclaPrsionada: "",
    letrasAcertadas: "",

}

//PASO 1 ENGLOBAR TODO EN UNA FUNCIÓN QUE OBLIGA A CARGAR EL JS DESPUÉS DE HABER CARGADO EL HTML

window.onload = function () {


    //**************PASO 2 CAPTURAR TODOS LOS EVENTOS
    var img = document.getElementById("monster");//imágenes del muestro
    var spamMostrarPalabra = document.getElementById("letters");//donde se muestra la palabra
    var divPopUp = document.getElementById('info');//guardamos el div que contiene todas las popup 
    var infoInicio = document.getElementById('welcome');//pantalla de info 
    var infoJuegoGanado = document.getElementById('game_success');//pantalla juego superado
    var infoJuegoPerdido = document.getElementById('game_fail');//pantalla de juego perdido
    var botonInfo = document.getElementById('btn_ok');//botón de los popAp
    var pistaLetra = document.getElementById('clue');//Pista
    var numberOfLives = document.getElementById("lives");//vidas 
    //capturo cuando pasan el ratón por encima de la pregunta  cuando entra ? -> id clue-> mouseover mouseover
    document.getElementById("clue").addEventListener("mouseover", preguntarLetra);

    //capturo cuando pasan el ratón por encima de la pregunta y sale ? -> id clue-> mouseout
    document.getElementById("clue").addEventListener("mouseout", preguntarLetra);

    //capturo cuando pasan clisan sobre el bóton new game --> id new_game
    document.getElementById("new_game").addEventListener("click", newGame);

    var arrayLetrasAdivinadas;
    var largoPalabra;
    var finalPartida = false;// cuando se termine la partida lo pongo en true y bloqueo todo

    // PASO 2.1 OBTENER LA PALABRA DE FORMA ALEATORIA
    // Cuando la palabra aleatoria en el objeto  gameStatus usando la función numeroAleatorio
    gameStatus.wordToGuess = gameConfig.wordsToGuess[numeroAleatorio()];
    gameStatus.wordToGuess = gameStatus.wordToGuess.toUpperCase();//la paso a mayúscula  todo
    largoPalabra = gameStatus.wordToGuess.length;
    console.log('Palabra aleatoria ' + gameStatus.wordToGuess);
    console.log('Largo palabra ' + largoPalabra);


    /**************PASO 3 AL CARGAR EL HTML LO PRIMERO QUE SALGA SEA LA PAGINA DE INFO Y EL BOTÓN */
    divPopUp.style.display = 'block';//cambio su css de none a block para que aparezcan 
    infoInicio.style.display = 'block';

    //hasta que no clique sobre el boton btn_ok no se captura nada del teclado
    botonInfo.addEventListener("click", function (event) {
        divPopUp.style.display = 'none';
        infoInicio.style.display = 'none';
        // Activa la funcionalidad de teclado después de que se cierra el pop up
        document.addEventListener("keydown", capturarTecla, false);
    }, false);



    //**************PASO 4 INTRODUCIR LA PALABRA DE FORMA RANDOM EN <span id="letters">______</span>

    // ************** PASO 4.1 QUE SALGAN TANTOS GUIONES COMO LETRAS TIENE LA PALABRA 
    //guardo en la palabra a adivinar del objeto con tantos guiones como larga es la palabra
    gameStatus.wordCompleted = "_".repeat(largoPalabra);
    document.getElementById("letters").innerHTML = gameStatus.wordCompleted;//Muestro en el html los guiones


    // ************** PASO 5 CAPTURAR TECLA CICADA Y VERIFICAR SI ES PARTE DE LA PALABRA ALEATORIA
    function capturarTecla(event) {//inicio la función que captura la tecla marcada
        if (!finalPartida) { // si es false todo funciona si es true se detienen todos los eventos

            if (/^[a-zA-Z]$/.test(event.key)) {// Verificar si la teclaPrsionada es una letra de la a a la z
                gameStatus.teclaPrsionada = event.key.toUpperCase();//la guardo en el objeto en mayúsculas
            }
            console.log('Tecla presionada ' + gameStatus.teclaPrsionada);

            // ************** PASO 5.1  SI LA LETRA FORMA PARTE DE LA PALABRA QUITO EL GUION EN ESA POSICIÓN Y PONGO LA LETRA 
            //guardo el la palabra con guiones la tecla presionada si esta dentro de la palabra aleatoria
            gameStatus.wordCompleted = actializarPalabra(gameStatus.wordCompleted,
                gameStatus.wordToGuess, gameStatus.teclaPrsionada);


            // PASO 6 SI ACIERTA MOSTRAR LA LETRA EN LA POSICIÓN QUE TOCA 
            if (gameStatus.wordToGuess.includes(gameStatus.teclaPrsionada)) {//si la tecla personada esta dentro de la palabra aleatoria
                console.log('Acerto');
                document.getElementById("letters").innerHTML = gameStatus.wordCompleted;
                //guardamos las letras que acertó sin guiones en letrasAcertadas
                gameStatus.letrasAcertadas = gameStatus.wordCompleted.replace(/_/g, "");
                console.log('Letras acertadas' + gameStatus.letrasAcertadas);

                // PASO 7 SI ACIERTA TODAS LAS LETRAS QUE SALGA EL POP UP  infoJuegoGanado
                if (gameStatus.wordCompleted.toUpperCase() == gameStatus.wordToGuess.toUpperCase()) {
                    console.log('Gano');

                    divPopUp.style.display = 'block';//cambio su css de none a block para que aparezcan 
                    infoJuegoGanado.style.display = "block";//que salga el pop up

                    finalPartida = true; //Bloqueo todos los eventos menos new game 
                }
            } else {
                // PASO 8 SI FALLA RESTAR UNA VIDA Y CAMBIAR LA IMAGEN DEL MUÑECO
                if (gameStatus.lives > 0) {//mientras vidas sean mas grandes de 0
                    gameStatus.lives--;
                    document.getElementById("lives").innerHTML = gameStatus.lives + " LIVES LEFT";//muestro las vidas

                    img.src = "img/" + gameConfig.liveLook[gameStatus.lives];//cambio la imagen

                    // PASO 9 SI SE LE TERMINAN LAS VIDAS QUE SALGA EL POP UP 
                } if (gameStatus.lives < 1) {//si tiene menos de 1
                    console.log('Perdió');
                    divPopUp.style.display = 'block';//cambio su css de none a block para que aparezcan 
                    infoJuegoPerdido.style.display = "block";

                    finalPartida = true; //Bloqueo todos los eventos menos new game 
                }
            }//negación if gameStatus.wordToGuess.includes(gameStatus.teclaPrsionada)
        }//final booleano paro
    }//Final función onkeydown


    //**************PASO 10 SI PONE EL RATÓN ENCIMA DE <span id="lives QUE SE MUESTRE UNA LETRA DE LA PALABRA SELECCIONADA Y CUANDO 
    //SALGA EL PUNTERO DEL DIV QUE SALGA OTRA VEZ EL INTERROGANTE
    function preguntarLetra(event) {

        if (!finalPartida) {  //Si no ha acertado todas las letras

            console.log('Pregunta');
            // Convertimos las letras adivinadas en un array 
            arrayLetrasAdivinadas = gameStatus.letrasAcertadas.split('');

            if (event.type == "mouseover") {//cuando entra en el span de pista?

                for (let i = 0; i < gameStatus.wordToGuess.length; i++) {//recorro la palabra aleatoria
                    // Si dentro del array arrayLetrasAdivinadas no esta las letras de la palabra a adivinar 
                    if (!arrayLetrasAdivinadas.includes(gameStatus.wordToGuess[i])) {
                        document.getElementById("clue").innerHTML = gameStatus.wordToGuess[i];//Muestro la letra 
                    }
                }
            } else if (event.type == "mouseout") {//cuando sale de la casilla 
                document.getElementById("clue").innerHTML = "?";//cambio el número que se muestra a '?'

                //**************PASO 10.1 SE LE TIENE QUE RESTAR 1 VIDA, SI LAS VIDAS LLEGAN A 0 PASAR AL PASO 8
                if (gameStatus.lives > 0) {
                    gameStatus.lives--;//resto vida
                    document.getElementById("lives").innerHTML = gameStatus.lives + " LIVES LEFT";//muestro las vidas
                    img.src = "img/" + gameConfig.liveLook[gameStatus.lives];//cambio la imagen

                    //si las vidas llegan a 0 que salga el pop up y paralizo todo PASO 8
                    if (gameStatus.lives == 0) {
                        console.log('Perdió');
                        divPopUp.style.display = 'block';//cambio su css de none a block para que aparezcan 
                        infoJuegoPerdido.style.display = "block";
                        document.getElementById("clue").innerHTML = "?";//cambio el número que se muestra a '?'

                        finalPartida = true; //Bloqueo todos los eventos menos new game 
                    }
                }//final boolean  
            }
        }

    }//final preguntarLetra

    //**************PASO 11 SI ACE CLICK EN EL BOTÓN DE NEW GAME REINICIAR TODO 
    function newGame(event) {
        console.log('New Game');
        location.reload();//recarga toda la pagina y lo deja todo sin modificar
    }

    /******************         FUNCIONES          ******************** */

    /*---------------------------------------
    Función que te da un numero aleatorio entre el 0 incluido y el 3
    */
    function numeroAleatorio() {
        return Math.floor(Math.random() * 108);
    }
    /*---------------------------------------
 
    /*función que le pasas gameStatus.wordToGuess, gameStatus.teclaPrsionada y gameStatus.wordCompleted
    recorre  todas la palabra a adivinar 'wordToGuess'. Si la letra del teclado esta en la palabra 
    guarda la la letra anterior y la posterior y las une con la letra que viene del teclado 
    en medio. Luego actualiza la palabra a completar wordCompleted */
    function actializarPalabra(wordCompleted, wordToGuess, teclaPrsionada) {
        var resultado = ''; // Inicializamos una nueva cadena de texto para construir el resultado

        for (let i = 0; i < wordToGuess.length; i++) {
            if (teclaPrsionada === wordToGuess[i]) {
                // Guardo obtiene el fragmento de la palabra desde el inicio hasta 
                //justo antes de la letra que debe ser actualizada.
                var strAnterior = wordCompleted.substring(0, i);

                // Guardo el fragmento de la palabra que sigue después de la letra que debe ser actualizada.
                var strPosterior = wordCompleted.substring(i + 1);

                // Uno todo con teclaPrsionada en medio
                resultado = strAnterior + teclaPrsionada + strPosterior;

                // Actualizamos 'wordCompleted' con el nuevo resultado
                wordCompleted = resultado;
            }
        }
        return wordCompleted; // Devolvemos el resultado final
    }
}//final función window.onload

