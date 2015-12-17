function loginValidate()  
{  
var username = document.myLogForm.uname;  
var password = document.myLogForm.password; 
if(username_validation(username))  
{  
if(password_validation(password))  
{  
}
}
return false;
}
function username_validation(uname)  
{  
var uname_len = uname.value.length;  
if (uname_len == 0 )  
{  
alert("User Id should not be empty ");  
uname.focus();  
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
	
        localStorage.removeItem('uname');
        alert('Login Succesfully ');  

        window.location.reload(true) ;; 
        return true;
    }
} 