<?php
include "db.php";

$id = $_GET["id"];

$user = $conn->query("SELECT nome FROM usuarios WHERE id=$id")->fetch_assoc();
$res = $conn->query("SELECT * FROM respostas WHERE usuario_id=$id")->fetch_assoc();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Resultado</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2><?php echo $user["nome"]; ?>,</h2>
    <p id="resultado"></p>
</div>

<script>
let oleosa = "<?php echo $res['oleosa']; ?>";
let seca = "<?php echo $res['seca']; ?>";
let acne = "<?php echo $res['acne']; ?>";

let mensagem = "";

if (oleosa === "sim" && acne === "sim") {
    mensagem = "sua pele é oleosa e acneica. Use produtos oil-free e não comedogênicos.";
} else if (seca === "sim") {
    mensagem = "sua pele é seca. Hidrate diariamente com ácido hialurônico.";
} else {
    mensagem = "sua pele é equilibrada. Mantenha uma rotina simples de limpeza.";
}

document.getElementById("resultado").innerText = mensagem;
</script>

</body>
</html>