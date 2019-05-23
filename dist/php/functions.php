<?php 
session_start();
date_default_timezone_set('America/Toronto');
ob_start();

define("MD5", "md5");

function callPost() //to reuse POST request method
{
	return $_SERVER["REQUEST_METHOD"] == "POST";
}


function trimT($anyValue)
{
	return trim($_POST["$anyValue"]);
}

function post($anyValue)
{
	return $_POST["$anyValue"];
}

function hashmd5($value)
{
    return hash(MD5, $value);
}

function dhashmd5($value)
{
    return hash($value, MD5);
}

?>