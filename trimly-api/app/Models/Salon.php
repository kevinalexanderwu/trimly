<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Salon extends Model
{
    public function services()
    {
        return $this->hasMany(Service::class);
    }

    public function hairstylists()
    {
        return $this->hasMany(Hairstylist::class);
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
