<?php
include "db.php";

$nome = $_POST["nome"];
$email = $_POST["email"];

$conn->query("INSERT INTO usuarios (nome, email) VALUES ('$nome', '$email')");
$id = $conn->insert_id;
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Questionário</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2>Olá, <?php echo $nome; ?> 👋</h2>
    <p id="pergunta"></p>

    <button onclick="responder('sim')">Sim</button>
    <button onclick="responder('nao')">Não</button>
</div>

<form id="form" action="salvar_respostas.php" method="POST">
    <input type="hidden" name="usuario_id" value="<?php echo $id; ?>">
    <input type="hidden" name="oleosa" id="oleosa">
    <input type="hidden" name="seca" id="seca">
    <input type="hidden" name="acne" id="acne">
</form>

<script src="script.js"></script>
</body>
</html>