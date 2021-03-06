let email = document.querySelector('#email');
let zipCode = document.querySelector('#zipCode')
let country = document.querySelector('#country')
let password = document.querySelector('#password')
let passwordConfirmation = document.querySelector('#passwordConfirmation')
let inputFields = document.querySelectorAll('input')
let errorMessage = document.querySelectorAll('.error')

inputFields.forEach((input)=>{
    input.addEventListener('input', (e) => {
        if (input.type === 'email'){
            if (email.validity.typeMismatch || email.validity.patternMismatch || email.validity.badInput) {
                errorMessage[0].innerText = 'Please enter a valid email address.'
                errorMessage[0].style.display = 'block'
            } else if (email.validity.tooShort || email.validity.tooLong){
                errorMessage[0].innerText = 'Your email address must be at least 5 characters'
                errorMessage[0].style.display = 'block'
            } else {
                errorMessage[0].innerHTML = ''
                errorMessage[0].style.display = 'none'
            }
        }

        if (input.id === 'country' && input.type === 'text' ){
            if (country.validity.typeMismatch || country.validity.patternMismatch || country.validity.badInput){
                errorMessage[1].innerText = 'Please enter a valid country using only letters'
                errorMessage[1].style.display = 'block'
            }else if (country.validity.tooShort){
                errorMessage[1].innerText = 'Must be at least 3 characters'
                errorMessage[1].style.display = 'block'
            }else {
                errorMessage[1].innerText = ''
                errorMessage[1].style.display = 'none'
            }
        }

        if (input.id === 'zipCode' && input.type === 'tel' ){
            if (zipCode.validity.typeMismatch || zipCode.validity.patternMismatch || zipCode.validity.badInput){
                errorMessage[2].innerText = 'Please enter a valid zip code.'
                errorMessage[2].style.display = 'block'
            }else if (zipCode.validity.tooLong || zipCode.validity.tooShort){
                errorMessage[2].innerText = 'Zip Code must be 5 characters long'
                errorMessage[2].style.display = 'block'
            }else {
                errorMessage[2].innerText = ''
                errorMessage[2].style.display = 'none'
            }
        }

        if (input.id === 'password' && input.type === 'password' ){
            if (password.validity.patternMismatch){
                errorMessage[3].innerText = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                errorMessage[3].style.display = 'block'
            }else {
                errorMessage[3].innerText = ''
                errorMessage[3].style.display = 'none'
            }
            
        }
        if (input.id === 'passwordConfirmation' && input.type === 'password' ){
            
            if (passwordConfirmation.value !== password.value || passwordConfirmation.value.length <= 0 ) {
                errorMessage[4].innerText = 'Your Password doesnt match'
                errorMessage[4].style.display = 'block'
                passwordConfirmation.setAttribute('class','passwordConfirmationInvalid')
            }else if (passwordConfirmation.value === password.value){
                errorMessage[4].innerText = ''
                errorMessage[4].style.display = 'none'
                passwordConfirmation.setAttribute('class','passwordConfirmationValid')
                
            }
            
        }
        

    })
});



