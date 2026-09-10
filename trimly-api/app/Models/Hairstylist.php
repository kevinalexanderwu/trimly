<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Hairstylist extends Model
{
    protected $fillable = [
        'salon_id',
        'name',
        'specialty',
        'rating',
        'reviews',
        'experience',
        'image',
        'bio',
    ];

    protected $casts = [
        'rating' => 'float',
        'reviews' => 'integer',
    ];

    public function salon(): BelongsTo
    {
        return $this->belongsTo(Salon::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}