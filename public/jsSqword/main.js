//import { DICCIIONARIO } from "./palabras.js";LETRA_RANDOM

document.addEventListener("DOMContentLoaded", function () {
  console.log("entro");

  window.CONTADOR2 = 0;
  window.CONTADOR = 0; //contador de letras random insertadas en la cuadricula
  //guardo la letra random en variable global
  window.LETRA_RANDOM = letraRandom(); //llamar a letras random

  window.LETRA_RANDOM = letraRandom(); //llamar a letras random

  window.LETRA_JOKER = "";
  window.ESTADOJOKER = false; //Para controlar si  se pueden añadir letras a la cuadricula o no
  window.ESTADOJOKER = false; //Para controlar si  se pueden añadir letras a la cuadricula o no

  //definir numero de filas y columnas
  const arrayRows = 5;
  const arrayColums = 5;

  //div donde se muestra la letra random  en una variable global
  window.DIV_LETRAS_RANDOM = document.getElementById("mostarLetraRandom");

  //añado la letra random al div
  DIV_LETRAS_RANDOM.innerHTML = LETRA_RANDOM;

  //CUADRICULA DINÁMICA
  //capturar el contenedor donde ira la cuadricula
  let cuadricula = document.getElementById("contenedor");
  //recorremos las rows
  for (let row = 0; row < arrayRows; row++) {
    let divs = document.createElement("div"); //creamos divs
    divs.id = "row" + (row + 1); //le añadimos id
    //recorremos las colums
    for (let col = 0; col < arrayColums; col++) {
      let input = document.createElement("input"); //creamos input
      input.type = "text";
      input.maxLength = "1"; //máximo de letras dentro de cada input
      input.className = "cuadrado"; //le atizamos una clase común a todas
      input.id = "input" + (row * arrayRows + (col + 1)); //añadimos id
      //añadimos dentro de los divs que hemos creado al inicio del form row los input
      divs.appendChild(input);
    }
    //dentro del contenedor capturado del html atizamos los divs con los input dentro
    cuadricula.appendChild(divs);
  }

  //Variable con la lista de todos los inputs dentro de la cuadricula
  const listaInputs = document.querySelectorAll(".cuadrado"); //elemento común es la clase 'cuadrado'
  listaInputs.forEach(function (input) {
    //recorremos toda la lista
    //creo un evento click y le paso la función que añadirá la letra random en el input seleccionado
    input.addEventListener("click", insertarLetraRandom);
  });

  let inputJoker = document.getElementById("inputJoker"); //capturo el contenedor donde se escribe la letra del joker
  inputJoker.addEventListener("input", function (event) {
    //creo un evento que cuando tenga algo escrito lo valido
    validateInputJoker(event.target); //Llamo a la función que valida que lo escrito sea de la A a la Z con ç incluida y ñ excluida
    LETRA_JOKER = inputJoker.value; //guardo la letra escrita
  });
  if (inputsTodosLlenos()) {

    console.log(sumarPuntos());
  }

  // Capturo el botón y le pongo un evento click
let botonMostrar = document.getElementById('mostarInstrucciones');

 botonMostrar.addEventListener('click', mostrarInstrucciones);

let botonCerrar = document.getElementById('cerrarInstrucciones');
botonCerrar.addEventListener('click', mostrarInstrucciones);


  // Añade el event listener al botón de reinicio
let botonReinicio = document.getElementById('reinicioJuego');
if (botonReinicio) {
    botonReinicio.addEventListener('click', reiniciarTodo);
}

  
}); //final del DOMContentLoaded

