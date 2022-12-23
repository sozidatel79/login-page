<?php

namespace App\Repositories;

use PDOException;
use PDO;
use App\Helpers\JsonHelper;

class DbUserRepository implements UserRepositoryInterface {

    private $db;
    private $dsn;

    private const DB_USERNAME = 'root';
    private const DB_PASSWORD = '';
    private const DB_HOST = '127.0.0.1';
    private const DB_NAME = 'login';


    public function __construct(){
        $this->dsn = "mysql:host=".self::DB_HOST.";dbname=".self::DB_NAME."";
        $this->db = $this->connect( $this->dsn );
    }

    /**
     * @param $string
     * @return string
     */
    private function hashPassword($string) {
        return sha1($string.'QYTGDW&(*&^Y(**YHIUH');
    }

    /**
     * @param $dsn
     * @return PDO|string
     */
    private function connect($dsn) {
        try {
            $conn = new PDO($dsn,self::DB_USERNAME, self::DB_PASSWORD);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
            return $conn;
        } catch (PDOException $e) {
            return $e->getMessage();
        }
    }

    /**
     * @param int $id
     * @return mixed|string
     */
    public function findOne(int $id)
    {
        $sql = "SELECT * FROM users WHERE id = ?";
        try {
            $query = $this->db->prepare($sql);
            $query->execute([
                $id
            ]);
            return $query->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return $e->getMessage();
        }
    }

    /**
     * @return mixed|string
     * For future use
     */
    public function find()
    {
        $sql = 'SELECT * FROM users';
        try {
            $query = $this->db->prepare($sql);
            $query->execute();
            return $query->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return $e->getMessage();
        }
    }

    /**
     * @param $data
     * @return mixed|null
     */
    public function save($data)
    {
        $sql = "INSERT INTO users (email, password, ip) values(?,?,?)";
        try {
            $statement = $this->db->prepare($sql);
            $statement->execute([
                $data['email'],
                $this->hashPassword($data['password']),
                $_SERVER['REMOTE_ADDR']
            ]);
            return  $this->findOne($this->db->lastInsertId());
        } catch (PDOException $e) {
            return null;
        }
    }

    /**
     * @param string $email
     * @param string $password
     * @return mixed|null
     */
    public function findByEmailAndPassword(string $email, string $password)
    {
        $sql = 'SELECT * FROM users WHERE email = ? AND password = ?';

        try {
            $query = $this->db->prepare($sql);
            $query->execute([
                $email,
                $this->hashPassword($password),
            ]);
            return  $query->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return null;
        }
    }

    /**
     * @param $data
     * @return mixed|string|null
     */
    public function update($data)
    {

        $update_data = $data;
        $sql = 'UPDATE users SET name = ?, last_name = ?, address = ?, gender = ?, phone_number = ? WHERE id = ?';
        try {
            $query = $this->db->prepare($sql);
            $query->execute([
                $update_data['name'],
                $update_data['last_name'],
                $update_data['address'],
                $update_data['gender'],
                $update_data['phone_number'],
                $update_data['id'],
            ]);
            return $this->findOne($update_data['id']);
        } catch (PDOException $e) {
            return null;
        }
    }

    /**
     * @param $data
     * @return string|null
     * For future use
     */
    public function delete($data) {
        $update_data = $data;
        $sql = 'DELETE FROM users WHERE id = ?';
        try {
            $query = $this->db->prepare($sql);
            $query->execute([
                $update_data['id'],
            ]);
            return $this->db->lastInsertId();
        } catch (PDOException $e) {
            return null;
        }
    }

}
