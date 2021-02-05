
"use strict";


(function()
{

    function displayHome()
    {
        let indexHeading = document.createElement("h1");

        indexHeading.setAttribute("id", "indexHeading");
        indexHeading.textContent = "Welcome to lab 1";
        //indexHeading.className = "fs-4 fw-bold";

        let mainContent = document.querySelector("main");
        mainContent.appendChild(indexHeading);

        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = 
        `<h4>By Brett Tindall and Emeka Okoisama</h4>
        <p id="paragraphThree"> This is our first lab submission </p>`;

        mainContent.append(newDivTag);

        
    }

    function displayContact()
    {
      let contactHeading = document.createElement("h1");

      contactHeading.setAttribute("id", "contactHeading");
      contactHeading.textContent = "Enter a Contact";

      let mainContent = document.querySelector("main");
      mainContent.appendChild(contactHeading);

      let newDivTag = document.createElement("div");
      newDivTag.innerHTML = 
      `<div id="messageArea"></div>

      <div class="row justify-content-lg-center g-3">
        <form class="col-lg-6 col-md-10 col-sm-10">

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Full Name </span>
            <input id="fullName" type="text" class="form-control" aria-label="Full Name" aria-describedby="Full Name Input"
            name="fullName" required>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Contact Number</span>
            <input id="contactNumber" type="tel" class="form-control" aria-label="Contact Number" aria-describedby="Contact Number Input"
            name="contactNumber" required>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
            <input id="emailAddress" type="email" class="form-control" aria-label="Email Address" aria-describedby="Email Address Input"
            name="emailAddress" required>
          </div>

          <button id="sendButton" type="submit" class="btn btn-primary"><i class="fas fa-envelope fa-lg"></i> Send</button>
          <button id="cancelButton" type="reset" class="btn btn-warning"><i class="fas fa-undo fa-lg"></i> Cancel</button>
        </form>
      </div>`;

      mainContent.append(newDivTag);


      let sendButton = document.getElementById("sendButton");

        sendButton.addEventListener("click", function(event){
            
          window.location.href = '/index.html';

        });

    }

    function displayFooter()
    {
      let mainContent = document.querySelector("main");

      let newFooterTag = document.createElement("footer");

      newFooterTag.innerHTML = 
      `
      <footer>
        <nav class="navbar fixed-bottom navbar-light bg-light">
            <div class="container-fluid">
              <h4><i class="far fa-copyright fa-lg"></i> Copyright 2021.</h4>
            </div>
          </nav>
    </footer>
      `

      mainContent.append(newFooterTag);

    }

    function addHumanResourcesButton()
    {

      let aboutUsLink = document.getElementById("aboutUsLink");

      let newListItem = document.createElement("li");

      newListItem.innerHTML = 
      `
      <li class="nav-item">
        <a class="nav-link" id="aboutUsLink" aria-current="page" href="about.html"><i class="fas fa-info fa-lg"></i> About Us</a>
      </li>
      `

      aboutUsLink.append(newListItem);

    }

    function Start()
    {
        console.log("App Started...");

        let productsButton = document.getElementById("productsLink");

        productsButton.textContent = "Projects";

        

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

    displayFooter();

    window.addEventListener("load", Start);

})();