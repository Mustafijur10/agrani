<?php

use Illuminate\Support\Facades\Route;

Route::get('/health', function () {
    return response()->json([
        'success' => true,
        'app' => 'Agrani API',
        'message' => 'Backend is working!',
    ]);
});