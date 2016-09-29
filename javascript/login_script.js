// Accepted username and password
var username = "barnssuku@gmail.com";
var password = "callme78*";


// Collect the data entered from the User Interface.
var username_from_ui = "";
var password_from_ui = "";

function grantPass(){
	username_from_ui = document.getElementById("username").value;
	if(username == null || username_from_ui == ""){
		document.getElementById("error_msg").innerHTML = "";
		document.getElementById("error_msg").innerHTML = "Please enter your username.";
		return false;
	}
	password_from_ui = document.getElementById("password").value;
	if(password_from_ui == null || password_from_ui == ""){
		document.getElementById("error_msg").innerHTML = "";
		document.getElementById("error_msg").innerHTML = "Please enter your password.";
		return false;
	}	
	if((username_from_ui == username) && (password_from_ui == password)){
		document.getElementById("error_msg").innerHTML = "";
		document.getElementById("error_msg").innerHTML = "Thank you for the entry.";
		// Add the code to activate the CMS from the style.
		changeStyle();
		return false;
	}
	document.getElementById("error_msg").innerHTML = "";
	document.getElementById("error_msg").innerHTML = "Sorry, your entry is incorrect try again.";
	return false;	
}

function changeStyle(){
	Location.href = "localhost/FFProject/index.html";
}

// Add the event to the login button
var login_btn = document.getElementById("submit_btn");
login_btn.addEventListener("click", grantPass, false);