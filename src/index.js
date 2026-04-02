import "./resturant.css";
import { HomePage } from "./home.js";
import { MenuUI } from "./menuUi.js";
import { updatedMenu } from "./foodItems.js";
import { Contacts } from "./contactUi.js";

const pageLayout = document.querySelector("#content");

const Menu = new MenuUI(pageLayout, updatedMenu);
const Home = new HomePage(pageLayout);
Home.renderHome();
const contact = new Contacts(pageLayout);

const nav = document.querySelector("#nav");
nav.addEventListener("click", (e) => {
  if (e.target.classList.contains("home")) {
    Home.renderHome();
  } else if (e.target.classList.contains("menu")) {
    Menu.renderMenu();
  } else if (e.target.classList.contains("contact")) {
    contact.renderContacts();
  }
});
