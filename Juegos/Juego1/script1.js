// Generar un número aleatorio entre 1 y 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Obtener los elementos del DOM
var guessInput = document.getElementById("guessInput");
var message = document.getElementById("message");

// Función para comprobar el número adivinado
function checkGuess() {
  // Obtener el valor ingresado por el jugador
  var userGuess = parseInt(guessInput.value);

  // Comprobar si el número es válido
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    return;
  }

  // Comprobar si el número adivinado es correcto
  if (userGuess === randomNumber) {
    message.textContent = "¡Felicitaciones! ¡Has adivinado el número correcto!";
    message.style.color = "green";
    guessInput.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "El número es mayor. Intenta nuevamente.";
    message.style.color = "red";
  } else {
    message.textContent = "El número es menor. Intenta nuevamente.";
    message.style.color = "red";
  }

  // Limpiar el campo de entrada
  guessInput.value = "";
  guessInput.focus();
}