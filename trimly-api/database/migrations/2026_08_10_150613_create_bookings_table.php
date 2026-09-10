<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();

            $table->foreignId('salon_id')
                ->constrained('salons')
                ->cascadeOnDelete();

            $table->foreignId('hairstylist_id')
                ->nullable()
                ->constrained('hairstylists')
                ->nullOnDelete();

            $table->date('booking_date');
            $table->time('booking_time');

            $table->decimal('total_price', 12, 2);

            $table->string('status')->default('upcoming');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};