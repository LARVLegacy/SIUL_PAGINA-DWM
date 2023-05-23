var questionIndex = 0;
var score = 0;

var questions = [
  {
    question: "¿Cuál es el lenguaje de programación más utilizado?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: 2
  },
  {
    question: "¿Cuál de los siguientes no es un lenguaje de programación?",
    options: ["HTML", "CSS", "Java", "Ruby"],
    answer: 0
  },
  // Agrega más preguntas aquí
];

var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var resultElement = document.getElementById("result");
var nextButton = document.getElementById("next-btn");

function showQuestion() {
  var currentQuestion = questions[questionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  for (var i = 0; i < currentQuestion.options.length; i++) {
    var option = document.createElement("li");
    var button = document.createElement("button");
    button.classList.add("option");
    button.textContent = currentQuestion.options[i];
    option.appendChild(button);
    optionsElement.appendChild(option);
  }

  var optionButtons = document.getElementsByClassName("option");
  for (var i = 0; i < optionButtons.length; i++) {
    optionButtons[i].addEventListener("click", checkAnswer);
  }
}

function checkAnswer(event) {
  var selectedOption = event.target;
  var selectedAnswer = Array.prototype.indexOf.call(
    selectedOption.parentElement.parentElement.children,
    selectedOption.parentElement
  );

  var currentQuestion = questions[questionIndex];
  if (selectedAnswer === currentQuestion.answer) {
    score++;
    resultElement.textContent = "¡Respuesta correcta!";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "Respuesta incorrecta";
    resultElement.style.color = "red";
  }

  nextButton.disabled = false;

  for (var i = 0; i < optionButtons.length; i++) {
    optionButtons[i].removeEventListener("click", checkAnswer);
  }
}

function showNextQuestion() {
  questionIndex++;
  resultElement.textContent = "";
  nextButton.disabled = true;

  if (questionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = "¡Has completado el juego!";
  optionsElement.innerHTML = "";
  resultElement.textContent = "Puntuación: " + score + " de " + questions.length;
}

nextButton.addEventListener("click", showNextQuestion);

showQuestion();