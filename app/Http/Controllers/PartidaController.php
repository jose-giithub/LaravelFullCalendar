<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Partida;

use Illuminate\Support\Facades\Auth;

class PartidaController extends Controller
{
    public function guardarPartida(Request $request)
    {
        $request->validate(['puntos' => 'required|integer']);
        
        $partida = Partida::create([
            'user_id' => Auth::id(),
            'puntos' => $request->puntos,
            'fecha' => now(),
        ]);

        return response()->json(['success' => 'Partida guardada correctamente.']);
    }

    public function partidasUsuario(Request $request)
    {
        $user = Auth::user();
        $partidas = $user->partidas()->orderBy('fecha', 'desc')->get(['fecha', 'puntos']);

        return response()->json($partidas);
    }
}

