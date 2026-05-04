//declare variables//
const u = "JKMM";
const p = "titantvman";
//function to check the credentials//
function signIn() {
let username = document.getElementById("UserName").value;
let password = document.getElementById("PassWord").value;
let fb = document.getElementById("feedback");


    //test by using if then and else//
    if (username === u && password === p) {
        document.getElementById("feedback").innerHTML = "<p class='text-success'>Login successful!</p>";
    } else {
        document.getElementById("feedback").innerHTML = "<p class='text-danger'>Invalid username or password.</p>";
    }
}