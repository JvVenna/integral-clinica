<?php

$dbHost = 'id19774503_admin';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'id19774503_intclinica';

$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);


$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$cpf = filter_input(INPUT_POST, 'cpf', FILTER_SANITIZE_NUMBER_INT);

$sexo = filter_input(INPUT_POST, 'sexo', FILTER_SANITIZE_STRING);
$plano = filter_input(INPUT_POST, 'plano', FILTER_SANITIZE_STRING);

//echo "Nome: $nome <br>";
//echo "Email: $email <br>";

$result_usuario = "INSERT INTO tbpacientes (nome, cpf, sexo, plano) VALUES ('$nome', '$cpf', '$sexo', '$plano')";
$resultado_usuario = mysqli_query($conn, $result_usuario);

?>