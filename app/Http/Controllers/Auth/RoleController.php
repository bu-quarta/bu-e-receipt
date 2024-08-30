<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function showRoleSelection()
    {
        return Inertia::render('SelectRole'); // Assuming you're using Inertia.js
    }

    public function selectRole(Request $request)
    {
        $user = Auth::user();

        // Validate the selected role
        $request->validate([
            'role' => 'required|in:e-receipt auditor,e-receipt finance officer,e-receipt admin,quarta admin'
        ]);

        // Remove previous roles (if any) and assign the new role
        $user->syncRoles($request->input('role'));


        // Redirect to the appropriate dashboard
        switch ($request->input('role')) {
            case 'e-receipt auditor':
                return redirect('dashboard');
            case 'e-receipt finance officer':
                return redirect('dashboard');
            case 'e-receipt admin':
                return redirect('dashboard');
            case 'quarta admin':
                return redirect('quarta/dashboard');
        }
    }
}
