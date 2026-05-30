<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShoeController;
Route::resource('shoes', ShoeController::class);
Route::get('/', [ShoeController::class, 'index']);
// Route::get('/', function () {
//     return view('shoes.index');
// });

// Route::get('/home', function () {
//     return view('shoes.index');
// });