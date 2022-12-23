<?php


namespace App\Services;


use App\Helpers\JsonHelper;
use App\Models\User;
use App\Repositories\DbUserRepository;

class AuthService {

    public static function login($data) {
        $user = new User(new DbUserRepository());
        $usr = $user->getByEmailAndPassword($data['email'], $data['password']);
        unset($usr['password']);
        return $usr;
    }

    public static function logOut($data): void {
        //
    }

    public static function register($data) {
        $body = file_get_contents('php://input');
        $usr = JsonHelper::jsonToArray($body);
        $registered_user = new User(new DbUserRepository());
        return $registered_user->save($usr);
    }

}