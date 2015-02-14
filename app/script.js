(function() {

// APP
    var signupText = document.getElementById('signupText'), // To select the 'Sign up' div
    signinText = document.getElementById('signinText'), // To select the 'Sign in' div
    form = document.getElementById('form'), // To select the form
    fullName = document.getElementsByClassName('fullName'), // To select the full name label and input field
    country = document.getElementsByClassName('country'), // To select the country label and input field
    top = document.getElementById('top'), // To select the top semi-circle
    box = document.getElementById('box'), // To select the main sign up/in box
    mainButton = document.getElementById('mainButton'),
    input = document.getElementsByClassName('input'),
    email = document.getElementsByClassName('email'),
    defaultval = [];



    top.onmousedown = (function () {
        this.style.marginTop = "-160px";
        box.style.marginTop = "130px";
    });

    top.onmouseup = (function () {
        this.style.marginTop = "-180px";
        box.style.marginTop = "150px";
    });

    signupText.onclick = (function () { // Function to set the behaviour of 'Sign up' div on clicking
        signinText.setAttribute('class','inactiveTab'); // To add class 'inactiveTab' to 'Sign in' div
        signupText.setAttribute('class',''); // To remove class 'inactiveTab' from 'Sign up' div
        for(var i = 0; i < fullName.length; i++) { // Loop to display elements with class 'fullName'
        fullName[i].style.display = "block";
        }
        for(var i = 0; i < country.length; i++) { // Loop to display elements with class 'country'
        country[i].style.display = "block";
        }
        // Necessary CSS/HTML changes for the transition from Sign in to Sign up
        form.style.marginTop = "0";
        mainButton.setAttribute('value','Create Account');
        mainButton.style.marginLeft = "-30px";
        mainButton.style.marginRight = "0";
    });

    signinText.onclick = (function () { // Function to set the behaviour of 'Sign in' div on clicking
        signupText.setAttribute('class','inactiveTab'); // To add class 'inactiveTab' to 'Sign up' div
        signinText.setAttribute('class',''); // To remove class 'inactiveTab' from 'Sign in' div
        for(var i = 0; i < fullName.length; i++) { // Loop to hide elements with class 'fullName'
        fullName[i].style.display = "none";
        }
        for(var i = 0; i < country.length; i++) { // Loop to hide elements with class 'fullName'
        country[i].style.display = "none";
        }
        // Necessary CSS/HTML changes for the transition from Sign up to Sign in
        form.style.marginTop = "35px";
        mainButton.setAttribute('value','Log In');
        mainButton.style.marginLeft = "0";
        mainButton.style.marginRight = "110px";
    });

    // For showing/hiding default form values
    for(var i = 0; i < input.length; i++) {
        input[i].onfocus = (function  () {
            defaultval[i] = this.value;
            this.setAttribute('value','');
            this.style.color = "black";
        });
        input[i].onblur = (function  () {
            if (this.value === '') {
                this.style.color = "#888888";
                this.setAttribute('value',defaultval[i]);
            }
        });
    }





// FIREBASE

    var root = new Firebase("https://guitarbaba.firebaseio.com"); // To create a root reference to our key 'guitarbaba'
    var users = root.child('users'); // To create a reference to the child key 'users'

    top.onclick = (function () {
        users.set({ // Firebast function to 'set' key-value pairs for 'users' key

            abhishek: { // first user added by default
                fullName: "Abhishek Angira",
                email: "abhishekangira@hotmail.com",
                country: "india",
                password: "********",
                naukri: "none"
            },

            abhinav: { // second user added by deafault
                fullName: "Abhinav Angira",
                email: "abhinavangira@chumail.com",
                country: "india",
                password: "*******",
                naukri: "none"
            }
        });
    });



}());
