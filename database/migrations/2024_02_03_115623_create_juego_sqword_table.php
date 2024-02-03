<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Crear la estructura de la bd para SQword
     */
    public function up(): void
    {
        Schema::create('juegoSqword', function (Blueprint $table) {
            $table->id();
            $table->integer('puntos'); // Para almacenar los puntos
            $table->dateTime('fecha'); // Para almacenar la fecha y hora del juego
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('juegoSqword');
    }
};
