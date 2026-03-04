<?php
include "db.php";

$id = $_POST["usuario_id"];
$oleosa = $_POST["oleosa"];
$seca = $_POST["seca"];
$acne = $_POST["acne"];

$conn->query(
    "INSERT INTO respostas (usuario_id, oleosa, seca, acne)
     VALUES ($id, '$oleosa', '$seca', '$acne')"
);

header("Location: resultado.php?id=$id");
?>