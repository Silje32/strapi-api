export function errorMessage(event)  {
    event.preventDefault();


    if(validateEmail(email.value) === true)  {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
 
 }

}
   