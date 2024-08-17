<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callbackGoogle()
    {
        try {
            $google_user = Socialite::driver('google')->user();

            // Check if user with the same google_id exists
            $user = User::where('google_id', $google_user->getId())->first();

            if ($user) {
                Auth::login($user);
            } else {
                // Check if user with the same email exists
                $userWithEmail = User::where('email', $google_user->getEmail())->first();

                if ($userWithEmail) {
                    // Update the user to add google_id
                    $userWithEmail->update([
                        'google_id' => $google_user->getId()
                    ]);
                    Auth::login($userWithEmail);
                } else {
                    // Create a new user
                    $new_user = User::create([
                        'name' => $google_user->getName(),
                        'email' => $google_user->getEmail(),
                        'google_id' => $google_user->getId()
                    ]);

                    Auth::login($new_user);
                }
            }

            return redirect()->route('role.selection');
        } catch (\Throwable $th) {
            dd('Something went wrong: ' . $th->getMessage());
        }
    }
}
