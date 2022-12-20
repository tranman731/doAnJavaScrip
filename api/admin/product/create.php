<?php
require_once "../../core/function.php";

$name = $_POST['name'];
$description = $_POST['description'];
$img = $_POST['img'];
$price = $_POST['price'];
$category_id = $_POST['category_id'];


$rs = create_products($name,$description,$img,$price,$category_id);
var_dump($rs);
die();
$response = array(
    'status' => $rs
);
echo json_encode($response);
?>