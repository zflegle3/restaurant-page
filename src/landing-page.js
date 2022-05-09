import { pageUpdate } from './pageUpdate.js';

const landingPage = function(contentDiv) {
    
    console.log("sugma");

    //Logo Container
    const logoDiv = document.createElement("div");
    logoDiv.classList += ["logo-div"];
    //logoDiv.innerHTML = "Restaurant Name";

    //Logo Header
    const logoH1 = document.createElement("h1");
    logoH1.classList += ["text-lg"];
    logoH1.innerHTML = "Taqueria Cantina";

    //Logo Sub Header Content
    const logoH2 = document.createElement("h2");
    logoH2.classList += ["text-med"];
    logoH2.innerHTML = "tagline and some catchy content";

    //Logo Button
    const logoBtn = document.createElement("button");
    logoBtn.classList += ["text-med about"];
    logoBtn.innerHTML = "Make a Reservation";
    logoBtn.addEventListener("click",pageUpdate)

    logoDiv.appendChild(logoH1);
    logoDiv.appendChild(logoH2);
    logoDiv.appendChild(logoBtn);
    contentDiv.appendChild(logoDiv);
}

export { landingPage };