<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QuartaOrganizationsController extends Controller
{
    public function index()
    {
        return Inertia::render('Quarta/Organizations');
    }
}
