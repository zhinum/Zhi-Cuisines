import { MenuData } from "./menuData";

import croissantImg from "./images/croissant.jpg";
import breadImg from "./images/bread.jpg";
import burgerImg from "./images/burger.png";
import chineseImg from "./images/chinese.jpg";
import jellofImg from "./images/jellof.jpg";
import pizzaImg from "./images/pizza.jpg";
import chapmanImg from "./images/Chapman.jpg";
import mockImg from "./images/mock-tail.jpg";
import guinessImg from "./images/guiness.jpg";
new MenuData("Golden Croissant", croissantImg, "pastry", "N15,000");
new MenuData("Zhi Special Burger", burgerImg, "pastry", "N5,000");
new MenuData("Chinese Rice", chineseImg, "grain", "N25,000");
new MenuData("Smoky Jellof Rice", jellofImg, "grain", "N10,000");
new MenuData("Pepperoni Pizza", pizzaImg, "pastry", "N7500");
new MenuData("Swirl Bread", breadImg, "pastry", "N8500");
new MenuData("Chapman", chapmanImg, "drink", "N8500");
new MenuData("Mocktails", mockImg, "drink", "N4500");
new MenuData("Guiness", guinessImg, "drink", "N6500");

export const updatedMenu = MenuData.allFood;
