import { errorMessage } from "./errorMessage.js";
import { baseUrl } from "./api.js";
import { saveToken, saveUser } from "./storage.js";
import displayMessage from "./displayMessage.js";


const form = document.querySelector("#contactForm");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");


function validateEmail(email)  {

    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


form.addEventListener("submit", validateForm);


function validateForm(event)  {
    event.preventDefault();

    //message-container.innerHTML = "";

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    // When the form is submitted, add simple validation that checks that there is at least a value in each input.

    if(emailValue.length === 0 || passwordValue.length === 0)  {
       return displayMessage("warning", "Invalid values", ".message-container") 
    }

    login(emailValue, passwordValue);

}

 
// If validation passes, make a request to your local Strapi API to login.

async function Login(email, password)  {
     
    const url = baseUrl + "auth/local";

    const data = JSON.stringify({ identifier: email, password: password })

    const options = {
       method: "POST", 
       body: "data", 
       headers: {
           "Content-Type" : "application.json"
       }


    };


    try {
        const response = await fetch(url, options);

        const json = response.json();
        console.log(json)


        if(json.user) {

            saveToken(json.jwt);
            saveUser(json.user);

        // If the login is successful, store the returned JWT in localStorage and redirect to another page:    
            location.href = "/";
    }

       // If the login is not successful, display a message indicating that to the user. 
        if(json.error) {
            displayMessage("warning", "Wrong email or password", ".message-container") 
    }

    }

    catch(error)  {

         console.log(error);
    } 

}    


    

