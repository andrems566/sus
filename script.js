const questions = [
    { q: "1. Quantos copos de água você bebe por dia?", options: ["Menos de 3", "3 a 5", "6 a 8", "Mais de 8"] },
    { q: "2. Você lava o rosto quantas vezes ao dia?", options: ["Não lavo", "1 vez", "2 vezes", "Mais de 2"] },
    { q: "3. Usa protetor solar diariamente?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
    { q: "4. Você dorme quantas horas por noite?", options: ["Menos de 5", "5 a 6", "7 a 8", "Mais de 8"] },
    { q: "5. Com que frequência consome açúcar?", options: ["Diariamente", "Algumas vezes", "Raramente", "Nunca"] },
    { q: "6. Você fuma ou convive com fumantes?", options: ["Sim", "Às vezes", "Raramente", "Não"] },
    { q: "7. Usa maquiagem diariamente?", options: ["Sim", "Só finais de semana", "Raramente", "Nunca"] },
    { q: "8. Remove a maquiagem antes de dormir?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
    { q: "9. Sua alimentação é rica em frutas e legumes?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
    { q: "10. Você toca muito no rosto durante o dia?", options: ["Sim", "Às vezes", "Raramente", "Nunca"] }
];

let currentStep = 0;
let answers = {};

const container = document.getElementById("questions-container");

questions.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "step";
    div.id = `step-${index + 1}`;
    div.innerHTML = `
        <h2>${item.q}</h2>
        <div class="options-container">
            ${item.options.map(opt => `
                <label class="option">
                    <input type="radio" name="q${index}" value="${opt}"> ${opt}
                </label>
            `).join("")}
        </div>
        <button onclick="nextStep()">Próxima</button>
    `;
    container.appendChild(div);
});

function nextStep() {
    const currentDiv = document.getElementById(`step-${currentStep}`);

    if (currentStep > 0) {
        const selected = currentDiv.querySelector("input:checked");
        if (!selected) return alert("Selecione uma opção");
        answers[`q${currentStep - 1}`] = selected.value;
    }

    currentDiv.classList.remove("active");
    currentStep++;

    if (currentStep <= questions.length) {
        document.getElementById(`step-${currentStep}`).classList.add("active");
        updateBackground();
    } else {
        showResult();
    }
}

function updateBackground() {
    const colors = ['#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd'];
    document.body.style.backgroundColor = colors[currentStep % colors.length];
}

function showResult() {
    document.getElementById("step-final").classList.add("active");

    let score = 0;
    Object.values(answers).forEach(a => {
        if (a === "Sempre" || a === "Mais de 8" || a === "Nunca") score++;
    });

    const res = document.getElementById("resultado-texto");
    res.innerHTML = `
        <p><strong>Avaliação Geral:</strong></p>
        <p>${score >= 6 ? "Bons hábitos ✅" : "Hábitos que precisam melhorar ⚠️"}</p>
        <p>Dica: Pequenas mudanças diárias fazem grande diferença na saúde da sua pele.</p>
    `;
}