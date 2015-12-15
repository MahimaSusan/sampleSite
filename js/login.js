function loginValidate()  
{  
var username = document.myLogForm.username;  
var password = document.myLogForm.password; 
if(username_validation(username))  
{  
if(password_validation(password))  
{  
}
}
return false;
}
function username_validation(username)  
{  
var username_len = username.value.length;  
if (username_len == 0 )  
{  
alert("User Id should not be empty ");  
username.focus();  
return false;  
}  
return true;  
}  
function password_validation(password)  
{  
var password_len = password.value.length;  
if (password_len == 0 )  
{  
alert("Password should not be empty ");  
password.focus();  
return false;  
}
else{

        alert('Login Succesfully ');  
window.location.reload(true) ;; 
return true;
}
} 