import { landingPage } from './landing-page';
import { menuPage } from './menu-page';
import { aboutPage } from './about-page';

const pageUpdate = function(e) {
    //selects same contentDiv from index.js as local variable 
    let contentDiv = document.getElementById("content");
    //while elements remain in content div, remove them 
    while (contentDiv.firstChild) {
        contentDiv.firstChild.remove();
    }
    //Call new page script w/ event input to populate div
    //toggle off current class of content div
    switch (e.srcElement.classList[1]) {
        case "landing":
            toggleClass("landing");
            landingPage(contentDiv);
            break;
        case "menu":
            toggleClass("menu");
            menuPage(contentDiv);
            break;
        case "about":
            toggleClass("about");
            aboutPage(contentDiv);
            break;
        //case "rezzy":
            //rezzyPage(contentDiv);
        //break;
    }
}

//toggle on classlist 
const toggleClass = function(classIn) {
    let tempElement = document.getElementById("content");
    tempElement.classList.toggle(tempElement.classList[0]); //turn off current class
    tempElement.classList.toggle(classIn); //add new class
}

export { pageUpdate };