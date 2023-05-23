var darkCells = document.getElementsByClassName("dark");

for (var i = 0; i < darkCells.length; i++) {
  darkCells[i].addEventListener("click", function() {
    if (this.classList.contains("selected")) {
      this.classList.remove("selected");
    } else {
      var selectedCell = document.querySelector(".selected");

      if (selectedCell) {
        selectedCell.classList.remove("selected");
      }

      this.classList.add("selected");
    }
  });
}