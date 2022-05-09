console.log("bofa");

//Importing Page Modules
import { landingPage } from './landing-page';
import { pageUpdate } from './pageUpdate.js';
//import { rezzyPage } from './rezzy-page';

//Importing Page Styles 
import './styles.css'

//Select Content Container
const containerDiv = document.querySelector("#container")

//Create 3 divs to add to container div
const headerDiv = document.createElement("div");
headerDiv.classList += "header";
const contentDiv = document.createElement("div");
contentDiv.classList += "landing";
contentDiv.id = "content";
const footerDiv = document.createElement("div");
footerDiv.classList += "footer";
containerDiv.appendChild(headerDiv);
containerDiv.appendChild(contentDiv);
containerDiv.appendChild(footerDiv);

//Header Tabs
//Home
const homeTab = document.createElement("p");
homeTab.classList += ["tab landing"];
homeTab.innerHTML = "Home";
//Menu
const menuTab = document.createElement("p");
menuTab.classList += ["tab menu"];
menuTab.innerHTML = "Menu";
//About
const aboutTab = document.createElement("p");
aboutTab.classList += ["tab about"];
aboutTab.innerHTML = "About";
//Rezervations >> combining with About, but leaving functionality for later addition if needed
//const rezzyTab = document.createElement("p");
//rezzyTab.classList += ["tab rezzy"];
//rezzyTab.innerHTML = "Reservations";
//Append All
headerDiv.appendChild(homeTab);
headerDiv.appendChild(menuTab);
headerDiv.appendChild(aboutTab);
//headerDiv.appendChild(rezzyTab);

//Footer Content
//Footer Divs
const footDivLeft = document.createElement("div");
footDivLeft.classList += ["foot-left"];
const footDivRight = document.createElement("div");
footDivRight.classList += ["foot-right"];
footerDiv.appendChild(footDivLeft);
footerDiv.appendChild(footDivRight);
//Left Div Content
const hoursUl = document.createElement("ul");
let hoursArr = ["Hours:","Sun - Mon:", "Closed","Tues - Thurs:","11:00 AM - 10:00 PM","Fri - Sat:","11:00 AM - 11:00 PM"]
for (let i = 0; i<hoursArr.length; i++) {
    let tempLi = document.createElement("li");
    tempLi.innerHTML = hoursArr[i];
    hoursUl.appendChild(tempLi);
}
footDivLeft.appendChild(hoursUl);
//Right Div Content 
const titleContact = document.createElement("p")
const emailContact = document.createElement("p")
const phoneContact = document.createElement("p")
const siteContact = document.createElement("p")
titleContact.innerHTML = "Contact Us:";
emailContact.innerHTML = "restaurantEmail@gmail.com";
phoneContact.innerHTML = "404-XXX-XXXX";
siteContact.innerHTML = "Site by Zach Flegle";
emailContact.classList = "text-sml";
phoneContact.classList = "text-sml";
siteContact.classList = "text-sml";
footDivRight.appendChild(titleContact);
footDivRight.appendChild(emailContact);
footDivRight.appendChild(phoneContact);
footDivRight.appendChild(siteContact);

//Load Pages
//Event Listeners for tabs
homeTab.addEventListener("click",pageUpdate)
menuTab.addEventListener("click",pageUpdate)
aboutTab.addEventListener("click",pageUpdate)
//rezzyTab.addEventListener("click",pageUpdate)
//Initial Lanidn page loading 
landingPage(contentDiv);

