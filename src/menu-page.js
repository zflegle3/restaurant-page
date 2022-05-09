const menuPage = function(contentDiv) {
    console.log("Sugondeez");

    const addMenuItems = function(objIn,selectedDiv) {
        for (let i = 0; i < objIn.items.length; i++){
            //create div container
            let currentItemDiv = document.createElement("div");
            //create title and info p elements
            let currentItem = document.createElement("p");
            currentItem.classList += ["text-med"];
            let currentItemDetails = document.createElement("p");
            currentItemDetails.classList += ["text-sm"];
            currentItem.innerHTML = objIn.items[i];
            currentItemDetails.innerHTML = objIn.itemDetails[i];
            //append p elements to div
            currentItemDiv.appendChild(currentItem);
            currentItemDiv.appendChild(currentItemDetails);
            //append item div to section div 
            selectedDiv.appendChild(currentItemDiv);
        }
    }

    //Menu Header
    const menuH1 = document.createElement("h1");
    menuH1.classList += ["text-lg"];
    menuH1.innerHTML = "Menu";
    //Menu Div
    const menuDiv = document.createElement("div");
    menuDiv.appendChild(menuH1);
    contentDiv.appendChild(menuDiv);

    //Starters Header
    const firstH2 = document.createElement("h2");
    firstH2.classList += ["text-lg"];
    firstH2.innerHTML = "Starters";
    //Starters Div & Content 
    const firstDiv = document.createElement("div");
    firstDiv.appendChild(firstH2);
    contentDiv.appendChild(firstDiv);

    const starters = {
        items: ["Starter 1", "Starter 2", "Starter 3", "Starter 4"], //classes of med text
        itemDetails: ["Add starter details here","Add starter details here","Add starter details here","Add starter details here",], // classes of small text
    }
    addMenuItems(starters,firstDiv);

    //Main Header
    const secondH2 = document.createElement("h2");
    secondH2.classList += ["text-lg"];
    secondH2.innerHTML = "Main Dishes";
    //Main Div
    const secondDiv = document.createElement("div");
    secondDiv.appendChild(secondH2);
    contentDiv.appendChild(secondDiv);
    //Main Content
    const mains = {
        items: ["Main 1", "Main 2", "Main 3", "Main 4"], //classes of med text
        itemDetails: ["Add main details here","Add main details here","Add main details here","Add main details here",], // classes of small text
    }
    addMenuItems(mains,secondDiv);

    //Sides Header
    const thirdH2 = document.createElement("h2");
    thirdH2.classList += ["text-lg"];
    thirdH2.innerHTML = "Sides";
    //Sides Div
    const thirdDiv = document.createElement("div");
    thirdDiv.appendChild(thirdH2);
    contentDiv.appendChild(thirdDiv);
    //Sides Content
    const sides = {
        items: ["Side 1", "Side 2", "Side 3"], //classes of med text
        itemDetails: ["Add sides details here","Add sides details here","Add sides details here"], // classes of small text
    }
    addMenuItems(sides,thirdDiv);


    //Desserts Header
    const fourthH2 = document.createElement("h2");
    fourthH2.classList += ["text-lg"];
    fourthH2.innerHTML = "Desserts";
    //Desserts Div
    const fourthDiv = document.createElement("div");
    fourthDiv.appendChild(fourthH2);
    contentDiv.appendChild(fourthDiv);
    //Desserts Content
    const desserts = {
        items: ["Dessert 1", "Dessert 2"], //classes of med text
        itemDetails: ["Add sides details here","Add sides details here"], // classes of small text
    }
    addMenuItems(desserts,fourthDiv);

    //Drinks Header
    //Drinks Div & Content 
    
}

export { menuPage };