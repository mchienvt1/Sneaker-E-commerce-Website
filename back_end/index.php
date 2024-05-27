<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
session_start();
//load models
require "config.php";
require "connectDB.php";
// require "functions.php";

require "model/User.php";
require "model/UserRepository.php";
require "model/Product.php";
require "model/ProductRepository.php";
require "model/Comment.php";
require "model/CommentRepository.php";
require "model/Cart.php";
require "model/CartRepository.php";
require "model/Order.php";
require "model/OrderRepository.php";
require "model/Size.php";
require "model/SizeRepository.php";
require "model/Description.php";
require "model/DescriptionRepository.php";
require "model/SubImage.php";
require "model/SubImageRepository.php";
require "model/Discount.php";
require "model/DiscountRepository.php";
require "model/NewProduct.php";
require "model/NewProductRepository.php";
require "model/OutStanding.php";
require "model/OutStandingRepository.php";
//router
$c = $_GET["c"] ?? "user";
$a = $_GET["a"] ?? "list";
$controllerName = ucfirst($c) . "Controller";
require "controller/" . $controllerName . ".php";
$controller = new $controllerName();
$controller->$a();
