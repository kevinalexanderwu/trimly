<?php

namespace Database\Seeders;

use App\Models\Salon;
use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            // Seven the Salon
            [
                'salon' => 'Seven the Salon',
                'services' => [
                    ['name' => 'Haircut', 'price' => 100000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 250000, 'duration' => '120 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 150000, 'duration' => '90 min', 'popular' => false],
                    ['name' => 'Hair Styling', 'price' => 100000, 'duration' => '60 min', 'popular' => false],
                    ['name' => 'Hair Spa', 'price' => 175000, 'duration' => '90 min', 'popular' => false],
                ],
            ],

            // Brocode Barbershop
            [
                'salon' => 'Brocode Barbershop',
                'services' => [
                    ['name' => 'Classic Haircut', 'price' => 50000, 'duration' => '45 min', 'popular' => true],
                    ['name' => 'Fade', 'price' => 65000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Styling', 'price' => 55000, 'duration' => '45 min', 'popular' => false],
                    ['name' => 'Beard Trim', 'price' => 40000, 'duration' => '30 min', 'popular' => false],
                    ['name' => 'Hair & Beard', 'price' => 90000, 'duration' => '75 min', 'popular' => false],
                ],
            ],

            // Amaya Beauty & Wellness Salon
            [
                'salon' => 'Amaya Beauty & Wellness Salon',
                'services' => [
                    ['name' => 'Haircut', 'price' => 85000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 300000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Creambath', 'price' => 120000, 'duration' => '75 min', 'popular' => false],
                    ['name' => 'Hair Treatment', 'price' => 150000, 'duration' => '90 min', 'popular' => true],
                    ['name' => 'Hair Styling', 'price' => 90000, 'duration' => '60 min', 'popular' => false],
                ],
            ],

            // Golden Barbershop
            [
                'salon' => 'Golden Barbershop',
                'services' => [
                    ['name' => 'Classic Haircut', 'price' => 50000, 'duration' => '45 min', 'popular' => true],
                    ['name' => 'Skin Fade', 'price' => 65000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Taper Cut', 'price' => 60000, 'duration' => '50 min', 'popular' => false],
                    ['name' => 'Beard Trim', 'price' => 40000, 'duration' => '30 min', 'popular' => false],
                    ['name' => 'Hair & Beard Combo', 'price' => 90000, 'duration' => '75 min', 'popular' => false],
                ],
            ],

            // La Maison Salon Bandung
            [
                'salon' => 'La Maison Salon Bandung',
                'services' => [
                    ['name' => 'Haircut', 'price' => 90000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 275000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 150000, 'duration' => '90 min', 'popular' => true],
                    ['name' => 'Blow Styling', 'price' => 80000, 'duration' => '45 min', 'popular' => false],
                    ['name' => 'Hair Spa', 'price' => 175000, 'duration' => '90 min', 'popular' => false],
                ],
            ],

            // The Cut Rumah Barber
            [
                'salon' => 'The Cut Rumah Barber',
                'services' => [
                    ['name' => 'Classic Haircut', 'price' => 50000, 'duration' => '45 min', 'popular' => true],
                    ['name' => 'Fade Cut', 'price' => 65000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 150000, 'duration' => '120 min', 'popular' => false],
                    ['name' => 'Hair Treatment', 'price' => 100000, 'duration' => '75 min', 'popular' => false],
                    ['name' => 'Beard Trim', 'price' => 40000, 'duration' => '30 min', 'popular' => false],
                ],
            ],

            // Seven the Salon SG
            [
                'salon' => 'Seven the Salon SG',
                'services' => [
                    ['name' => 'Haircut', 'price' => 100000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 250000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 150000, 'duration' => '90 min', 'popular' => true],
                    ['name' => 'Hair Styling', 'price' => 100000, 'duration' => '60 min', 'popular' => false],
                ],
            ],

            // Captain Barbershop Bandung Cihampelas
            [
                'salon' => 'Captain Barbershop Bandung Cihampelas',
                'services' => [
                    ['name' => 'Classic Haircut', 'price' => 50000, 'duration' => '45 min', 'popular' => true],
                    ['name' => 'Skin Fade', 'price' => 65000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Taper', 'price' => 60000, 'duration' => '50 min', 'popular' => false],
                    ['name' => 'Beard Trim', 'price' => 40000, 'duration' => '30 min', 'popular' => false],
                ],
            ],

            // Lexzi Salon
            [
                'salon' => 'Lexzi Salon',
                'services' => [
                    ['name' => 'Haircut', 'price' => 80000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 250000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 130000, 'duration' => '90 min', 'popular' => false],
                    ['name' => 'Hair Styling', 'price' => 85000, 'duration' => '60 min', 'popular' => false],
                ],
            ],

            // Roger's Salon Dago
            [
                'salon' => "Roger's Salon Dago",
                'services' => [
                    ['name' => 'Haircut', 'price' => 100000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 300000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 175000, 'duration' => '90 min', 'popular' => true],
                    ['name' => 'Hair Styling', 'price' => 100000, 'duration' => '60 min', 'popular' => false],
                    ['name' => 'Hair Spa', 'price' => 175000, 'duration' => '90 min', 'popular' => false],
                ],
            ],

            // CUKUR HADE
            [
                'salon' => 'CUKUR HADE BARBERSHOP - LENGKONG KECIL',
                'services' => [
                    ['name' => 'Classic Haircut', 'price' => 40000, 'duration' => '40 min', 'popular' => true],
                    ['name' => 'Fade', 'price' => 55000, 'duration' => '50 min', 'popular' => true],
                    ['name' => 'Taper', 'price' => 50000, 'duration' => '45 min', 'popular' => false],
                    ['name' => 'Beard Trim', 'price' => 35000, 'duration' => '30 min', 'popular' => false],
                ],
            ],

            // Hairzonestyle
            [
                'salon' => 'Hairzonestyle Bandung',
                'services' => [
                    ['name' => 'Haircut', 'price' => 75000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 250000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 125000, 'duration' => '90 min', 'popular' => true],
                    ['name' => 'Hair Styling', 'price' => 75000, 'duration' => '60 min', 'popular' => false],
                ],
            ],

            // Salon Smooch
            [
                'salon' => 'Salon Smooch Beauty Bar Bandung',
                'services' => [
                    ['name' => 'Haircut', 'price' => 85000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 275000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 150000, 'duration' => '90 min', 'popular' => true],
                    ['name' => 'Hair Styling', 'price' => 90000, 'duration' => '60 min', 'popular' => false],
                ],
            ],

            // Barberkiehl
            [
                'salon' => 'Barberkiehl Boutique Barbershop',
                'services' => [
                    ['name' => 'Classic Haircut', 'price' => 55000, 'duration' => '45 min', 'popular' => true],
                    ['name' => 'Fade', 'price' => 70000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Taper', 'price' => 65000, 'duration' => '50 min', 'popular' => false],
                    ['name' => 'Beard Trim', 'price' => 40000, 'duration' => '30 min', 'popular' => false],
                ],
            ],

            // Yucca Salon
            [
                'salon' => 'Yucca Salon',
                'services' => [
                    ['name' => 'Haircut', 'price' => 85000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 250000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 130000, 'duration' => '90 min', 'popular' => true],
                    ['name' => 'Hair Styling', 'price' => 85000, 'duration' => '60 min', 'popular' => false],
                ],
            ],

            // Sunshine Beauty
            [
                'salon' => 'Sunshine Beauty Dago',
                'services' => [
                    ['name' => 'Haircut', 'price' => 80000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 250000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 125000, 'duration' => '90 min', 'popular' => false],
                    ['name' => 'Hair Styling', 'price' => 80000, 'duration' => '60 min', 'popular' => false],
                ],
            ],

            // Hamima
            [
                'salon' => 'Hamima Salon Muslimah Dago',
                'services' => [
                    ['name' => 'Haircut', 'price' => 75000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 250000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Creambath', 'price' => 100000, 'duration' => '75 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 125000, 'duration' => '90 min', 'popular' => false],
                ],
            ],

            // Salon 808
            [
                'salon' => 'Salon 808 Hair & Beauty Bandung',
                'services' => [
                    ['name' => 'Haircut', 'price' => 80000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 250000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 125000, 'duration' => '90 min', 'popular' => true],
                    ['name' => 'Hair Styling', 'price' => 80000, 'duration' => '60 min', 'popular' => false],
                ],
            ],

            // Princess Beauty
            [
                'salon' => 'Princess Beauty Salon',
                'services' => [
                    ['name' => 'Haircut', 'price' => 75000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Hair Coloring', 'price' => 225000, 'duration' => '150 min', 'popular' => true],
                    ['name' => 'Hair Treatment', 'price' => 120000, 'duration' => '90 min', 'popular' => false],
                    ['name' => 'Hair Styling', 'price' => 75000, 'duration' => '60 min', 'popular' => false],
                ],
            ],

            // Captain Sumantri
            [
                'salon' => 'Captain Barbershop Sumantri',
                'services' => [
                    ['name' => 'Classic Haircut', 'price' => 50000, 'duration' => '45 min', 'popular' => true],
                    ['name' => 'Skin Fade', 'price' => 65000, 'duration' => '60 min', 'popular' => true],
                    ['name' => 'Taper', 'price' => 60000, 'duration' => '50 min', 'popular' => false],
                    ['name' => 'Beard Trim', 'price' => 40000, 'duration' => '30 min', 'popular' => false],
                ],
            ],
        ];

        foreach ($services as $item) {
            $salon = Salon::where('name', $item['salon'])->first();

            if (!$salon) {
                continue;
            }

            foreach ($item['services'] as $service) {
                Service::create([
                    'salon_id' => $salon->id,
                    'name' => $service['name'],
                    'price' => $service['price'],
                    'duration' => $service['duration'],
                    'popular' => $service['popular'],
                ]);
            }
        }
    }
}