<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    protected $fillable = [
        'booking_id',
        'salon_id',
        'hairstylist_id',
        'rating',
        'comment',
    ];

    public function booking(): BelongsTo
    {
        return $this->belongsTo(Booking::class);
    }

    public function salon(): BelongsTo
    {
        return $this->belongsTo(Salon::class);
    }

    public function hairstylist(): BelongsTo
    {
        return $this->belongsTo(Hairstylist::class);
    }
}