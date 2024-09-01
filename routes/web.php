<?php

use App\Http\Controllers\Auth\RoleController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FeeController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuartaDashboardController;
use App\Http\Controllers\QuartaOrganizationsController;
use App\Http\Controllers\RemittanceController;
use App\Http\Controllers\TransactionsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome/index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'privacyPolicy' => Route::has('privacy.policy'),
        'aboutUs' => Route::has('about.us'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/about-us', function () {
    return Inertia::render('Welcome/AboutUs');
})->name('about.us');

Route::get('/privacy-policy', function () {
    return Inertia::render('Welcome/PrivacyPolicy');
})->name('privacy.policy');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('auth/google', [GoogleAuthController::class, 'redirect'])->name('google-auth');
Route::get('auth/google/call-back', [GoogleAuthController::class, 'callbackGoogle']);

Route::middleware('auth')->group(function () {
    Route::get('/role-selection', [RoleController::class, 'showRoleSelection'])->name('role.selection');
    Route::post('/select-role', [RoleController::class, 'selectRole'])->name('role.selected');
});

Route::middleware('auth')->group(function () {
    // Dashboard accessible to all roles
    Route::middleware(['role:e-receipt finance officer|e-receipt auditor|e-receipt admin'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    });

    // Auditor-specific routes
    Route::middleware(['role:e-receipt finance officer|e-receipt auditor'])->group(function () {
        Route::get('/transactions/pending', [TransactionsController::class, 'pending'])->name('transactions.pending');
        Route::get('/transactions/accepted', [TransactionsController::class, 'accepted'])->name('transactions.accepted');
        Route::get('/transactions/rejected', [TransactionsController::class, 'rejected'])->name('transactions.rejected');
    });

    // Finance Officer-specific routes
    Route::middleware(['role:e-receipt finance officer'])->group(function () {
        Route::get('/remittance/overview', [RemittanceController::class, 'overview'])->name('remittance.overview');
        Route::get('/remittance/history', [RemittanceController::class, 'history'])->name('remittance.history');
        Route::resource('fees', FeeController::class)
            ->only(['index', 'store', 'update', 'destroy']);
    });

    // Quarta dev
    Route::middleware(['role:quarta admin'])->group(function () {
        Route::get('/quarta/dashboard', [QuartaDashboardController::class, 'index'])->name('quarta.dashboard');
        Route::get('/quarta/organizations', [QuartaOrganizationsController::class, 'index'])->name('quarta.organizations');
    });
});

require __DIR__ . '/auth.php';
