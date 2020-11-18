import { errorMessage } from "./errorMessage.js";
import { baseUrl } from "./api.js";

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

    message-container.innerHTML = "";

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue.length === 0 || passwordValue.length === 0)  {
       displayMessage("warning", "Invalid values", ".message-container") 
    }

}
   
    



    

