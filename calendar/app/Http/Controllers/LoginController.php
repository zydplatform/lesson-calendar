<?php 

//Authentication mechanism

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class LoginController extends Controller {


    public function authenticate(){

        if(Auth::attempt(['email'=> $email, 'password' => $password])){
            
            return redirect()->intended('dashboard');
        }
    }
}