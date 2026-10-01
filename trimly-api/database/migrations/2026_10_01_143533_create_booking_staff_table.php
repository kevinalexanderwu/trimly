<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('booking_staff', function (Blueprint $table) {
            $table->id();

            $table->foreignId('booking_id')
                ->constrained('bookings')
                ->cascadeOnDelete();

            $table->foreignId('hairstylist_id')
                ->constrained('hairstylists')
                ->cascadeOnDelete();

            $table->string('service_category', 50);

            $table->timestamps();

            $table->unique([
                'booking_id',
                'hairstylist_id',
                'service_category',
            ]);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('booking_staff');
    }
};