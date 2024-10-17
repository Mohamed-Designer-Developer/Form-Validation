let username = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirm-password')
let form = document.querySelector('form')
let span = document.querySelector('span')


// Steps to Master Form Validation 
// 1 - get Familiar.value
// 1 - get Familiar value.length

// validation All Inputs
const validateInputs = (inputs) => {
    inputs.forEach(input => {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
            input.classList.add('success');
        }
    })
}

// Check the email address
const checkEmail = (email) => {
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (reg.test(email.value)) {
        email.classList.add('success');
    } else {
        email.classList.add('error');
    }
}

// Checking the Password 
const checkPassword = (password) => {
    if (password.value.length < 8) {
        password.classList.add('error');
        span.classList.remove('hidden');
        span.classList.add('visible')
    } else if (password.value.length > 20) {
        password.classList.add('error');    
        span.classList.remove('hidden');
        span.classList.add('visible')
    } else {
        span.classList.remove('visible');
        span.classList.add('hidden');
        password.classList.add('success');       
    }
}

// Checking the confirm password 
const checkConfirmPassword = (password, confirmPassword) => { 
    // if (password.value.length !== confirmPassword.value.length) {
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error')
    }
}

// Submit Data 
form.addEventListener('submit', (event) => {
    event.preventDefault()
    validateInputs([username, email, password, confirmPassword])
    checkEmail(email)
    checkPassword(password)
    checkConfirmPassword(password, confirmPassword)
})


// success pop up window or Toastify