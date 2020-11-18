import { baseUrl } from "./api.js";
import displayMessage from "./displayMessage";

const formUrl = baseUrl + "logins";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);




(async function() {

   const container = document.querySelector(".container");

   try {
       const response = await fetch(formUrl);
       const json = await response.json(); 

       document.title = login.name;

       container.innerHTML = "";


       json.forEach(function (login)  {
           container.innerHTML += `<a class=
                                   </a>`;

       });

       console.log(json);
   }
   catch(error) {
       
       console.log(error);
       displayMessage("error", error, ".message-container");
   }

})();

