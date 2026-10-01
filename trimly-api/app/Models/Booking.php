<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\User;
use App\Models\Hairstylist;

class Booking extends Model
{
    protected $fillable = [
        'user_id',
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
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function staff()
    {
        return $this->belongsToMany(
            Hairstylist::class,
            'booking_staff',
            'booking_id',
            'hairstylist_id'
        )->withPivot('service_category')
        ->withTimestamps();
    }
}