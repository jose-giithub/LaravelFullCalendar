//VARIABLES GLOBALES
let teclaPresionada = null;
window.BOOL_INTERRUPTOR_GENERAL = false;
window.BOOL_INTERRUPTOR_ESTRELLA = true;
window.BOOL_INTERRUPTOR_BOMBILLAS = true;
window.ARRAY_ESTRELLA = [];
window.ARRAY_BOMBILLAS = [];
window.ARRAY_BOMBILLASBLUE =[];
window.ARRAY_BOMBILLAS_YELLOW =[];
window.ARRAY_GUIRNALDA =[];
let divsPots;
let boolRegalos = false;

document.addEventListener("DOMContentLoaded", function () {
 // console.log("Entro");


    //////////////////////////EVENTO TODO APAGADO AL INICIO///////////////////////////
    apagarTodasBombillas();
   
    //////////////////////////EVENTO keydown//////////////////////////////////////////
  window.addEventListener("keydown", function (event) {
    //capturamos la tecla presionada
    teclasPresionada(event);
     //SI SE PRESIONA Q SE ENCIENDEN TODAS
    if (event.key.toLowerCase() == "q") {
      //Al presionar 'Q' modifico el boleano si esta false a true y viceversa
      BOOL_INTERRUPTOR_GENERAL = !BOOL_INTERRUPTOR_GENERAL;
      console.log("Interruptor general: " + (BOOL_INTERRUPTOR_GENERAL ? " Encendido" : " Apagado"));
       /////////////////////EVENTO DETENER  TODO CON TECLADO Q /////////////////////
      interruptorGeneral();//si presionas no funciona nada 
    }
    //si precionas e la estrella se enciende
    if (event.key.toLowerCase() == "e") {
         //Al presionar 'E' modifico el boleano si esta false a true y viceversa
        BOOL_INTERRUPTOR_ESTRELLA = !BOOL_INTERRUPTOR_ESTRELLA;
        console.log("Interruptor estrella: " + (BOOL_INTERRUPTOR_ESTRELLA ? " Encendido" : " Apagado"));
        /////////////////////EVENTO ENCENDER  ESTRELLA CON TECLADO E/////////////////////
        apagarTodaEstrella();
    }
    //si presiionas l se encienden las bombillas
    if (event.key.toLowerCase() == "l") {
      BOOL_INTERRUPTOR_BOMBILLAS = ! BOOL_INTERRUPTOR_BOMBILLAS;
        console.log("Interruptor bombillas" + (BOOL_INTERRUPTOR_BOMBILLAS ? " Encendido": " Apagada"));
          ////////////////////EVENTO ENCENDER BOMBILLAS CON TECLADO L////////////////////////////
          apagarrTodasBombillas();
      }
   //si presiionas G se ponen las guiRlnaldas
   if (event.key.toLowerCase() == "g") {
        ////////////////////EVENTO PONER GUIRNALDAS CON TECLADO L////////////////////////////
        ponerGuirnalda();
    }
    //si presiionas R se ponen las guiRlnaldas
   if (event.key.toLowerCase() == "r") {
    ////////////////////EVENTO PONER GUIRNALDAS CON TECLADO R////////////////////////////
    crearRegalos();
}
    //////////////EVENTO ENCENDER Y APAGAR ESTRELLA AL PASAR EL RATÓN///////////////////////
    ARRAY_ESTRELLA.forEach(function (estrella) {
      //recorro el array dentro creo un evento y llamo a las función
      estrella.addEventListener("mouseover", encenderEstrella);
      estrella.addEventListener("mouseout", apagarEstrilla);
    });

   
    ////////////////////EVENTO APAGAR BOMBILLAS RATÓN////////////////////////////
    
    //modifico el color de las bombillas cuando se pasa el ratón por encima
    ARRAY_BOMBILLAS[0].addEventListener("mouseover", encenderBombilla);//bombilla 1 yellow
    ARRAY_BOMBILLAS[0].addEventListener("mouseout", apagarrBombilla);
    //bombilla 2 blue
    ARRAY_BOMBILLAS[1].addEventListener("mouseover", apagarrBombilla);
    ARRAY_BOMBILLAS[1].addEventListener("mouseout", encenderBombilla);
    //bombilla 3 yellow
    ARRAY_BOMBILLAS[2].addEventListener("mouseover", encenderBombilla);
    ARRAY_BOMBILLAS[2].addEventListener("mouseout", apagarrBombilla);
    //bombilla 4 blue
    ARRAY_BOMBILLAS[3].addEventListener("mouseover", apagarrBombilla);
    ARRAY_BOMBILLAS[3].addEventListener("mouseout", encenderBombilla);
    //bombilla 5 yellow
    ARRAY_BOMBILLAS[4].addEventListener("mouseover", encenderBombilla);
    ARRAY_BOMBILLAS[4].addEventListener("mouseout", apagarrBombilla);
    //bombilla 6 yellow
    ARRAY_BOMBILLAS[5].addEventListener("mouseover", encenderBombilla);
    ARRAY_BOMBILLAS[5].addEventListener("mouseout", apagarrBombilla);
    //bombilla 7 yellow
    ARRAY_BOMBILLAS[6].addEventListener("mouseover", encenderBombilla);
    ARRAY_BOMBILLAS[6].addEventListener("mouseout", apagarrBombilla);
    //bombilla 8 yellow
    ARRAY_BOMBILLAS[7].addEventListener("mouseover", encenderBombilla);
    ARRAY_BOMBILLAS[7].addEventListener("mouseout", apagarrBombilla);
    //bombilla 9 blue
    ARRAY_BOMBILLAS[8].addEventListener("mouseover", apagarrBombilla);
    ARRAY_BOMBILLAS[8].addEventListener("mouseout", encenderBombilla);
    //bombilla 10 blue
    ARRAY_BOMBILLAS[9].addEventListener("mouseover", apagarrBombilla);
    ARRAY_BOMBILLAS[9].addEventListener("mouseout", encenderBombilla);
    //bombilla 11 yellow
    ARRAY_BOMBILLAS[10].addEventListener("mouseover", encenderBombilla);
    ARRAY_BOMBILLAS[10].addEventListener("mouseout", apagarrBombilla);
    //bombilla 12 yellow
    ARRAY_BOMBILLAS[11].addEventListener("mouseover", encenderBombilla);
    ARRAY_BOMBILLAS[11].addEventListener("mouseout", apagarrBombilla);
    //bombilla 13 yellow
    ARRAY_BOMBILLAS[12].addEventListener("mouseover", encenderBombilla);
    ARRAY_BOMBILLAS[12].addEventListener("mouseout", apagarrBombilla);
    //bombilla 14 blue
    ARRAY_BOMBILLAS[13].addEventListener("mouseover", apagarrBombilla);
    ARRAY_BOMBILLAS[13].addEventListener("mouseout", encenderBombilla);
    //bombilla 15 yellow
    ARRAY_BOMBILLAS[14].addEventListener("mouseover", encenderBombilla);
    ARRAY_BOMBILLAS[14].addEventListener("mouseout", apagarrBombilla);
    //bombilla 16 blue
    ARRAY_BOMBILLAS[15].addEventListener("mouseover", apagarrBombilla);
    ARRAY_BOMBILLAS[15].addEventListener("mouseout", encenderBombilla);
    //bombilla 15 yellow
    ARRAY_BOMBILLAS[16].addEventListener("mouseover", encenderBombilla);
    ARRAY_BOMBILLAS[16].addEventListener("mouseout", apagarrBombilla);
  }); //final Evento keydown

}); //final de dom

