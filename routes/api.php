<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JuegoSqwordController;//ruta del controlador
use App\Http\Controllers\PartidaController;//ruta del controlador

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//ruta por post. middleware('auth:sanctum') para asegurar que solo los usuarios autenticados puedan enviar datos.
// Route::post('/guardar-partida', [PartidaController::class, 'guardarPartida'])->middleware('auth:sanctum');

//Route::post('/guardar-puntos', [JuegoSqwordController::class, 'guardarPuntos']);