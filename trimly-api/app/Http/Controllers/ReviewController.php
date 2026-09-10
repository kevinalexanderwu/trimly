<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'booking_id' => 'required|exists:bookings,id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string',
        ]);

        $booking = Booking::with([
            'salon',
            'hairstylist',
        ])->findOrFail($validated['booking_id']);

        if ($booking->status !== 'completed') {
            return response()->json([
                'message' => 'Only completed bookings can be reviewed.'
            ], 422);
        }

        if ($booking->review()->exists()) {
            return response()->json([
                'message' => 'This booking has already been reviewed.'
            ], 422);
        }

        $review = Review::create([
            'booking_id' => $booking->id,
            'salon_id' => $booking->salon_id,
            'hairstylist_id' => $booking->hairstylist_id,
            'rating' => $validated['rating'],
            'comment' => $validated['comment'] ?? null,
        ]);

        return response()->json([
            'message' => 'Review submitted successfully.',
            'review' => $review,
        ], 201);
    }
}