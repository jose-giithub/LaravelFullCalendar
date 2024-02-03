<!DOCTYPE html>
<html lang="es">
 <!-- repositorio git
      https://github.com/jose-giithub/DevChalleng_SQWORD  
      juego original
      https://www.sqword.com/-->
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="csrf-token" content="{{ csrf_token() }}"> <!-- Aquí va el token CSRF -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
<!-- llamamos a los archivos js y css que estan en public\jsSqword y public\cssSqword -->
  <link href="{{ asset('cssSqword/estilos.css') }}" rel="stylesheet">
  <script src="{{ asset('jsSqword/funciones.js') }}"></script>
  <script src="{{ asset('jsSqword/main.js') }}"></script>
  <script src="{{ asset('jsSqword/palabras.js') }}"></script>
  <title>Juego Sqword</title>
</head>


<body>
  <header class="titulo">
    <a href="{{ route('dashboard') }}" class="btn btn-success">{{ __('Dashboard') }}</a>
    <h1 class="text-center">SQWORD</h1>
  </header>

  <!-- Div que suaremos para cuando salgan los resultados ocultarlo todo -->
  <div id="ocultar">
    <div class="message-container">
      <h2>Següent paraula:</h2>
    </div>

    <!-- Donde se muestra la letra random -->
    <div id="contenedorLetraRandom">
      <div id="mostarLetraRandom"></div>
    </div>

    <div class="container my-5" id="contenedorJoker" style="display: none">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card-custom text-center">
            <h2>Joker</h2>
            <p>Introdueix una lletra.</p>
            <input type="text" class="form-control input-custom" id="inputJoker" maxlength="1" />
          </div>
        </div>
      </div>
    </div>

    <!-- Cuadricula dinámica con js -->
    <main class="container" id="contenedor"></main>


    <!-- Botón de Instrucciones -->
    <button id="mostarInstrucciones">Instruccions</button>

    <!-- Pop-up de Instrucciones -->

    <div class="popup" id="instructionsPopup">
      <strong>
        <h4>Com es juga a Sqword:</h4>
      </strong>
      <strong>
        <p>Col·loqueu les targetes amb lletres dibuixades a la quadrícula per formar tantes paraules de 3, 4 i 5 lletres
          com
          pugueu. Les paraules es poden formar tant horitzontalment
          (d'esquerra a dreta) com verticalment (de dalt a baix). Un cop col·locada una lletra,
          no es pot moure.
          Un cop col·locada la lletra final, el tauler es puntuarà. Cada paraula es puntua segons la seva longitud (és a
          dir, una paraula
          de 4 lletres val 4 punts).</p>
      </strong>
      <!-- Agrega más contenido de instrucciones aquí -->
      <button id="cerrarInstrucciones">Tancar</button>
    </div>
  </div>

  <!-- Mostramos las palabras acertadas una vez se acaba de escrivir-->
  <div id="divPalabrasAcertadas">
    <!-- <strong>Palabras hacertada</strong>  crear desde el css-->
    <p id="palabrasAcertadas"></p>
  </div>

  <!-- Mostrar resultados con la hora -->
  <div id="divPuntuacion" class="container-fluid custom-width"
    style="background-color: rgb(196, 188, 188); border-radius: 10px; display: none;">
    <div class="row justify-content-center">
      <!-- Columna de Fecha -->
      <div class="col-md-6 text-center">
        <strong>Fecha:</strong>
        <p id="Fecha"></p>
      </div>
      <!-- Columna de Puntuación -->
      <div class="col-md-6 text-center">
        <strong>Puntuación:</strong>
        <p id="textoPuntos"></p>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
</body>

</html>