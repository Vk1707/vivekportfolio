const scriptURL = 'https://script.google.com/macros/s/AKfycbzhM3-MHm7MHz0K-BmnUZab98Znzklhhes2FuheAPM9Hx9SHYhsG8cghGEM7E2pup96lg/exec'

const form = document.forms['contact-form']
const subButton = document.getElementById("subButton");

form.addEventListener('submit', e => {
 e.preventDefault()
 subButton.innerHTML = "Submiting.."
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank You! Your Form is Submitted Successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})

