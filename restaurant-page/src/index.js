import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const content = document.getElementById("content");
const menuButton = document.getElementById("menuBtn");
const homeButton = document.getElementById("homeBtn");
const contactButton = document.getElementById("contactbtn");

home();
setActiveButton(homeButton);

menuButton.addEventListener("click", () => {
  content.textContent = "";
  menu();
  setActiveButton(menuButton);
});

homeButton.addEventListener("click", () => {
  content.textContent = "";
  home();
  setActiveButton(homeButton);
});

contactButton.addEventListener("click", () => {
  content.textContent = "";
  contact();
  setActiveButton(contactButton);
});

function setActiveButton(button) {
  homeButton.classList.remove("active");
  menuButton.classList.remove("active");
  contactButton.classList.remove("active");

  button.classList.add("active");
}
