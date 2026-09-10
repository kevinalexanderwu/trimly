<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hairstylists', function (Blueprint $table) {
            $table->id();

            $table->foreignId('salon_id')
                ->constrained('salons')
                ->cascadeOnDelete();

            $table->string('name');
            $table->string('specialty');
            $table->decimal('rating', 2, 1)->default(0);
            $table->integer('reviews')->default(0);
            $table->string('experience');
            $table->string('image')->nullable();
            $table->text('bio')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hairstylists');
    }
};
