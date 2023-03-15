const csvString = "Translate 'Hello' to Spanish,hola";
const [questionText, correctAnswer] = csvString.split(",");

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const resultElement = document.getElementById("result");

questionElement.textContent = questionText;

function submitAnswer() {
    const userAnswer = answerElement.value.trim().toLowerCase();
    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}
