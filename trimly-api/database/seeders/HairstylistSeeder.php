<?php

namespace Database\Seeders;

use App\Models\Hairstylist;
use App\Models\Salon;
use Illuminate\Database\Seeder;

class HairstylistSeeder extends Seeder
{
    public function run(): void
    {
        $hairstylists = [
            // Seven the Salon
            [
                'salon' => 'Seven the Salon',
                'stylists' => [
                    [
                        'name' => 'Nadia Putri',
                        'specialty' => 'Hair Coloring & Styling',
                        'rating' => 4.9,
                        'reviews' => 87,
                        'experience' => '7 years',
                        'image' => 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400',
                        'bio' => 'Specialist in modern hair coloring, styling and personalized looks.',
                    ],
                    [
                        'name' => 'Raka Pratama',
                        'specialty' => 'Haircut & Styling',
                        'rating' => 4.8,
                        'reviews' => 64,
                        'experience' => '5 years',
                        'image' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
                        'bio' => 'Passionate hairstylist specializing in modern cuts and everyday styling.',
                    ],
                ],
            ],

            // Brocode Barbershop
            [
                'salon' => 'Brocode Barbershop',
                'stylists' => [
                    [
                        'name' => 'Dimas Wijaya',
                        'specialty' => 'Fade & Taper',
                        'rating' => 4.9,
                        'reviews' => 126,
                        'experience' => '8 years',
                        'image' => 'https://images.unsplash.com/photo-1622296089863-eb7fc7c0a9c6?w=400',
                        'bio' => 'Specialist in clean fades, tapers and modern men hairstyles.',
                    ],
                    [
                        'name' => 'Ardi Saputra',
                        'specialty' => 'Classic Cut',
                        'rating' => 4.8,
                        'reviews' => 93,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400',
                        'bio' => 'Experienced stylist known for classic cuts and precise finishing.',
                    ],
                ],
            ],

            // Amaya Beauty & Wellness Salon
            [
                'salon' => 'Amaya Beauty & Wellness Salon',
                'stylists' => [
                    [
                        'name' => 'Citra Amelia',
                        'specialty' => 'Hair Treatment',
                        'rating' => 4.9,
                        'reviews' => 118,
                        'experience' => '9 years',
                        'image' => 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400',
                        'bio' => 'Specialist in hair treatments and personalized hair care.',
                    ],
                    [
                        'name' => 'Maya Sari',
                        'specialty' => 'Color & Styling',
                        'rating' => 4.8,
                        'reviews' => 76,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400',
                        'bio' => 'Creative stylist specializing in coloring and contemporary hairstyles.',
                    ],
                ],
            ],

            // Golden Barbershop
            [
                'salon' => 'Golden Barbershop',
                'stylists' => [
                    [
                        'name' => 'Kevin Pratama',
                        'specialty' => 'Fade & Taper',
                        'rating' => 4.9,
                        'reviews' => 142,
                        'experience' => '7 years',
                        'image' => 'https://images.unsplash.com/photo-1599351431202-1e0f0c7c6a2b?w=400',
                        'bio' => 'Known for detailed fades, tapers and sharp finishing.',
                    ],
                    [
                        'name' => 'Fajar Nugraha',
                        'specialty' => 'Classic & Modern Cut',
                        'rating' => 4.8,
                        'reviews' => 104,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400',
                        'bio' => 'Specialist in classic cuts combined with modern styling.',
                    ],
                ],
            ],

            // La Maison Salon Bandung
            [
                'salon' => 'La Maison Salon Bandung',
                'stylists' => [
                    [
                        'name' => 'Alya Maharani',
                        'specialty' => 'Color & Treatment',
                        'rating' => 4.9,
                        'reviews' => 71,
                        'experience' => '8 years',
                        'image' => 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
                        'bio' => 'Specialist in hair coloring and restorative treatments.',
                    ],
                    [
                        'name' => 'Rina Kartika',
                        'specialty' => 'Hair Styling',
                        'rating' => 4.8,
                        'reviews' => 59,
                        'experience' => '5 years',
                        'image' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
                        'bio' => 'Experienced in elegant styling for everyday and special occasions.',
                    ],
                ],
            ],

            // The Cut Rumah Barber
            [
                'salon' => 'The Cut Rumah Barber',
                'stylists' => [
                    [
                        'name' => 'Bagas Ramadhan',
                        'specialty' => 'Fade & Modern Cut',
                        'rating' => 4.8,
                        'reviews' => 97,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
                        'bio' => 'Specialist in fades, textured cuts and modern hairstyles.',
                    ],
                    [
                        'name' => 'Rizky Maulana',
                        'specialty' => 'Classic Cut',
                        'rating' => 4.7,
                        'reviews' => 83,
                        'experience' => '5 years',
                        'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
                        'bio' => 'Focuses on clean classic cuts and personalized styling.',
                    ],
                ],
            ],

            // Seven the Salon SG
            [
                'salon' => 'Seven the Salon SG',
                'stylists' => [
                    [
                        'name' => 'Jessica Tan',
                        'specialty' => 'Hair Coloring',
                        'rating' => 4.9,
                        'reviews' => 92,
                        'experience' => '8 years',
                        'image' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
                        'bio' => 'Specialist in dimensional hair color and modern styling.',
                    ],
                    [
                        'name' => 'Vania Putri',
                        'specialty' => 'Hair Treatment',
                        'rating' => 4.8,
                        'reviews' => 68,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
                        'bio' => 'Specializes in healthy hair treatments and styling.',
                    ],
                ],
            ],

            // Captain Barbershop Bandung Cihampelas
            [
                'salon' => 'Captain Barbershop Bandung Cihampelas',
                'stylists' => [
                    [
                        'name' => 'Rangga Saputra',
                        'specialty' => 'Fade & Taper',
                        'rating' => 4.9,
                        'reviews' => 156,
                        'experience' => '8 years',
                        'image' => 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400',
                        'bio' => 'Expert in fades, tapers and sharp modern hairstyles.',
                    ],
                    [
                        'name' => 'Andika Putra',
                        'specialty' => 'Classic Cut',
                        'rating' => 4.8,
                        'reviews' => 109,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
                        'bio' => 'Specializes in classic cuts and clean styling.',
                    ],
                ],
            ],

            // Lexzi Salon
            [
                'salon' => 'Lexzi Salon',
                'stylists' => [
                    [
                        'name' => 'Sarah Amelia',
                        'specialty' => 'Hair Coloring',
                        'rating' => 4.8,
                        'reviews' => 73,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=400',
                        'bio' => 'Creative stylist specializing in hair coloring and styling.',
                    ],
                    [
                        'name' => 'Dewi Lestari',
                        'specialty' => 'Hair Treatment',
                        'rating' => 4.7,
                        'reviews' => 61,
                        'experience' => '5 years',
                        'image' => 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
                        'bio' => 'Focuses on hair health, treatments and natural styling.',
                    ],
                ],
            ],

            // Roger's Salon Dago
            [
                'salon' => "Roger's Salon Dago",
                'stylists' => [
                    [
                        'name' => 'Michelle Grace',
                        'specialty' => 'Color & Styling',
                        'rating' => 4.9,
                        'reviews' => 84,
                        'experience' => '9 years',
                        'image' => 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400',
                        'bio' => 'Experienced in premium hair coloring and styling.',
                    ],
                    [
                        'name' => 'Kevin Adrian',
                        'specialty' => 'Haircut & Styling',
                        'rating' => 4.8,
                        'reviews' => 72,
                        'experience' => '7 years',
                        'image' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
                        'bio' => 'Specializes in modern haircuts and personalized styling.',
                    ],
                ],
            ],

            // CUKUR HADE
            [
                'salon' => 'CUKUR HADE BARBERSHOP - LENGKONG KECIL',
                'stylists' => [
                    [
                        'name' => 'Ilham Fauzi',
                        'specialty' => 'Fade & Taper',
                        'rating' => 4.9,
                        'reviews' => 134,
                        'experience' => '7 years',
                        'image' => 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400',
                        'bio' => 'Specialist in sharp fades and modern taper cuts.',
                    ],
                    [
                        'name' => 'Rian Setiawan',
                        'specialty' => 'Classic Cut',
                        'rating' => 4.8,
                        'reviews' => 91,
                        'experience' => '5 years',
                        'image' => 'https://images.unsplash.com/photo-1599351431202-1e0f0c7c6a2b?w=400',
                        'bio' => 'Known for clean classic cuts and detailed finishing.',
                    ],
                ],
            ],

            // Hairzonestyle Bandung
            [
                'salon' => 'Hairzonestyle Bandung',
                'stylists' => [
                    [
                        'name' => 'Putri Ananda',
                        'specialty' => 'Hair Coloring',
                        'rating' => 4.9,
                        'reviews' => 103,
                        'experience' => '7 years',
                        'image' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
                        'bio' => 'Specialist in contemporary colors and hair transformations.',
                    ],
                    [
                        'name' => 'Mira Anggraini',
                        'specialty' => 'Treatment & Styling',
                        'rating' => 4.8,
                        'reviews' => 79,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
                        'bio' => 'Focuses on healthy hair treatments and modern styling.',
                    ],
                ],
            ],

            // Salon Smooch
            [
                'salon' => 'Salon Smooch Beauty Bar Bandung',
                'stylists' => [
                    [
                        'name' => 'Nina Prameswari',
                        'specialty' => 'Hair Styling',
                        'rating' => 4.9,
                        'reviews' => 52,
                        'experience' => '5 years',
                        'image' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
                        'bio' => 'Specialist in modern styling and event-ready looks.',
                    ],
                    [
                        'name' => 'Clara Wijaya',
                        'specialty' => 'Color & Treatment',
                        'rating' => 4.8,
                        'reviews' => 47,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400',
                        'bio' => 'Creative stylist focused on coloring and hair treatments.',
                    ],
                ],
            ],

            // Barberkiehl
            [
                'salon' => 'Barberkiehl Boutique Barbershop',
                'stylists' => [
                    [
                        'name' => 'Bima Prakoso',
                        'specialty' => 'Fade & Taper',
                        'rating' => 4.8,
                        'reviews' => 88,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
                        'bio' => 'Specializes in fades, tapers and textured hairstyles.',
                    ],
                    [
                        'name' => 'Yoga Pratama',
                        'specialty' => 'Classic Cut',
                        'rating' => 4.7,
                        'reviews' => 63,
                        'experience' => '5 years',
                        'image' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
                        'bio' => 'Known for precise classic cuts and clean finishes.',
                    ],
                ],
            ],

            // Yucca Salon
            [
                'salon' => 'Yucca Salon',
                'stylists' => [
                    [
                        'name' => 'Aurelia Putri',
                        'specialty' => 'Color & Styling',
                        'rating' => 4.9,
                        'reviews' => 74,
                        'experience' => '7 years',
                        'image' => 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
                        'bio' => 'Specialist in modern coloring and personalized styling.',
                    ],
                    [
                        'name' => 'Melisa Kartika',
                        'specialty' => 'Hair Treatment',
                        'rating' => 4.8,
                        'reviews' => 58,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400',
                        'bio' => 'Focuses on hair care, treatment and healthy styling.',
                    ],
                ],
            ],

            // Sunshine Beauty Dago
            [
                'salon' => 'Sunshine Beauty Dago',
                'stylists' => [
                    [
                        'name' => 'Bella Maharani',
                        'specialty' => 'Hair Styling',
                        'rating' => 4.8,
                        'reviews' => 44,
                        'experience' => '5 years',
                        'image' => 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
                        'bio' => 'Specialist in elegant everyday and occasion styling.',
                    ],
                    [
                        'name' => 'Fina Wulandari',
                        'specialty' => 'Hair Treatment',
                        'rating' => 4.7,
                        'reviews' => 39,
                        'experience' => '5 years',
                        'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
                        'bio' => 'Passionate about healthy hair treatments and care.',
                    ],
                ],
            ],

            // Hamima Salon Muslimah Dago
            [
                'salon' => 'Hamima Salon Muslimah Dago',
                'stylists' => [
                    [
                        'name' => 'Aisyah Rahma',
                        'specialty' => 'Hair Treatment',
                        'rating' => 4.9,
                        'reviews' => 91,
                        'experience' => '7 years',
                        'image' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
                        'bio' => 'Specialist in hair care and treatment services.',
                    ],
                    [
                        'name' => 'Nabila Sari',
                        'specialty' => 'Hair Styling',
                        'rating' => 4.8,
                        'reviews' => 67,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
                        'bio' => 'Experienced in modest and elegant hairstyle styling.',
                    ],
                ],
            ],

            // Salon 808
            [
                'salon' => 'Salon 808 Hair & Beauty Bandung',
                'stylists' => [
                    [
                        'name' => 'Tania Putri',
                        'specialty' => 'Color & Styling',
                        'rating' => 4.9,
                        'reviews' => 63,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
                        'bio' => 'Creative stylist specializing in coloring and styling.',
                    ],
                    [
                        'name' => 'Dina Amelia',
                        'specialty' => 'Hair Treatment',
                        'rating' => 4.8,
                        'reviews' => 55,
                        'experience' => '5 years',
                        'image' => 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400',
                        'bio' => 'Focuses on restorative treatments and healthy hair.',
                    ],
                ],
            ],

            // Princess Beauty Salon
            [
                'salon' => 'Princess Beauty Salon',
                'stylists' => [
                    [
                        'name' => 'Livia Anggraini',
                        'specialty' => 'Hair Coloring',
                        'rating' => 4.8,
                        'reviews' => 69,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
                        'bio' => 'Specialist in hair color and contemporary styling.',
                    ],
                    [
                        'name' => 'Maya Putri',
                        'specialty' => 'Hair Treatment',
                        'rating' => 4.7,
                        'reviews' => 51,
                        'experience' => '5 years',
                        'image' => 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400',
                        'bio' => 'Specializes in hair care and treatment services.',
                    ],
                ],
            ],

            // Captain Barbershop Sumantri
            [
                'salon' => 'Captain Barbershop Sumantri',
                'stylists' => [
                    [
                        'name' => 'Fikri Ramadhan',
                        'specialty' => 'Fade & Taper',
                        'rating' => 4.9,
                        'reviews' => 121,
                        'experience' => '7 years',
                        'image' => 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400',
                        'bio' => 'Specialist in fades, tapers and modern men hairstyles.',
                    ],
                    [
                        'name' => 'Hendra Saputra',
                        'specialty' => 'Classic Cut',
                        'rating' => 4.8,
                        'reviews' => 94,
                        'experience' => '6 years',
                        'image' => 'https://images.unsplash.com/photo-1599351431202-1e0f0c7c6a2b?w=400',
                        'bio' => 'Experienced barber specializing in classic and modern cuts.',
                    ],
                ],
            ],
        ];

        foreach ($hairstylists as $item) {
            $salon = Salon::where('name', $item['salon'])->first();

            if (!$salon) {
                continue;
            }

            foreach ($item['stylists'] as $stylist) {
                Hairstylist::create([
                    'salon_id' => $salon->id,
                    'name' => $stylist['name'],
                    'specialty' => $stylist['specialty'],
                    'rating' => $stylist['rating'],
                    'reviews' => $stylist['reviews'],
                    'experience' => $stylist['experience'],
                    'image' => $stylist['image'],
                    'bio' => $stylist['bio'],
                ]);
            }
        }
    }
}