<?php
$conn = new mysqli("localhost", "root", "", "skin_care");

if ($conn->connect_error) {
    die("Erro na conexão");
}
?>