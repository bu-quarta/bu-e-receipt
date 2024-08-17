<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        Role::create(['name' => 'e-receipt admin']);
        Role::create(['name' => 'e-receipt finance officer']);
        Role::create(['name' => 'e-receipt auditor']);
    }
}
