/*
* Name: Brett Tindall & Emeka Okoisama
* Student Id: 100708109 & 
* Date Completed: 2021-02-05
*/

"use strict"; 

//IIFE - Immediately Invoked Function Expression
(function()
{

    /*
      Function that displays the home page's content
    */
    function displayHome()
    {
      //Creating header element
        let indexHeading = document.createElement("h1");

        //Setting headers id and giving it text content
        indexHeading.setAttribute("id", "indexHeading");
        indexHeading.textContent = `Welcome to lab 1`;

        //Using jquery to select main element
        let mainContent = document.querySelector("main");
        //Appending header to end of main
        mainContent.appendChild(indexHeading);

        //Creating a div element that contains the pages content
        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = 
        `<h4>By Brett Tindall and Emeka Okoisama</h4>
        <p id="paragraphThree">
        Hello, welcome to our first lab submission for Webd 6201. This website consists of multiple web pages that give information about us
        and help demonstrate our prowess with javascript.
        </p>`;

        //Appending the div to the end of main
        mainContent.append(newDivTag);

        
    }

    /*
      Function that displays the project page's content
    */
    function displayProjects()
    {
      //Creating header element
        let projectHeading = document.createElement("h1");

        //Setting headers id and giving it text content
        projectHeading.setAttribute("id", "projectHeading");
        projectHeading.textContent = `Example Projects:`;

        //Using jquery to select main element
        let mainContent = document.querySelector("main");
        //Appending header to end of main
        mainContent.appendChild(projectHeading);

        //Creating a div element that contains the pages content
        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = 
        `<table class="table">
        <thead>
          <tr>
            <th scope="col">Project Title</th>
            <th scope="col">Project Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Modulus</th>
            <td>
              <p>
                The first project displayed on our website is a windows point form application called Modulus. The purpose of modulus is to 
                help organize a food businesses inventory and to keep track of any product being wasted. This is achieved by first storing all of 
                the food and inventory in a database, then every week all unused and/or wasted food is tracked in a report. Finally, 
                these reports are merged together and displayed as a monthly report. 
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">Webd 3201 website</th>
            <td>
              <p>
                The second project to be displayed on our website is a website that utilizes HTML, php and postgres sql to create a website that 
                 allows salesperson so sign-in and log information about their sales history. This site includes multiple user types, such as admin
                 and salesperson, and contains many functions and features, such as resetting a users password, adding clients, displaying user or client info in tables and 
                 logging calls with clients in real time.
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">Cobol based data processor</th>
            <td>
              <p>
                The final project being displayed on our website is a data processor that was creating using the language cobol. This application
                would take a .dat file containing raw data on a stores transactions as its input and process it by first validating the data, then
                the file is split into 2 .dat files where one contains all return transactions and one contains all sales transactions. Finally 
                both files are processed, formatted and displayed in 2 separate reports.
              </p>
            </td>
          </tr>
        </tbody>
      </table>`;

        //Appending the div to the end of main
        mainContent.append(newDivTag);

        
    }

    /*
      Function that displays the services page's content
    */
    function displayServices()
    {
      //Creating header element
        let serviceHeading = document.createElement("h1");

        //Setting headers id and giving it text content
        serviceHeading.setAttribute("id", "serviceHeading");
        serviceHeading.textContent = `Services`;

        //Using jquery to select main element
        let mainContent = document.querySelector("main");
        //Appending header to end of main
        mainContent.appendChild(serviceHeading);

        //Creating a div element that contains the pages content
        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = 
        `
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">List of Skills</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Emeka Okoisama</th>
      <td>Search Engine optimization, Web Design and Testing and debugging.</td>
      <td><img src="./img/me.png" alt="" border=3 height=100 width=100></img></td>
    </tr>
    <tr>
      <th scope="row">Brett Tindall</th>
      <td>Graphic Design, working with Hosting and working with databases.</td>
      <td><img src="./img/me.png" alt="" border=3 height=100 width=100></img></td>
    </tr>
  </tbody>
</table>`;

        //Appending the div to the end of main
        mainContent.append(newDivTag);

        
    }

    /*
      Function that displays the about us page's content
    */
   function displayAbout()
   {
      //Creating header element
      let aboutHeading = document.createElement("h1");

      //Setting headers id and giving it text content
      aboutHeading.setAttribute("id", "aboutHeading");
      aboutHeading.textContent = `About Us`;
   }
    /*
      Function that displays the contact page's content
    */
    function displayContact()
    {
      //Creating header element
      let contactHeading = document.createElement("h1");

      //Setting headers id and giving it text content
      contactHeading.setAttribute("id", "contactHeading");
      contactHeading.textContent = "Enter a Contact";

      //Using jquery to select main element
      let mainContent = document.querySelector("main");
      //Appending header to end of main
      mainContent.appendChild(contactHeading);

      //Creating a div element that contains the pages content
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
        
      //Appending the div to the end of main
      mainContent.append(newDivTag);

      //Selecting the send button
      let sendButton = document.getElementById("sendButton");

        //Creating an event for when the send button is clicked
        sendButton.addEventListener("click", function(event){
            
          window.location.href = './index.html'; //Redirect user to index

        });

    }

    /*
      Function that displays the fixed footer at the bottom of the page
    */
   function displayHeader()
   {
     //Selecting the body tag
     let mainContent = document.querySelector("body");

     //Creating a header tag 
     let newHeaderTag = document.createElement("header");

     //Filling header tag inner html with header content
     newHeaderTag.innerHTML = 
     `
     <header>
      <!-- Main Navigation -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">WEBD6201</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0" id ="headerList">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index.html"><i class="fas fa-home fa-lg"></i> Home</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" id="productsLink" aria-current="page" href="products.html"><i class="fas fa-cog fa-lg"></i> Products</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="services.html"><i class="fas fa-map fa-lg"></i> Services</a>
                </li>

                <li class="nav-item" id="aboutUsList">
                  <a class="nav-link" id="aboutUsLink" aria-current="page" href="about.html"><i class="fas fa-info fa-lg"></i> About Us</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="contact.html"><i class="fas fa-phone fa-lg"></i> Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </header>
     `
    //Appending the header to the top of the body tag
     mainContent.prepend(newHeaderTag);

   }

    /*
      Function that displays the fixed footer at the bottom of the page
    */
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

    /*
      Function that adds a button to the human resources page
    */
    function addHumanResourcesButton()
    {

      let aboutUsLink = document.getElementById("aboutUsList");

      let newListItem = document.createElement("li");

      newListItem.innerHTML = 
      `
      <li class="nav-item">
        <a class="nav-link" id="HumanResourcesLink" aria-current="page" href="human-resources.html"><i class="fas fa-globe fa-lg"></i> Human Resources</a>
      </li>
      `

      aboutUsLink.after(newListItem);

    }

    /*
      Function that changes the products button's text to projects
    */
   function alterProductsButton()
   {

    //Selecting the 'products' list item button in the header
    let productsButton = document.getElementById("headerList").childNodes[3];

    //Creating a new list item
    let newListItem = document.createElement("li");

    //Setting the new list items inner html to the new button/ list item
    newListItem.innerHTML = 
   `
   <li class="nav-item">
               <a class="nav-link" aria-current="page" href="products.html"><i class="fas fa-cog fa-lg"></i> Projects</a>
             </li>
   `

   //Replacing the products button with the projects button 
    productsButton.replaceChild(newListItem, productsButton.childNodes[1]);

   }

   /*
      Function that run when the page loads 
    */
    function Start()
    {
        console.log("App Started..."); //Initial console log
        
        displayHeader(); //Calling displayHeader() to display the header

        alterProductsButton(); //Calling alterProductButton() to change the products button to projects button

        addHumanResourcesButton(); //Calling addHumanResources() to add the human resources button

        //Switch case that tests the documents title and calls the appropriate function
        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Products":
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
    
    displayFooter(); //Calling the display footer function to display the footer

    //Calling the start function when loaded
    window.addEventListener("load", Start);

})();