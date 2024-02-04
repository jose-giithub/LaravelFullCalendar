

//document.addEventListener("DOMContentLoaded", function () {

// Este código va en palabras.js o en un módulo dedicado al manejo del diccionario
let DICCIIONARIO = [];

async function cargarDiccionario() {
    try {
        const response = await fetch('/diccionario/diccionarioCatalan.txt');
        const text = await response.text();
        DICCIIONARIO = text.split('\n').filter(Boolean);
        console.log('Diccionario cargado:', DICCIIONARIO);
    } catch (error) {
        console.error('Error al cargar el diccionario:', error);
    }
}


// Llama a cargarDiccionario al cargar la página


// function cargarDiccionario() {
//     // Ruta al archivo de texto en la carpeta public
//     return fetch('/diccionario/diccionarioCatalan.txt')
//         .then(response => response.text())
//         .then(text => {
//             // Convierte el texto en un array de palabras
//             return text.split('\n');
//         })
//         .catch(error => {
//             console.error('Error al cargar el diccionario:', error);
//             return []; // Devuelve un array vacío en caso de error
//         });
// }
// function iniciarJuego() {
//     // Este código se ejecutará después de que diccionario haya sido cargado y actualizado
//     console.log("Diccionario en iniciarJuego:", diccionario);
//   }

//});