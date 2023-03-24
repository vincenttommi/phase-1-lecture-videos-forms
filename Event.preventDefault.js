//he preventDefault() 
//method of the Event interface tells the user agent that if the event does not get explicitly handled, 
//its default action should not be taken as it normally would be.


//syntax()
//event.preventDefault()


const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);


function checkboxClick(event){

let warn = "preventDefault() wont let you  check this!<br>";

document.getElementById("output-box").innerHTML += warn;

event.preventDefault();

}