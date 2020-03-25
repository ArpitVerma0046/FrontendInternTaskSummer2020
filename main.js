/* ========================WRITE YOUR JS FROM HERE======================== */
 var submitButton    = document.querySelector("#submit-btn"),
 	 password        = document.querySelector("#original"),
 	 confirmPassword = document.querySelector("#confirm"),
 	 username        = document.querySelector("#username"),
 	 email           = document.querySelector("#email"),
 	 phone           = document.querySelector("#phone");




submitButton.addEventListener("click", function(){             // either username, email and phone no. are empty are not
	if(username.value && email.value && phone.value){
		if(password.value == ''){
     	 	alert("Enter Password");
        	}
        else if(confirmPassword.value == ''){
     	 alert("Enter Confirm Password");
        }

 	    else if(password.value !== confirmPassword.value){
 	     alert("Password didn't matched");
 	     }
    
     }

});







