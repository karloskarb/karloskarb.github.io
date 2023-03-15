const csvString = `Translate 'Hello' to Spanish,hola,buenos días,adiós
Translate 'Goodbye' to Spanish,adiós,hola,buenos días`;

const questions = csvString.split("\n").map(line => {
    const [question, correctAnswer, ...choices] = line.split(",");
    return { question, correctAnswer, choices: [correctAnswer, ...choices].sort(() => Math.random() - 0.5) };
});

let currentQuestionIndex = 0;
let score = 0;

const scoreElement = document.getElementById("score");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const answerElement = document.getElementById("answer");
const submitButton = document.getElementById("submit-button");
const resultElement = document.getElementById("result");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";

    for (const choice of currentQuestion.choices) {
        const button = document.createElement("button");
        button.classList.add("choice-button");
        button.textContent = choice;
        button.onclick = () => {
            answerElement.value = choice;
        };
        choicesElement.appendChild(button);
    }
}

function submitAnswer() {
    const userAnswer = answerElement.value.trim().toLowerCase();
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        score++;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}

displayQuestion();
