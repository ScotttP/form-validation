let email = document.querySelector('#email');
let errorMessage = document.querySelectorAll('.error')

email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch) {
        errorMessage[0].innerHTML = 'Please type a valid email address.'
        
    } else {
        //email.setCustomValidity("");
        errorMessage[0].innerHTML = ''
        console.log('nothing wrong')
    }
});


