<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partida extends Model
{   
    //enlazamos con el usuario logueado
    protected $fillable = ['user_id', 'puntos', 'fecha'];
    use HasFactory;
}
