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
        Schema::create('salons', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('area');
            $table->string('address');
            $table->string('city');

            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();

            $table->decimal('rating', 2, 1)->default(0);
            $table->integer('reviews')->default(0);

            $table->integer('starting_price')->default(0);

            $table->string('image')->nullable();
            $table->string('tag')->nullable();

            $table->text('description')->nullable();

            $table->time('opening_hour')->default('09:00');
            $table->time('closing_hour')->default('20:00');

            $table->boolean('is_open')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('salons');
    }
};
