// DOM selecting
let userName = document.getElementById("name"),
    userEmail = document.getElementById("email"),
    userPassword = document.getElementById("password"),
    userConfirmPassword = document.getElementById("confirm-password"),
    span =document.querySelector('span'),
    form = document.querySelector('form');


// checking the inputs 
const checkInput = (inputs) => {
    inputs.forEach(input => {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
            input.classList.add('success');
        }
        // console.log(input.value);
    })
}

const checkEmail = (email) => {
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (reg.test(email.value)) {
        email.classList.add('success');
    } else {
        email.classList.add('error');
    }
}

// checking the Password 
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

// checking the confirm password 
const checkConfirmPassword = (password, confirmPassword) => { 
    if (password.value.length !== confirmPassword.value.length) {
        confirmPassword.classList.add('error');
    }
}



//submit functions
form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInput([userName, userEmail, userPassword, userConfirmPassword]);
    checkEmail(userEmail)
    checkPassword(userPassword)
    checkConfirmPassword(userPassword, userConfirmPassword);
    // console.log('submited');
});
