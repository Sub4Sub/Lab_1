
"use strict";


(function()
{

    function displayHome()
    {
        let paragraphOneText =
          "This is a simple site to demonstrate DOM Manipulation for ICE 1";

          let paragraphOneElement = document.getElementById("paragraphOne");

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