<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Booking extends Model
{
    protected $fillable = [
        'salon_id',
        'hairstylist_id',
        'booking_date',
        'booking_time',
        'total_price',
        'status',
    ];

    protected $casts = [
        'booking_date' => 'date',
        'total_price' => 'decimal:2',
    ];

    public function salon(): BelongsTo
    {
        return $this->belongsTo(Salon::class);
    }

    public function hairstylist(): BelongsTo
    {
        return $this->belongsTo(Hairstylist::class);
    }

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(
            Service::class,
            'booking_services'
        )->withPivot([
            'price',
            'duration',
        ])->withTimestamps();
    }

    public function review()
    {
        return $this->hasOne(Review::class);
    }
}