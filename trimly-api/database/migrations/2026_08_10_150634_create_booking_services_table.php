<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('booking_services', function (Blueprint $table) {
            $table->id();

            $table->foreignId('booking_id')
                ->constrained('bookings')
                ->cascadeOnDelete();

            $table->foreignId('service_id')
                ->constrained('services')
                ->cascadeOnDelete();

            // Simpan harga saat booking dibuat
            $table->decimal('price', 12, 2);

            // Simpan durasi saat booking dibuat
            $table->string('duration');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('booking_services');
    }
};