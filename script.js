const perguntas = [
    "Sua pele é oleosa?",
    "Sua pele costuma ressecar?",
    "Você tem acne com frequência?"
];

let etapa = 0;
let respostas = {};

document.getElementById("pergunta").innerText = perguntas[0];

function responder(valor) {
    if (etapa === 0) respostas.oleosa = valor;
    if (etapa === 1) respostas.seca = valor;
    if (etapa === 2) respostas.acne = valor;

    etapa++;

    if (etapa < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[etapa];
    } else {
        document.getElementById("oleosa").value = respostas.oleosa;
        document.getElementById("seca").value = respostas.seca;
        document.getElementById("acne").value = respostas.acne;
        document.getElementById("form").submit();
    }
}