<?php

namespace Database\Seeders;

use App\Models\Salon;
use Illuminate\Database\Seeder;

class SalonSeeder extends Seeder
{
    public function run(): void
    {
        $salons = [
            [
                'name' => 'Seven the Salon',
                'area' => 'Bandung Wetan',
                'address' => 'Jl. Jawa No.3, Babakanciamis, Sumurbandung',
                'city' => 'Bandung',
                'rating' => 4.9,
                'reviews' => 1032,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
                'description' => 'Premium beauty salon in central Bandung offering hair and beauty services.',
                'is_open' => true,
            ],

            [
                'name' => 'Brocode Barbershop',
                'area' => 'Coblong',
                'address' => 'Jl. Pager Gunung No.13, Lebak Gede, Coblong',
                'city' => 'Bandung',
                'rating' => 4.8,
                'reviews' => 2142,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800',
                'description' => 'Barbershop in the Lebak Gede area of Bandung.',
                'is_open' => true,
            ],

            [
                'name' => 'Amaya Beauty & Wellness Salon',
                'area' => 'Bandung Wetan',
                'address' => 'Jl. Cihapit No.27, Cihapit, Bandung Wetan',
                'city' => 'Bandung',
                'rating' => 4.8,
                'reviews' => 1067,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800',
                'description' => 'Beauty and wellness salon offering hair care, body treatments and facial services.',
                'is_open' => true,
            ],

            [
                'name' => 'Golden Barbershop',
                'area' => 'Coblong',
                'address' => 'Jl. Dipati Ukur, Lebakgede, Coblong',
                'city' => 'Bandung',
                'rating' => 4.9,
                'reviews' => 3316,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800',
                'description' => 'Popular barbershop located in the Dipati Ukur area.',
                'is_open' => true,
            ],

            [
                'name' => 'La Maison Salon Bandung',
                'area' => 'Sukajadi',
                'address' => 'Jl. Dr. Setiabudi No.49, Pasteur, Sukajadi',
                'city' => 'Bandung',
                'rating' => 4.9,
                'reviews' => 341,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
                'description' => 'Beauty salon located on Jalan Dr. Setiabudi.',
                'is_open' => true,
            ],

            [
                'name' => 'The Cut Rumah Barber',
                'area' => 'Bandung Wetan',
                'address' => 'Jl. Lombok No.30A, Cihapit, Bandung Wetan',
                'city' => 'Bandung',
                'rating' => 4.7,
                'reviews' => 1185,
            'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1599351431202-1e0f0c7c6a2b?w=800',
                'description' => 'Professional barber offering haircut, styling, coloring and hair treatments.',
                'is_open' => true,
            ],

            [
                'name' => 'Seven the Salon SG',
                'area' => 'Sukasari',
                'address' => 'Jl. Sirnagalih No.22, Cipedes, Sukasari',
                'city' => 'Bandung',
                'rating' => 4.9,
                'reviews' => 461,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800',
                'description' => 'Kerastase salon in the Sukasari area of Bandung.',
                'is_open' => true,
            ],

            [
                'name' => 'Captain Barbershop Bandung Cihampelas',
                'area' => 'Bandung Wetan',
                'address' => 'Jl. Cihampelas No.48A, Tamansari, Bandung Wetan',
                'city' => 'Bandung',
                'rating' => 4.9,
                'reviews' => 2215,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1599351431618-0c8e4a6e9d8a?w=800',
                'description' => 'Barbershop located on Jalan Cihampelas.',
                'is_open' => true,
            ],

            [
                'name' => 'Lexzi Salon',
                'area' => 'Bandung Wetan',
                'address' => 'Jl. Bengawan No.37, Cihapit, Bandung Wetan',
                'city' => 'Bandung',
                'rating' => 4.5,
                'reviews' => 697,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
                'description' => 'Beauty salon in the Cihapit area.',
                'is_open' => true,
            ],

            [
                'name' => "Roger's Salon Dago",
                'area' => 'Coblong',
                'address' => 'Jl. Ir. H. Juanda No.97, Dago, Coblong',
                'city' => 'Bandung',
                'rating' => 4.4,
                'reviews' => 367,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800',
                'description' => 'Salon offering hair, spa, beauty and wellness services.',
                'is_open' => true,
            ],

            [
                'name' => 'CUKUR HADE BARBERSHOP - LENGKONG KECIL',
                'area' => 'Lengkong',
                'address' => 'Jl. Lengkong Kecil No.30A, Paledang, Lengkong',
                'city' => 'Bandung',
                'rating' => 5.0,
                'reviews' => 2005,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1622288432450-277d0fef5ed0?w=800',
                'description' => 'Barbershop in the Lengkong Kecil area.',
                'is_open' => true,
            ],

            [
                'name' => 'Hairzonestyle Bandung',
                'area' => 'Bojongloa Kidul',
                'address' => 'Jl. Leuwi Panjang No.15A, Muara Regency, Bojongloa Kidul',
                'city' => 'Bandung',
                'rating' => 5.0,
                'reviews' => 2579,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
                'description' => 'Beauty salon located in the Bojongloa Kidul area.',
                'is_open' => true,
            ],

            [
                'name' => 'Salon Smooch Beauty Bar Bandung',
                'area' => 'Lengkong',
                'address' => 'Jl. Gatot Subroto No.28 Lt.1, Malabar, Lengkong',
                'city' => 'Bandung',
                'rating' => 4.9,
                'reviews' => 112,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800',
                'description' => 'Beauty salon located on Jalan Gatot Subroto.',
                'is_open' => true,
            ],

            [
                'name' => 'Barberkiehl Boutique Barbershop',
                'area' => 'Sukasari',
                'address' => 'Jl. Sukahaji No.121, Sukarasa, Sukasari',
                'city' => 'Bandung',
                'rating' => 4.6,
                'reviews' => 341,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800',
                'description' => 'Boutique barbershop in the Sukasari area.',
                'is_open' => true,
            ],

            [
                'name' => 'Yucca Salon',
                'area' => 'Sumurbandung',
                'address' => 'Ruko Segitiga Emas, Jl. Gandapura, Merdeka, Sumurbandung',
                'city' => 'Bandung',
                'rating' => 4.8,
                'reviews' => 572,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
                'description' => 'Beauty salon in the Gandapura area.',
                'is_open' => true,
            ],

            [
                'name' => 'Sunshine Beauty Dago',
                'area' => 'Coblong',
                'address' => 'Lima Building, Jl. Dago No.169B Lantai 1, Lebak Siliwangi',
                'city' => 'Bandung',
                'rating' => 4.7,
                'reviews' => 101,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
                'description' => 'Beauty salon located in the Dago area.',
                'is_open' => true,
            ],

            [
                'name' => 'Hamima Salon Muslimah Dago',
                'area' => 'Coblong',
                'address' => 'Jl. Tubagus Ismail No.5F, Sekeloa, Coblong',
                'city' => 'Bandung',
                'rating' => 5.0,
                'reviews' => 656,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
                'description' => 'Women-focused beauty salon in the Dago area.',
                'is_open' => true,
            ],

            [
                'name' => 'Salon 808 Hair & Beauty Bandung',
                'area' => 'Batununggal',
                'address' => 'Jl. Batununggal Indah Raya No.194, Batununggal',
                'city' => 'Bandung',
                'rating' => 4.9,
                'reviews' => 291,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
                'description' => 'Hair and beauty salon in Batununggal.',
                'is_open' => true,
            ],

            [
                'name' => 'Princess Beauty Salon',
                'area' => 'Bojongloa Kaler',
                'address' => 'Jl. Terusan Pasirkoja No.168, Babakan Tarogong',
                'city' => 'Bandung',
                'rating' => 4.8,
                'reviews' => 363,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800',
                'description' => 'Beauty salon in the Bojongloa Kaler area.',
                'is_open' => true,
            ],

            [
                'name' => 'Captain Barbershop Sumantri',
                'area' => 'Sukajadi',
                'address' => 'Jl. Prof. drg. Soeria Soemantri No.67-87, Sukawarna, Sukajadi',
                'city' => 'Bandung',
                'rating' => 4.9,
                'reviews' => 1371,
                'starting_price' => 0,
                'image' => 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800',
                'description' => 'Captain Barbershop branch in the Sukajadi area.',
                'is_open' => true,
            ],
        ];

        foreach ($salons as $salon) {
            Salon::create($salon);
        }
    }
}