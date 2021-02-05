
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
        let indexHeading = document.createElement("h1");

        indexHeading.setAttribute("id", "indexHeading");
        indexHeading.textContent = "Welcome to lab 1";
        //indexHeading.className = "fs-4 fw-bold";

        let mainContent = document.querySelector("main");
        mainContent.appendChild(indexHeading);

        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = 
        `<h2>By Brett Tindall and Emeka Okoisama</h2>
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