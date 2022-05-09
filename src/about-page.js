import { pageUpdate } from "./pageUpdate";

const aboutPage = function(mainDiv) {
    console.log("CDeez");

    //Container Divs
    const aboutTopDiv = document.createElement("div");
    aboutTopDiv.classList += ["about-pg-top"];
    const formBottomDiv = document.createElement("div");
    formBottomDiv.classList += ["about-pg-bottom"];
    mainDiv.appendChild(aboutTopDiv);
    mainDiv.appendChild(formBottomDiv);

    //About Top DIV
    const aboutTitle = document.createElement("h1");
    aboutTitle.classList += ["text-lg"];
    aboutTitle.innerHTML = "About Us";
    aboutTopDiv.appendChild(aboutTitle);

    const aboutContent = document.createElement("p");
    aboutContent.classList += ["text-sm"];
    aboutContent.innerHTML = "ADD A PARAGRAPH OF CONTENT ABOUT A RESTAURANT";
    aboutTopDiv.appendChild(aboutContent);

    //Form Bottom Div
    //Form
    const rezzyForm = document.createElement("form");
    rezzyForm.setAttribute("novalidate",true);
    rezzyForm.id = "reservation-form";
    rezzyForm.method = "get";
    rezzyForm.action = ""; //link to database later
    formBottomDiv.appendChild(rezzyForm);
    //Form Title
    const formTitle = document.createElement("h1");
    formTitle.classList += ["text-lg"];
    formTitle.innerHTML = "Visit Us";
    rezzyForm.appendChild(formTitle);
    //Name
    const nameLabel = document.createElement("label");
    nameLabel.innerHTML = "Name:"
    nameLabel.for = "name";
    const rezzyName = document.createElement("input");
    rezzyName.id = "name"
    rezzyName.type = "text";
    rezzyName.value = "First Last";
    rezzyForm.appendChild(nameLabel);
    rezzyForm.appendChild(rezzyName);
    //Email
    const emailLabel = document.createElement("label");
    emailLabel.innerHTML = "Email:"
    emailLabel.for = "email";
    const rezzyEmail = document.createElement("input");
    rezzyEmail.id = "email";
    rezzyEmail.type = "email";
    rezzyEmail.value = "Email";
    rezzyForm.appendChild(emailLabel);
    rezzyForm.appendChild(rezzyEmail);
    //# of people
    const qtyLabel = document.createElement("label");
    qtyLabel.innerHTML = "Reservation Size:"
    qtyLabel.for = "quantity";
    const rezzySize = document.createElement("input");
    rezzySize.id = "quantity"
    rezzySize.type = "number";
    rezzySize.min = 1;
    rezzyForm.appendChild(qtyLabel);
    rezzyForm.appendChild(rezzySize);
    //Date
    const dateLabel = document.createElement("label");
    dateLabel.innerHTML = "Date & Time:"
    dateLabel.id = "date";
    const rezzyDate = document.createElement("input");
    rezzyDate.id = "date";
    rezzyDate.type = "datetime-local";
    rezzyForm.appendChild(dateLabel);
    rezzyForm.appendChild(rezzyDate);
    //Submit Button 
    const rezzyBtn = document.createElement("button");
    rezzyBtn.type = "submit";
    //rezzyBtn.form = "" //update when linking form 
    rezzyBtn.innerHTML = "Find a Table"
    //rezzyBtn.classList += ["text-med home"];
    rezzyForm.appendChild(rezzyBtn);

    //rezzyBtn.addEventListener("click",pageUpdate)


}

export { aboutPage };