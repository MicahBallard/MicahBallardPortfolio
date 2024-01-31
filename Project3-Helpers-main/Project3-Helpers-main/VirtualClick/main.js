let homeButton = document.getElementById("home-button");
let profileButton = document.getElementById("profile-button");
let contactButton = document.getElementById("contact-button");

let homeTab = document.getElementById("home-tab");
let profileTab = document.getElementById("profile-tab");
let contactTab = document.getElementById("contact-tab");

homeButton.addEventListener("click", () => {
  // simply calling .click() on a button element will simulate a click by a user
  homeTab.click();
})

profileButton.addEventListener("click", () => {
  profileTab.click();
})

contactButton.addEventListener("click", () => {
  contactTab.click();
})