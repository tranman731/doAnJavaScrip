<?php
require_once "../../core/function.php";

$id = $_POST['id'];
$name = $_POST['name'];
$description = $_POST['description'];
$price = $_POST['price'];
$img = $_POST['img'];


$rs = update_products($id,$name,$description,$price,$img);

$response = array(
    'status' => $rs
);
echo json_encode($response);
?>