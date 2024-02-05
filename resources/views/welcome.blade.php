<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <link
      href="https://cdn.jsdcsrf_token()elivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="CSSwelcome/style.css">
    <title>Laravel proyecto M12</title>
  </head>
  <body>
    <style>
     

    </style>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!-- Contenedor fluido para la barra de navegación, se usa para un ancho completo -->
      <div class="container-fluid">
        <!-- Marca o título de la barra de navegación, generalmente contiene el nombre o logo de la página -->
        <a class="navbar-brand" href="#"></a>
        <!-- Botón que se muestra para pantallas pequeñas, activa la navegación colapsable -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- Icono del botón que se muestra en pantallas pequeñas (icono de hamburguesa) -->
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Contenido colapsable de la barra de navegación que se muestra al hacer clic en el botón de navegación -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <!-- Lista de elementos de navegación -->
          <ul class="navbar-nav">
            <!-- Elemento de navegación individual, activo indica la página actual -->
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" >Entrar con tu usuario aquí</a> 
            </li>
            <!-- Otro elemento de navegación -->
            <li id="botonEntrar"  class="nav-item bg-primary">
              <!-- <a id="hrefEntrar" class="nav-link" href="welcome.html"></a> -->
              <a id="hrefEntrar" class="nav-link" class="nav-link active" aria-current="page" href="{{ route('login') }}">{{ __('Proyecto Jose') }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="container-fluid p-3 my-3 bg-primary text-center text-white">
        <h1>Proyecto Jose</h1>
      </header>
      
     <!-- Contenedor principal fluido que se adapta al 100% del espacio disponible de su contenedor padre -->
<div class="container-fluid">
       <!-- Segunda fila para las imágenes -->
    <div class="row justify-content-center">
         <!-- Columna 1 con flexbox para alinear centrado tanto horizontal como verticalmente la primera imagen -->
         <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
        <!-- Imagen que se ajustará cubriendo todo el espacio asignado, posiblemente recortando contenido -->
          <img src="img/ahoracado.png" alt="" class="image-fit">  
        </div>
        
        <!-- Columna 2 con flexbox para alinear centrado tanto horizontal como verticalmente la segunda imagen -->
        <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
            <!-- Imagen que se ajustará cubriendo todo el espacio asignado, posiblemente recortando contenido -->
            <img src="img/arbol.png" alt="" class="image-fit">
        </div>
        <!-- 3 -->
        <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
            <!-- Imagen que se ajustará cubriendo todo el espacio asignado, posiblemente recortando contenido -->
            <img src="img/animacion.png" alt="" class="image-fit">
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <!-- Columna que ocupa la mitad del espacio disponible para el título de la primera imagen tiene la propiedad de centrar el texto-->
    <div class="col-lg-4 col-md-6 col-12 text-center">
      <button class="btn btn-primary">
                    <a href="ahorcado/index.html">Jugar al ahorcado</a>
                    <!-- <a href="{{ route('register') }}">{{ __('Jugar al ahorcado') }}</a> -->
                </button>
            </div>
    <!-- Columna que ocupa la mitad del espacio disponible para el título de la segunda imagen tiene la propiedad de centrar el texto-->
       
    <div class="col-lg-4 col-md-6 col-12 text-center">
      <button class="btn btn-primary">
                     <a href="arbol/index.html">Árbol de navidad</a>
            <!-- <a href="{{ route('register') }}">{{ __('Árbol de navidad') }}</a> -->
                 </button>
            </div>
            <!-- Col 3 -->
         
            <div class="col-lg-4 col-md-6 col-12 text-center">
              <button class="btn btn-primary">
                     <a href="animacionCSS/index.html">Animación css</a>
            <!-- <a href="{{ route('register') }}">{{ __('Animación css') }}</a> -->
                 </button>
            </div>
        </div>
        <!-- fil img 3-->
        <div class="row justify-content-center">
     <!-- Columna 1 con flexbox para alinear centrado tanto horizontal como verticalmente la primera imagen -->
     <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
    <!-- Imagen que se ajustará cubriendo todo el espacio asignado, posiblemente recortando contenido -->
        <img src="img/sqword.png" alt="" class="image-fit">
            </div>
    <!-- Columna 2 con flexbox para alinear centrado tanto horizontal como verticalmente la segunda imagen -->
    <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
                <!-- Imagen que se ajustará cubriendo todo el espacio asignado, posiblemente recortando contenido -->
                <img src="img/porfolio.png" alt="" class="image-fit">
            </div>
            <!-- 3 -->
            <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center">
                <!-- Imagen que se ajustará cubriendo todo el espacio asignado, posiblemente recortando contenido -->
                <img src="img/logoJava.png" alt="" class="image-fit">
            </div>
        </div>
    </div>

               <!--  fil Botones 4 -->
              <div class="row justify-content-center">
                <!-- Columna que ocupa la mitad del espacio disponible para el título de la primera imagen tiene la propiedad de centrar el texto-->
                <div class="col-lg-4 col-md-6 col-12 text-center">
                    <button class="btn btn-primary">
                    <a href="{{ route('login') }}">{{ __('Jugar SQword') }}</a>
                        <!-- <a href="{{ route('register') }}">{{ __('Jugar SQword') }}</a> -->
                    </button>
                </div>
               <!-- Columna que ocupa la mitad del espacio disponible para el título de la segunda imagen tiene la propiedad de centrar el texto-->
               <div class="col-lg-4 col-md-6 col-12 text-center">
                     <button class="btn btn-primary">
                        <a href="#" >{{ __('Mi porfolio') }}</a>
                        <!-- <a href="{{ route('register') }}">{{ __('Jugar SQword') }}</a> -->
                    </button>
                </div>
                <!-- Col 3 -->
                <div class="col-lg-4 col-md-6 col-12 text-center">
                    <button class="btn btn-primary">
                         <a href="https://github.com/jose-giithub/Proyecte_UF3_laberinto" style="text-decoration: none; color: inherit;">Ver código Java</a>
                <!-- <a href="{{ route('register') }}">{{ __('Registrarse') }}</a> -->
                     </button>
                </div>
               </div>
    </div>
    
  
  </body>
</html>
