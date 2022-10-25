<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'name' => 'Boter',
                'price' => '1.20',
                'amount' => '1',
               // 'expire' => Carbon::now()->format('Y-m-d H:i:s')
            ],

            [
                'name' => 'Kaas',
                'price' => '3.50',
                'amount' => '2'
            ],

            [
                'name' => 'Eiëren',
                'price' => '0.90',
                'amount' => '3'
            ],
        ]);
    }
}
