<?php
header("Access-Control-Allow-Origin:*");
header('Content-type: application/json');

require_once __DIR__ . '/../vendor/autoload.php';

use App\Router\Router;
use App\Router\Handler;

$router = new Router(new Handler());

$router->post('/user/update', 'App\Controllers\User\User::update');

$router->post('/login', 'App\Controllers\Auth\Auth::login');
$router->post('/logout', 'App\Controllers\Auth\Auth::logout');
$router->post('/register', 'App\Controllers\Auth\Auth::register');


$router->dispatch();
