<?php


namespace App\Repositories;

use App\Controllers\User\User;

interface UserRepositoryInterface
{
    public function findOne(int $id);
    public function find();
    public function save($data);
    public function update($data);
    public function delete($data);
    public function findByEmailAndPassword(string $email, string $password);
}