
/* ======================================================================
Login System
====================================================================== */
// Loop through Array of Objects
var objPeople = [
    { // Object @ 0 index
        username: "michael",
        password: "michael0918"
    },
    { // Object @ 1 index
        username: "JingJune",
        password: "Jingjune24"
    },
    { // Object @ 2 index
        username: "bugfix",
        password: "bugfix123"
    }   

]

function getform1() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(var i = 0; i < objPeople.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
        if(username == objPeople[i].username && password == objPeople[i].password) {
            window.location.replace("JingJune_Profile.html");
            console.log(username + " is logged in.");
            // stop the function if this is found to be true
            return
        }

        else if (username == '' && password == '') {
            alert("Please enter Username and Password.");
            console.log("Please enter Username and Password.");
            return
        }

        else if (username == username && password == '') {
            alert("Please enter Your Password.");
            console.log("Please enter Your Password.");
            return
        }

        else if (username == '' && password == password) {
            alert("Please enter Your Username.");
            console.log("Please enter Your Username.");
            return
        }
    }
        alert("Incorrect Username or Password");
        console.log("Incorrect Username or Password");
        this.password.value = '';
}

/* ======================================================================
Login System [MOBILR PHONE]
====================================================================== */
// Loop through Array of Objects
var objPeople2 = [
    { // Object @ 0 index
        username_mobile: "michael",
        password_mobile: "michael0918"
    },
    { // Object @ 1 index
        username_mobile: "JingJune",
        password_mobile: "Jingjune24"
    },
    { // Object @ 2 index
        username_mobile: "bugfix",
        password_mobile: "bugfix123"
    }   

]

function getform2() {
    var username_mobile = document.getElementById('username_mobile').value
    var password_mobile = document.getElementById('password_mobile').value

    for(var i = 0; i < objPeople2.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
        if(username_mobile == objPeople2[i].username_mobile && password_mobile == objPeople2[i].password_mobile) {
            window.location.replace("JingJune_Profile.html");
            console.log(username_mobile + " is logged in.");
            // stop the function if this is found to be true
            return
        }

        else if (username_mobile == '' && password_mobile == '') {
            alert("Please enter Username and Password.");
            console.log("Please enter Username and Password.");
            return
        }

        else if (username_mobile == username_mobile && password_mobile == '') {
            alert("Please enter Your Password.");
            console.log("Please enter Your Password.");
            return
        }

        else if (username_mobile == '' && password_mobile == password_mobile) {
            alert("Please enter Your Username.");
            console.log("Please enter Your Username.");
            return
        }
    }
        alert("Incorrect Username or Password");
        console.log("Incorrect Username or Password");
        this.password_mobile.value = '';
}

/* ======================================================================
    Assistant
====================================================================== */

document.getElementById("popupwindow").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
});

document.getElementById("closepopup").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

/* DESKTOp */

document.getElementById("username").addEventListener("keydown", function(){
    if(event.key === "Enter") {
        getform1();
    }
});

document.getElementById("password").addEventListener("keydown", function(){
    if(event.key === "Enter") {
        getform1();
    }
});

/* MOBILE PHONE */

document.getElementById("username_mobile").addEventListener("keydown", function(){
    if(event.key === "Enter") {
        getform2();
    }
});

document.getElementById("password_mobile").addEventListener("keydown", function(){
    if(event.key === "Enter") {
        getform2();
    }
});

function stopback() {
    window.history.forward();
}







