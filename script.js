var Name = [];
var Email = [];
var Password = [];
var Phone = [];

let useremail2 = JSON.parse(localStorage.getItem("semail"))
let username2 = JSON.parse(localStorage.getItem("sname"))
let userpass2 = JSON.parse(localStorage.getItem("spw"))
let userphone2 = JSON.parse(localStorage.getItem("sphone"))

function signup() {
    var sname = document.getElementById("sname").value;
    Name.push(sname)
    var semail = document.getElementById("semail").value;
    Email.push(semail)
    var spw = document.getElementById("spw").value;
    Password.push(spw)
    var sphone = document.getElementById("sphone").value;
    Phone.push(sphone);
    localStorage.setItem("sname", JSON.stringify(Name))
    localStorage.setItem("semail", JSON.stringify(Email))
    localStorage.setItem("spw", JSON.stringify(Password))
    localStorage.setItem("sphone", JSON.stringify(Phone))

    alert("signed Up succesfully")



    console.log(Name)
    console.log(Email)
    console.log(Password)
    console.log(Phone)


    document.getElementById("sname").value = "";
    document.getElementById("semail").value = "";
    document.getElementById("spw").value = "";
    document.getElementById("sphone").value = "";


    // window.location.href = "login.html";
    return false;
}



function login() {
    var lemail = document.getElementById("lemail").value;
    var lpw = document.getElementById("lpw").value;

    if (useremail2.indexOf(lemail) === -1) {
        alert("Please Enter Valid Email");


    } else if (userpass2.indexOf(lpw) === -1) {
        alert("Please Enter Valid Password");


    } else {
        alert("Log In Sucessfully")
        window.location.href = "index.html";
    }

    return false;
}

const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

logInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});