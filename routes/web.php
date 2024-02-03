<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;


Route::get('/', function () {//modifico la pagina de inicio
    return redirect()->route('login');
});


// Parte de GOOGLE
Route::get('/google-auth/redirect', function () {
    return Socialite::driver('google')->redirect();
});

Route::get('/google-auth/callback', function () {
    $user_google = Socialite::driver('google')->user();  
    $existingUser = User::where('email', $user_google->email)->first();
    if ($existingUser) {
        // El usuario ya existe, puedes iniciar sesión con él
        Auth::login($existingUser);
        return redirect('/dashboard');
    }
    // El usuario no existe, así que lo creamos
    $user = User::create([
        'name' => $user_google->name,
        'email' => $user_google->email,
        'password' => bcrypt(Str::random(12)),
    ]);
    // Luego, iniciamos sesión con el nuevo usuario
    Auth::login($user);
    return redirect('/dashboard');
});

// parte Github
Route::get('/github-auth/redirect', function () {
    return Socialite::driver('github')->redirect();
});
Route::get('/github-auth/callback', function () {
    $user_github = Socialite::driver('github')->user();
    $existingUser = User::where('email', $user_github->email)->first();
    if ($existingUser) {
        // El usuario ya existe, puedes iniciar sesión con él
        Auth::login($existingUser);
        return redirect('/dashboard');
    }
    // El usuario no existe, así que lo creamos
    $user = User::create([
        'name' => $user_github->name,
        'email' => $user_github->email,
        'password' => bcrypt(Str::random(12)),
    ]); 
    // Luego, iniciamos sesión con el nuevo usuario
    Auth::login($user);
    return redirect('/dashboard');
});


//iniciar sesion y la vista iniciar desde el login
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

    
    Route::get('/sqword', function () {return view('profile.sqword');});//ruta sqword
    Route::get('/event/index', [EventController::class, 'index'])->name('calendar');
    Route::post('/event/store', [EventController::class, 'store'])->name('event.store');
    Route::put('/event/update/{id}', [EventController::class, 'update'])->name('event.update');
    Route::delete('/event/destroy/{id}', [EventController::class, 'destroy'])->name('event.destroy');
});
