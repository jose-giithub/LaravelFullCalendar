/**
 * Función que crear añade divs rojos y los añade
 */
function crearRegalos() {
  let arrayPots2 = divsPots[1];//meto el segundo div en un array nuevo 
  let arrayPots3 = divsPots[2];
  
  if (!boolRegalos) {//si no hay regalos los añado
    console.log("añadir regalo");
      //div 2 izquierda
      //Dentro de cada div añado un nuevo div antes 'izquierda', y le meto la clase
      arrayPots2.insertBefore(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel";
      arrayPots2.insertBefore(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel";
      arrayPots2.insertBefore(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel red";
      arrayPots2.insertBefore(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel red";
      arrayPots2.insertBefore(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel";
      arrayPots2.insertBefore(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel red";
      arrayPots2.insertBefore(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel red";
      arrayPots2.insertBefore(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel red";
      //div 2 derecha
      //Dentro de cada div añado un nuevo div después 'derecha', y le meto la clase
      arrayPots2.appendChild(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel";
      arrayPots2.appendChild(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel red";
      arrayPots2.appendChild(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel";
      arrayPots2.appendChild(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel";
      arrayPots2.appendChild(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel";
      arrayPots2.appendChild(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel";
      arrayPots2.appendChild(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel red";
      arrayPots2.appendChild(document.createElement("div"), arrayPots2.childNodes[0]).className = "light_pixel";
      //div 3 izquierda
      arrayPots3.insertBefore(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel";
      arrayPots3.insertBefore(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel";
      arrayPots3.insertBefore(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel red";
      arrayPots3.insertBefore(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel red";
      arrayPots3.insertBefore(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel";
      arrayPots3.insertBefore(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel red";
      arrayPots3.insertBefore(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel red";
      arrayPots3.insertBefore(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel red";
        //div 3 derecha
      arrayPots3.appendChild(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel";
      arrayPots3.appendChild(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel red";
      arrayPots3.appendChild(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel red";
      arrayPots3.appendChild(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel red";
      arrayPots3.appendChild(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel";
      arrayPots3.appendChild(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel red";
      arrayPots3.appendChild(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel red";
      arrayPots3.appendChild(document.createElement("div"), arrayPots3.childNodes[0]).className = "light_pixel red";
      //modifico 
      boolRegalos = true;  
  }
}

/**
 * Función que modifica unos elementos del HTML y los pasa de verdes a rojos
 * La función se llamara cuando se presione la letra G
 */
function ponerGuirnalda() {
  for (let i = 0; i < ARRAY_GUIRNALDA.length; i++) {
    ARRAY_GUIRNALDA[i].style.backgroundColor = "red";
  }
}

/**
 * Función que enciende y apaga la estrella.
 * Si BOOL_INTERRUPTOR_GENERAL es false no hace nada
 * Si BOOL_INTERRUPTOR_ESTRELLA es true la enciende si es false la apaga
 */
function apagarTodaEstrella() {
  //si se ha presionado 'Q' APAGO TODO Y NADA FUNCIONA
  // si BOOL_INTERRUPTOR_GENERAL es true estrella encendida si es false apagada
  if (BOOL_INTERRUPTOR_GENERAL) {
    ARRAY_ESTRELLA.forEach(function (bombillaEstrella) {
      bombillaEstrella.style.backgroundColor = BOOL_INTERRUPTOR_ESTRELLA
        ? "#fef102"
        : "#21252b";
    });
  }
}

/**
 * Función que enciende o apaga todas las bombillas.
 * Si BOOL_INTERRUPTOR_GENERAL es false no hace nada
 * Si BOOL_INTERRUPTOR_BOMBILLAS es true la enciende si es false la apaga
 */
function apagarrTodasBombillas() {
  if (BOOL_INTERRUPTOR_GENERAL) {
    ARRAY_BOMBILLASBLUE.forEach(function (bombilla) {
      bombilla.style.backgroundColor = BOOL_INTERRUPTOR_BOMBILLAS
        ? "blue"
        : "#21252b";
    });
    ARRAY_BOMBILLAS_YELLOW.forEach(function (bombilla) {
      bombilla.style.backgroundColor = BOOL_INTERRUPTOR_BOMBILLAS
        ? "#fef102"
        : "#21252b";
    });
  }
}

/**
 * Función que modifica el color de todas las bombillas a apagadas
 */
function apagarTodasBombillas() {
  if (!BOOL_INTERRUPTOR_GENERAL) {
    ARRAY_BOMBILLAS.forEach(function (bombilla) {
      //recorro otra vez y modifico todas a la vez
      bombilla.style.backgroundColor = "#21252b"; // Cambia el color
    });
    ARRAY_ESTRELLA.forEach(function (bombilla) {
      //recorro otra vez y modifico todas a la vez
      bombilla.style.backgroundColor = "#21252b"; // Cambia el color
    });
  }
}

/**
 * Función que apaga todas las bombillas, si están apagadas las enciende.
 * Apaga las luces, estrella ay bombillas azules y amarillas
 */
function interruptorGeneral() {
  // console.log('entra en encender todo');
  if (BOOL_INTERRUPTOR_GENERAL) {
    //enciendo todas las luces, estrella ay bombillas azules y amarillas
    ARRAY_BOMBILLASBLUE.forEach(function (bombilla) {
      bombilla.style.backgroundColor = "blue";
    });
    ARRAY_BOMBILLAS_YELLOW.forEach(function (bombilla) {
      bombilla.style.backgroundColor = "#fef102";
    });
    ARRAY_ESTRELLA.forEach(function (bombilla) {
      bombilla.style.backgroundColor = "#fef102";
    });
  } else {
    //si estan encendidas las apago
    console.log("entra en else encender todo");
    ARRAY_BOMBILLASBLUE.forEach(function (bombilla) {
      //recorro otra vez y modifico todas a la vez
      bombilla.style.backgroundColor = "#21252b"; // Cambia el color
    });
    ARRAY_BOMBILLAS_YELLOW.forEach(function (bombilla) {
      //recorro otra vez y modifico todas a la vez
      bombilla.style.backgroundColor = "#21252b"; // Cambia el color
    });
    ARRAY_ESTRELLA.forEach(function (bombilla) {
      //recorro otra vez y modifico todas a la vez
      bombilla.style.backgroundColor = "#21252b"; // Cambia el color
    });
  }
}

/**
 * Función que modifica el color de la bombilla a amarilla blue
 */
function encenderBombilla() {
  if (BOOL_INTERRUPTOR_GENERAL) {
    this.style.backgroundColor = "blue"; // Cambia el color
  }
}
function apagarrBombilla() {
  if (BOOL_INTERRUPTOR_GENERAL) {
    this.style.backgroundColor = "#fef102"; // Cambia el color
  }
}

/**
 * Función que modifica el color de la estrella  a amarillo --> #fef102
 */
function apagarEstrilla() {
  if (BOOL_INTERRUPTOR_GENERAL) {
    ARRAY_ESTRELLA.forEach(function (bombillaEstrela) {
      //recorro otra vez y modifico todas a la vez
      bombillaEstrela.style.backgroundColor = "#fef102"; // Cambia el color
    });
  }
}
/**
 * Función que modifica el color de la estrella a azul blue
 */
function encenderEstrella() {
  if (BOOL_INTERRUPTOR_GENERAL) {
    ARRAY_ESTRELLA.forEach(function (bombillaEstrela) {
      //recorro otra vez y modifico todas a la vez
      bombillaEstrela.style.backgroundColor = "blue"; // Cambia el color
    });
  }
}

// Función que maneja el evento de tecla presionada
function teclasPresionada(event) {
  teclaPresionada = event.key;
  console.log("Tecla presionada: " + teclaPresionada);
}
