function  logSubmit(event){

log.textContent =  `Form Submitted! Timestamp: ${event.timeStamp}`;
event.preventDefault();
}

//preventDefault() method cancels the event if it is cancelable,
// meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link,
// prevent the link from following the URL


const  form =  document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);