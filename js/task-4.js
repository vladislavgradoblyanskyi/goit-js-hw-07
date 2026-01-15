const form  = document.querySelector(".login-form");
const elements = form.elements;
const email = elements.email;
const password = elements.password;
form.addEventListener("submit",(event)=>
{
    event.preventDefault();
    if(email.value.trim() == "" || password.value.trim() == "" ){
        alert('All form fields must be filled in');
    }
    else{
        const Object = {
        email: `${email.value.trim()}`,
        password: `${password.value.trim()}`
    }
        console.log(Object);}
    form.reset();
})
