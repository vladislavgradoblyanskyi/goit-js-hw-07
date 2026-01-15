let input = document.querySelector("#name-input");
let span = document.querySelector("#name-output");

input.addEventListener("input",(event)=> 
{
    if(input.value == "" || input.value.trim()== ""){
        span.textContent = "Anonymous";
    }
    else{
        span.textContent = `${(input.value).trim()}`;
    }
}
);