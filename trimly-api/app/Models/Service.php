<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Service extends Model
{
    protected $fillable = [
        'salon_id',
        'name',
        'price',
        'duration',
        'popular',
    ];

    protected $casts = [
        'price' => 'integer',
        'popular' => 'boolean',
    ];

    public function salon(): BelongsTo
    {
        return $this->belongsTo(Salon::class);
    }

    public function bookings()
    {
        return $this->belongsToMany(
            Booking::class,
            'booking_services'
        )->withPivot([
            'price',
            'duration',
        ])->withTimestamps();
    }
}