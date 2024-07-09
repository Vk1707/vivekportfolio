const scriptURL = 'https://script.google.com/macros/s/AKfycbzhM3-MHm7MHz0K-BmnUZab98Znzklhhes2FuheAPM9Hx9SHYhsG8cghGEM7E2pup96lg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
