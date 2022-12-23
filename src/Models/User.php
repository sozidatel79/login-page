<?php


namespace App\Models;

use App\Repositories\UserRepositoryInterface;

class User
{
    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getAll()
    {
        return $this->userRepository->find();
    }

    public function getOne($id)
    {
        return $this->userRepository->findOne($id);
    }

    public function save($data)
    {
        return $this->userRepository->save($data);
    }

    public function update($data)
    {
        return $this->userRepository->update($data);
    }

    public function getByEmailAndPassword($email, $password)
    {
        return $this->userRepository->findByEmailAndPassword($email, $password);
    }
}