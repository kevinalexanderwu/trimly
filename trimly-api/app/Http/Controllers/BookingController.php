<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Salon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'salon_id' => 'required|exists:salons,id',
            'hairstylist_id' => 'nullable|exists:hairstylists,id',
            'booking_date' => 'required|date',
            'booking_time' => 'required',
            'service_ids' => 'required|array|min:1',
            'service_ids.*' => 'exists:services,id',
        ]);

        $salon = Salon::with('services')->findOrFail(
            $validated['salon_id']
        );

        // Pastikan semua service memang milik salon tersebut
        $services = $salon->services()
            ->whereIn('id', $validated['service_ids'])
            ->get();

        if ($services->count() !== count($validated['service_ids'])) {
            return response()->json([
                'message' => 'One or more services do not belong to this salon.'
            ], 422);
        }

        $totalPrice = $services->sum('price');

        $booking = DB::transaction(function () use (
            $validated,
            $services,
            $totalPrice
        ) {
            $booking = Booking::create([
                'salon_id' => $validated['salon_id'],
                'hairstylist_id' => $validated['hairstylist_id'] ?? null,
                'booking_date' => $validated['booking_date'],
                'booking_time' => $validated['booking_time'],
                'total_price' => $totalPrice,
                'status' => 'upcoming',
            ]);

            foreach ($services as $service) {
                $booking->services()->attach(
                    $service->id,
                    [
                        'price' => $service->price,
                        'duration' => $service->duration,
                    ]
                );
            }

            return $booking;
        });

        $booking->load([
            'salon',
            'hairstylist',
            'services',
        ]);

        return response()->json([
            'message' => 'Booking created successfully.',
            'booking' => $booking,
        ], 201);
    }

    public function index()
    {
        $bookings = Booking::with([
            'salon',
            'hairstylist',
            'services',
            'review',
        ])
        ->latest()
        ->get();

        return response()->json($bookings);
    }

    public function show($id)
    {
        $booking = Booking::with([
            'salon',
            'hairstylist',
            'services',
            'review',
        ])->findOrFail($id);

        return response()->json($booking);
    }

    

    public function cancel($id)
    {
        $booking = Booking::findOrFail($id);

        if ($booking->status !== 'upcoming') {
            return response()->json([
                'message' => 'Only upcoming bookings can be cancelled.'
            ], 422);
        }

        $booking->status = 'cancelled';
        $booking->save();

        return response()->json([
            'message' => 'Booking cancelled successfully.',
            'booking' => $booking,
        ]);
    }

    public function reschedule(Request $request, $id)
    {
        $validated = $request->validate([
            'booking_date' => 'required|date',
            'booking_time' => 'required',
        ]);

        $booking = Booking::findOrFail($id);

        if ($booking->status !== 'upcoming') {
            return response()->json([
                'message' => 'Only upcoming bookings can be rescheduled.'
            ], 422);
        }

        $booking->update([
            'booking_date' => $validated['booking_date'],
            'booking_time' => $validated['booking_time'],
        ]);

        return response()->json([
            'message' => 'Booking rescheduled successfully.',
            'booking' => $booking->load([
                'salon',
                'hairstylist',
                'services',
            ]),
        ]);
    }

    public function complete($id)
    {
        $booking = Booking::findOrFail($id);

        if ($booking->status !== 'upcoming') {
            return response()->json([
                'message' => 'Only upcoming bookings can be completed.'
            ], 422);
        }

        $booking->update([
            'status' => 'completed',
        ]);

        return response()->json([
            'message' => 'Booking completed successfully.',
            'booking' => $booking->load([
                'salon',
                'hairstylist',
                'services',
            ]),
        ]);
    }

    public function review(Request $request, $id)
    {
        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:1000',
        ]);

        $booking = Booking::with([
            'salon',
            'hairstylist',
            'services',
            'review',
        ])->findOrFail($id);

        if ($booking->status !== 'completed') {
            return response()->json([
                'message' => 'Only completed bookings can be reviewed.'
            ], 422);
        }

        if ($booking->review) {
            return response()->json([
                'message' => 'This booking has already been reviewed.'
            ], 422);
        }

        $review = $booking->review()->create([
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