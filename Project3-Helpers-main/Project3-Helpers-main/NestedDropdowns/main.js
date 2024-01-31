// create array of all elements with the class "item-button"
let itemButtons = Array.from(document.getElementsByClassName("item-button"));

// set variable to the element with id "display"
let displayOutput = document.getElementById("display");

// add an event listener to all of the elements in the itemButtons array
for (i in itemButtons) {
  itemButtons[i].addEventListener("click", showText);
}

// define the function that is called when an itemButton is clicked
function showText() {
  displayOutput.innerText = `You chose ${this.innerText}`;
}