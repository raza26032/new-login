var Name = [];
var Email = [];
var Password = [];
var Phone = [];

function signup() {
    var sname = document.getElementById("sname").value;
    var semail = document.getElementById("semail").value;
    var spw = document.getElementById("spw").value;
    var sphone = document.getElementById("sphone").value;

    Name.push(sname)
    Email.push(semail)
    Password.push(spw)
    Phone.push(sphone)

    console.log(Name)
    console.log(Email)
    console.log(Password)
    console.log(Phone)
}

function login() {
    var lemail = document.getElementById("lemail").value;
    var lpw = document.getElementById("lpw").value;

    var i = Email.indexOf(lemail);
    if (Email.indexOf(lemail) === -1) {
        alert("Please Enter Valid Email");
    } else if (Password[i] != lpw) {
        alert("Please Enter Valid Password");
    } else {
        alert("Log In Sucessfully")
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