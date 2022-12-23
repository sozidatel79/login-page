<?php

namespace App\Controllers\Auth;

use App\Helpers\JsonHelper;
use App\Models\User;
use App\Repositories\DbUserRepository;
use App\Services\AuthService;

class Auth
{

    public function login() {
        $body = file_get_contents('php://input');
        $user = AuthService::login(JsonHelper::jsonToArray($body));
        unset($user['password']);
        echo json_encode($user);
    }

    public function logOut(): void {
        $body = file_get_contents('php://input');
        AuthService::logOut(JsonHelper::jsonToArray($body));
    }

    public function register() {
        $body = file_get_contents('php://input');
        $user = AuthService::register(JsonHelper::jsonToArray($body));
        echo json_encode($user);
    }

}