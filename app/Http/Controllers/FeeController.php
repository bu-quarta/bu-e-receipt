<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Fee;
use Carbon\Carbon;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class FeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fees = Fee::query()
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($fee) {
                $fee->added_on = Carbon::parse($fee->created_at)->format('F j, Y g:i A');
                return $fee;
            });

        return Inertia::render('Fees/Index', [
            'fees' => $fees,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'payment_name' => 'required|string|max:255',
            'semester' => 'required|string|max:255',
            'amount' => 'required|numeric', // Correct validation for decimal amounts
            'academic_year' => 'required|string|max:255',
            'status' => 'required|string|max:255',
        ]);

        $fee = new Fee();
        $fee->payment_name = $validatedData['payment_name'];
        $fee->semester = $validatedData['semester'];
        $fee->amount = $validatedData['amount'];
        $fee->academic_year = $validatedData['academic_year'];
        $fee->status = $validatedData['status'];

        $fee->save();

        return redirect()->route('fees.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Fee $fee)
    {
        $validatedData = $request->validate([
            'payment_name' => 'required|string|max:255',
            'semester' => 'required|string|max:255',
            'amount' => 'required|numeric', // Correct validation for decimal amounts
            'academic_year' => 'required|string|max:255',
            'status' => 'required|string|max:255',
        ]);

        $fee->update($validatedData);

        return redirect(route('fees.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Fee $fee): RedirectResponse
    {
        $fee->delete();

        return redirect()->route('fees.index');
    }
}
