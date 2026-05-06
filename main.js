//declare variables//
const u = "JKMM";
const p = "titantvman";
//function to check the credentials//
function signIn() {
let username = document.getElementById("UserName").value;
let password = document.getElementById("PassWord").value;
let feedback = document.getElementById("feedback");

    //test by using if then and else//
    if (username === u && password === p) {
        feedback.innerHTML = "<p class='text-success'>Login successful!</p>";
        window.location.href = "notebooks.html";
    } else {
        feedback.innerHTML = "<p class='text-danger'>Invalid username or password.</p>";
    }
}
let attempt_counter = 0; 

function authenticate() {
    let username, pwd, granted, denied;
    username = document.getElementById("uname").value;
    pwd = document.getElementById("pwd").value;
    granted= "Welcome " + username + "!";
    denied = "Access denied. "  + "Account locked after " + "3 attempts!";

    do {
        
        if (username === "JKMM" && pwd === "titanvman") {
            alert(granted);
            attempt_counter = 0; // reset after success
            document.getElementById("display").innerHTML = "";
            window.location.href = "notebooks.html"; //go to second page
            break; // stop loop
        } else {
            attempt_counter++;
            document.getElementById("display").innerHTML =
                "Incorrect username and/or password. Attempt " + attempt_counter + " of 3 ";
        }

    } while (false); 

    if (attempt_counter >= 3) {
        alert(denied);
        document.getElementById("loginBTN").disabled = true; // lock button
    }
}