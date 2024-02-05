
document.addEventListener("DOMContentLoaded", function () {
    //console.log("Entro capturar elementos");
 ///////////////CAPTURAR LUCES ESTRELLA////////////////
 ARRAY_ESTRELLA[0] = document.querySelector(".tree div:nth-of-type(1) div");
 ARRAY_ESTRELLA[1] = document.querySelector(".tree div:nth-of-type(2) div");
 ARRAY_ESTRELLA[2] = document.querySelector(
   ".tree div:nth-of-type(2) div:nth-of-type(2)"
 );
 ARRAY_ESTRELLA[3] = document.querySelector(
   ".tree div:nth-of-type(2) div:nth-of-type(3)"
 );
 ARRAY_ESTRELLA[4] = document.querySelector(".tree div:nth-of-type(3) div");
 //console.log(arrayEstrella);


////////////////CAPTURAR LUCES BOMBILLAS/////////////////////////
ARRAY_BOMBILLAS[0] = document.querySelector(
   ".tree div:nth-of-type(5) div:nth-of-type(5)"
 ); //yellow
 ARRAY_BOMBILLAS_YELLOW[0]= document.querySelector(
   ".tree div:nth-of-type(5) div:nth-of-type(5)"
 );
 ARRAY_BOMBILLAS[1] = document.querySelector(
   ".tree div:nth-of-type(6) div:nth-of-type(3)"
 ); //blue
 //guardo bombilla azul
 ARRAY_BOMBILLASBLUE[0] = document.querySelector(
   ".tree div:nth-of-type(6) div:nth-of-type(3)"
 ); 
 ARRAY_BOMBILLAS[2] = document.querySelector(
   ".tree div:nth-of-type(8) div:nth-of-type(1)"
 ); //yellow
 ARRAY_BOMBILLAS_YELLOW[1]= document.querySelector(
   ".tree div:nth-of-type(8) div:nth-of-type(1)"
 );
 ARRAY_BOMBILLAS[3] = document.querySelector(
   ".tree div:nth-of-type(10) div:nth-of-type(3)"
 ); //blue
 ARRAY_BOMBILLASBLUE[1]= document.querySelector(
   ".tree div:nth-of-type(10) div:nth-of-type(3)"
 );
 ARRAY_BOMBILLAS[4] = document.querySelector(
   ".tree div:nth-of-type(11) div:nth-of-type(1)"
 ); //yellow
 ARRAY_BOMBILLAS_YELLOW[2]= document.querySelector(
   ".tree div:nth-of-type(11) div:nth-of-type(1)"
 );
 ARRAY_BOMBILLAS[5] = document.querySelector(
   ".tree div:nth-of-type(11) div:nth-of-type(6)"
 ); //yellow
 ARRAY_BOMBILLAS_YELLOW[3] = document.querySelector(
   ".tree div:nth-of-type(11) div:nth-of-type(6)"
 );
 ARRAY_BOMBILLAS[6] = document.querySelector(
   ".tree div:nth-of-type(12) div:nth-of-type(2)"
 ); //yellow
 ARRAY_BOMBILLAS_YELLOW[4] = document.querySelector(
   ".tree div:nth-of-type(12) div:nth-of-type(2)"
 );
 ARRAY_BOMBILLAS[7] = document.querySelector(
   ".tree div:nth-of-type(13) div:nth-of-type(12)"
 ); //yellow
 ARRAY_BOMBILLAS_YELLOW[5]= document.querySelector(
   ".tree div:nth-of-type(13) div:nth-of-type(12)"
 );
 ARRAY_BOMBILLAS[8] = document.querySelector(
   ".tree div:nth-of-type(14) div:nth-of-type(11)"
 ); //blue
 ARRAY_BOMBILLASBLUE[2] = document.querySelector(
   ".tree div:nth-of-type(14) div:nth-of-type(11)"
 );
 ARRAY_BOMBILLAS[9] = document.querySelector(
   ".tree div:nth-of-type(16) div:nth-of-type(7)"
 ); //blue
 ARRAY_BOMBILLASBLUE[3] = document.querySelector(
   ".tree div:nth-of-type(16) div:nth-of-type(7)"
 );
 ARRAY_BOMBILLAS[10] = document.querySelector(
   ".tree div:nth-of-type(16) div:nth-of-type(10)"
 ); //yellow
 ARRAY_BOMBILLAS_YELLOW[6] = document.querySelector(
   ".tree div:nth-of-type(16) div:nth-of-type(10)"
 );
 ARRAY_BOMBILLAS[11] = document.querySelector(
     ".tree div:nth-of-type(17) div:nth-of-type(17)"
   ); //yellow
   ARRAY_BOMBILLAS_YELLOW[7]= document.querySelector(
       ".tree div:nth-of-type(17) div:nth-of-type(17)"
     );
   ARRAY_BOMBILLAS[12] = document.querySelector(
     ".tree div:nth-of-type(18) div:nth-of-type(1)"
   ); //yellow
   ARRAY_BOMBILLAS_YELLOW[8]= document.querySelector(
       ".tree div:nth-of-type(18) div:nth-of-type(1)"
     );
   ARRAY_BOMBILLAS[13] = document.querySelector(
     ".tree div:nth-of-type(18) div:nth-of-type(3)"
   ); //blue
   ARRAY_BOMBILLASBLUE[4]= document.querySelector(
       ".tree div:nth-of-type(18) div:nth-of-type(3)"
     );
   ARRAY_BOMBILLAS[14] = document.querySelector(
     ".tree div:nth-of-type(19) div:nth-of-type(7)"
   ); //yellow
   ARRAY_BOMBILLAS_YELLOW[9]= document.querySelector(
       ".tree div:nth-of-type(19) div:nth-of-type(7)"
     ); 
   ARRAY_BOMBILLAS[15] = document.querySelector(
     ".tree div:nth-of-type(20) div:nth-of-type(15)"
   ); //blue
   ARRAY_BOMBILLASBLUE[5]= document.querySelector(
       ".tree div:nth-of-type(20) div:nth-of-type(15)"
     );
     ARRAY_BOMBILLAS[16] = document.querySelector(
       ".tree div:nth-of-type(15) div:nth-of-type(5)"
     ); //yellow
     ARRAY_BOMBILLAS_YELLOW[10]= document.querySelector(
       ".tree div:nth-of-type(15) div:nth-of-type(5)"
     ); 
  
    /////////CAPTURAR GUIRNALDA////////////////    ARRAY_GUIRNALDA[1]
    ARRAY_GUIRNALDA[0] = document.querySelector(
      ".tree div:nth-of-type(6) div:nth-of-type(1)"
    ); 
    ARRAY_GUIRNALDA[1] = document.querySelector(
      ".tree div:nth-of-type(7) div:nth-of-type(3)"
    ); 
    ARRAY_GUIRNALDA[2] = document.querySelector(
      ".tree div:nth-of-type(8) div:nth-of-type(4)"
    ); 
    ARRAY_GUIRNALDA[3] = document.querySelector(
      ".tree div:nth-of-type(8) div:nth-of-type(5)"
    ); 
    ARRAY_GUIRNALDA[4] = document.querySelector(
      ".tree div:nth-of-type(8) div:nth-of-type(6)"
    ); 
    ARRAY_GUIRNALDA[5] = document.querySelector(
      ".tree div:nth-of-type(8) div:nth-of-type(7)"
    ); 
    ARRAY_GUIRNALDA[6] = document.querySelector(
      ".tree div:nth-of-type(10) div:nth-of-type(9)"
    ); 
    ARRAY_GUIRNALDA[7] = document.querySelector(
      ".tree div:nth-of-type(11) div:nth-of-type(9)"
    ); 
    ARRAY_GUIRNALDA[8] = document.querySelector(
      ".tree div:nth-of-type(12) div:nth-of-type(8)"
    ); 

    ARRAY_GUIRNALDA[9] = document.querySelector(
      ".tree div:nth-of-type(12) div:nth-of-type(7)"
    ); 
    ARRAY_GUIRNALDA[10] = document.querySelector(
      ".tree div:nth-of-type(13) div:nth-of-type(2)"
    ); 
    ARRAY_GUIRNALDA[11] = document.querySelector(
      ".tree div:nth-of-type(13) div:nth-of-type(6)"
    ); 
    ARRAY_GUIRNALDA[12] = document.querySelector(
      ".tree div:nth-of-type(13) div:nth-of-type(7)"
    ); 
    ARRAY_GUIRNALDA[13] = document.querySelector(
      ".tree div:nth-of-type(14) div:nth-of-type(3)"
    ); 
    ARRAY_GUIRNALDA[14] = document.querySelector(
      ".tree div:nth-of-type(14) div:nth-of-type(4)"
    ); 

    ARRAY_GUIRNALDA[15] = document.querySelector(
      ".tree div:nth-of-type(14) div:nth-of-type(5)"
    ); 
    ARRAY_GUIRNALDA[16] = document.querySelector(
      ".tree div:nth-of-type(15) div:nth-of-type(2)"
    ); 
    ARRAY_GUIRNALDA[17] = document.querySelector(
      ".tree div:nth-of-type(15) div:nth-of-type(15)"
    ); 
    ARRAY_GUIRNALDA[18] = document.querySelector(
      ".tree div:nth-of-type(16) div:nth-of-type(3)"
    ); 
    ARRAY_GUIRNALDA[19] = document.querySelector(
      ".tree div:nth-of-type(16) div:nth-of-type(14)"
    ); 
    ARRAY_GUIRNALDA[20] = document.querySelector(
      ".tree div:nth-of-type(17) div:nth-of-type(5)"
    ); 
    ARRAY_GUIRNALDA[21] = document.querySelector(
      ".tree div:nth-of-type(17) div:nth-of-type(6)"
    ); 
    ARRAY_GUIRNALDA[22] = document.querySelector(
      ".tree div:nth-of-type(17) div:nth-of-type(7)"
    ); 
    ARRAY_GUIRNALDA[23] = document.querySelector(
      ".tree div:nth-of-type(17) div:nth-of-type(13)"
    ); 
    ARRAY_GUIRNALDA[24] = document.querySelector(
      ".tree div:nth-of-type(17) div:nth-of-type(14)"
    ); 
    ARRAY_GUIRNALDA[25] = document.querySelector(
      ".tree div:nth-of-type(18) div:nth-of-type(8)"
    ); 
    ARRAY_GUIRNALDA[26] = document.querySelector(
      ".tree div:nth-of-type(18) div:nth-of-type(9)"
    ); 
    ARRAY_GUIRNALDA[27] = document.querySelector(
      ".tree div:nth-of-type(18) div:nth-of-type(10)"
    ); 
    ARRAY_GUIRNALDA[28] = document.querySelector(
      ".tree div:nth-of-type(18) div:nth-of-type(11)"
    ); 
    ARRAY_GUIRNALDA[29] = document.querySelector(
      ".tree div:nth-of-type(18) div:nth-of-type(12)"
    );
    
    ///////////CAPTURO TODOS LOS ELEMENTOS pots///////////////////////
    divsPots = document.querySelectorAll('.pot');

}); //final de dom