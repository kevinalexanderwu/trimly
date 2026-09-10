<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SalonController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FavoriteController;

Route::get('/salons', [SalonController::class, 'index']);
Route::get('/salons/{id}', [SalonController::class, 'show']);

Route::post('/bookings', [BookingController::class, 'store']);
Route::get('/bookings', [BookingController::class, 'index']);
Route::get('/bookings/{id}', [BookingController::class, 'show']);

Route::patch('/bookings/{id}/cancel', [BookingController::class, 'cancel']);
Route::patch('/bookings/{id}/reschedule', [BookingController::class, 'reschedule']);

Route::patch('/bookings/{id}/complete', [BookingController::class, 'complete']);
Route::post('/bookings/{id}/review', [BookingController::class, 'review']);

Route::post('/reviews', [ReviewController::class, 'store']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::patch('/me', [AuthController::class, 'update']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/favorites', [FavoriteController::class, 'index']);
    Route::post('/favorites', [FavoriteController::class, 'store']);
    Route::delete('/favorites/{salonId}', [FavoriteController::class, 'destroy']);

    
});