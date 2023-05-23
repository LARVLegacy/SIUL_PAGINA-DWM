var pacman = document.getElementById("pacman");

document.addEventListener("keydown", function(event) {
  var topPosition = parseInt(pacman.style.top) || 0;
  var leftPosition = parseInt(pacman.style.left) || 0;

  switch (event.keyCode) {
    case 37: // Left arrow key
      pacman.style.transform = "rotate(-180deg)";
      pacman.style.left = leftPosition - 20 + "px";
      break;
    case 38: // Up arrow key
      pacman.style.transform = "rotate(-90deg)";
      pacman.style.top = topPosition - 20 + "px";
      break;
    case 39: // Right arrow key
      pacman.style.transform = "rotate(0)";
      pacman.style.left = leftPosition + 20 + "px";
      break;
    case 40: // Down arrow key
      pacman.style.transform = "rotate(90deg)";
      pacman.style.top = topPosition + 20 + "px";
      break;
  }
});