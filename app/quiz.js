// quiz.js
const quizQuestions = [
    {
        question: "Как зовут главного героя?",

        options: ["Гарри Поттер", "Гермиона Грейнджер", "Рон Уизли"],
        answer: "Гарри Поттер"
    },
    {
        question: "Кто директор Хогвартса?",
        options: ["Снегг", "Дамблдор", "Волдеморт"],
        answer: "Дамблдор"
    }
];

const quizDiv = document.getElementById('quiz');
quizQuestions.forEach((q, index) => {
    const div = document.createElement('div');
    div.innerHTML = `<p>${q.question}</p>`;
    q.options.forEach(option => {
        div.innerHTML += `<label><input type="radio" name="question${index}" value="${option}">${option}</label><br>`;
    });
    quizDiv.appendChild(div);
});

document.getElementById('submit').addEventListener('click', () => {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const radios = document.getElementsByName(`question${index}`);
        for (let radio of radios) {
            if (radio.checked && radio.value === q.answer) {
                score++;
            }
        }
    });
    document.getElementById('result').textContent = `Ваш результат: ${score}/${quizQuestions.length}`;
});
