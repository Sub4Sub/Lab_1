
"use strict";


(function()
{

    function displayHome()
    {
        /*
        let paragraphOneText =
          "This is a simple site to demonstrate DOM Manipulation for ICE 1";

          let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5";
*/
        // STEP 1 - Create a new Element
        let indexHeading = document.createElement("h1");
        // STEP 2 - configure the new Element
        indexHeading.setAttribute("id", "indexHeading");
        indexHeading.textContent = "This is my second paragraph";
        //indexHeading.className = "fs-4 fw-bold";
        // STEP 3 - Target the Parent Element
        let mainContent = document.querySelector("main");
        // STEP 4 - append the new element to the parent
        mainContent.appendChild(indexHeading);

        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = 
        `<h2>This is my second heading</h2>
        <p id="paragraphThree"> This is the Third Paragraph </p>`;

        mainContent.append(newDivTag);
    }

    function Start()
    {
        console.log("App Started...");

        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
        }
        
    }

    window.addEventListener("load", Start);

})();