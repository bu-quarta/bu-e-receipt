<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TransactionsController extends Controller
{
    public function pending()
    {
        // Logic for pending transactions
        return Inertia::render('Transactions/Pending', [
            // Pass any necessary data
        ]);
    }

    public function accepted()
    {
        // Logic for accepted transactions
        return Inertia::render('Transactions/Accepted', [
            // Pass any necessary data
        ]);
    }

    public function rejected()
    {
        // Logic for rejected transactions
        return Inertia::render('Transactions/Rejected', [
            // Pass any necessary data
        ]);
    }
}
