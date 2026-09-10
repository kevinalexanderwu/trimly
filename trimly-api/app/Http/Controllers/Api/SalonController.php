<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Salon;

class SalonController extends Controller
{
    public function index()
    {
        return response()->json(
            Salon::with(['services', 'hairstylists'])->get()
        );
    }

    public function show($id)
    {
        $salon = Salon::with(['services', 'hairstylists'])
            ->findOrFail($id);

        return response()->json($salon);
    }
}