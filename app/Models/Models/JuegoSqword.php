<?php

namespace App\Models\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//modelo para subir la fecha y los puntos a la BD
class JuegoSqword extends Model
{
    protected $table = 'juegoSqword' ; // Nombre de la tabla en la base de datos --> juegosqword
    
    protected $fillable = [
        'puntos', // Asegúrate de que estos campos coincidan con los de tu migración
        'fecha',
    ];
    // use HasFactory; // no se que es no lo borro
}
