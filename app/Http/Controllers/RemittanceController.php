<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class RemittanceController extends Controller
{
    public function overview()
    {
        // Logic for remittance overview
        return Inertia::render('Remittance/Overview', [
            // Pass any necessary data
        ]);
    }

    public function history()
    {
        // Logic for remittance history
        return Inertia::render('Remittance/History', [
            // Pass any necessary data
        ]);
    }
}
