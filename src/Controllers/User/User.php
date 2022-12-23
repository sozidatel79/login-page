<?php


namespace App\Controllers\User;

use App\Helpers\JsonHelper;
use App\Repositories\DbUserRepository;
use App\Models\User as UserModel;



class User
{

    public function getAll()
    {
        $user = new UserModel(new DbUserRepository());
        $users = $user->getAll();
        echo JsonHelper::arrayToJson($users);
    }


    public function getOne()
    {
        $body = file_get_contents('php://input');
        $userId = JsonHelper::jsonToArray($body);
        $userService = new UserModel(new DbUserRepository());
        $one = $userService->getOne($userId['id']);
        echo $one;
    }

    public function update() {
        $body = file_get_contents('php://input');
        $user = new UserModel(new DbUserRepository());
        $response = $user->update(JsonHelper::jsonToArray($body));
        unset($response['password']);
        echo JsonHelper::arrayToJson($response);
    }

}