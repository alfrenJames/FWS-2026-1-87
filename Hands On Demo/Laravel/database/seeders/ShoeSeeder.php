<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Shoe;
class ShoeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Shoe::create([
            'shoe_name' => 'Air Max 90',
            'brand' => 'Nike',
            'category' => 'Running',
            'price' => 120.00,
            'size' => 10.5,
            'quantity' => 50,
        ]);

         Shoe::create([
           'shoe_name' => 'Ultraboost 21',
            'brand' => 'Adidas',
            'category' => 'Running',
            'price' => 180.00,
            'size' => 9.0,
            'quantity' => 30,
        ]);
    }
}