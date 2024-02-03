<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth; // Importa Auth si necesitas obtener el usuario autenticado
use App\Models\Partida;//INPORTO EL MODELO Partida
use Illuminate\Http\Request;
// use App\Models\Models\JuegoSqword; // Asegúrate de tener el modelo JuegoSqword *****CREO QUE HAY QUE BORRAR



class JuegoSqwordController extends Controller
{
    public function guardarPartida(Request $request)
    {
        // Asegúrate de validar los datos entrantes
        $request->validate([
            'puntos' => 'required|integer',
            // 'fecha' => 'required|date', // Si decides enviar la fecha desde el cliente
        ]);
        // Crea una nueva partida asociada al usuario actual
        $partida = new Partida();
        $partida->puntos = $request->puntos;
        $partida->fecha = now(); // O usa $request->fecha si la envías desde el cliente
        $partida->user_id = Auth::id(); // Obtiene el ID del usuario autenticado
        $partida->save();
        return response()->json(['success' => true, 'message' => 'Partida guardada correctamente.']);
       // return response()->json(['success' => true]);
    }
}
