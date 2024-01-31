// put all elements with the class "fish" into an array
let fishDivs = Array.from(document.getElementsByClassName("fish"));
let fishButton = document.getElementById("fish-button");

// put all elements with the class "fruit" into an array
let fruitDivs = Array.from(document.getElementsByClassName("fruit"));
let fruitButton = document.getElementById("fruit-button");

// put all elements with the class "bird" into an array
let birdDivs = Array.from(document.getElementsByClassName("bird"));
let birdButton = document.getElementById("bird-button");

// These 3 functions are more or less identical, just with the fish/fruit/bird variables swapped out
fishButton.addEventListener("click", () => {
  fishButton.classList.toggle("inactive");
  // we're using a for loop to find all elements with the matching inactive class and toggling it on/off
  for (i in fishDivs) {
    fishDivs[i].classList.toggle("inactive");
  }
})

fruitButton.addEventListener("click", () => {
  fruitButton.classList.toggle("inactive");
  for (i in fruitDivs) {
    fruitDivs[i].classList.toggle("inactive");
  }
})

birdButton.addEventListener("click", () => {
  birdButton.classList.toggle("inactive");
  for (i in birdDivs) {
    birdDivs[i].classList.toggle("inactive");
  }
})