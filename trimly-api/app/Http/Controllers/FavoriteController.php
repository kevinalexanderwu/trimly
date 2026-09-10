<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function index(Request $request)
    {
        $favorites = Favorite::with('salon')
            ->where('user_id', $request->user()->id)
            ->latest()
            ->get();

        return response()->json($favorites);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'salon_id' => 'required|exists:salons,id',
        ]);

        $favorite = Favorite::firstOrCreate([
            'user_id' => $request->user()->id,
            'salon_id' => $validated['salon_id'],
        ]);

        return response()->json([
            'message' => 'Salon added to favorites.',
            'favorite' => $favorite->load('salon'),
        ], 201);
    }

    public function destroy(Request $request, $salonId)
    {
        $favorite = Favorite::where('user_id', $request->user()->id)
            ->where('salon_id', $salonId)
            ->firstOrFail();

        $favorite->delete();

        return response()->json([
            'message' => 'Salon removed from favorites.',
        ]);
    }
}