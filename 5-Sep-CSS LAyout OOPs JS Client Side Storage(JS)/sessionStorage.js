const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');
const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');



    form.addEventListener('submit', function(e) {
         e.preventDefault();
        });

    submitBtn.addEventListener('click', function() {
         localStorage.setItem('name', nameInput.value);
         nameDisplayCheck();
        });

    function   nameDisplayCheck(){
        console.log(document.getElementById("entername").value);
        }

    forgetBtn.addEventListener('click', function() {
        localStorage.removeItem('name');
        nameDisplayCheck();
        });