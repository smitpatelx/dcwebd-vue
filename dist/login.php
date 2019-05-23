<?php

require('./php/functions.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header("Access-Control-Allow-Headers: *");

    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $_POST = (array) json_decode(file_get_contents('php://input'));
        //print_r($_POST);
        $password = trimT('pass');
        $username = hashmd5(trimT('usrnm'));

        $returnValue = "";
        if(isset($password) && isset($username)){
            $returnValue = hashmd5("success");
        } else {
            $returnValue = hashmd5("error");
        }

        echo $returnValue;
    }
?>