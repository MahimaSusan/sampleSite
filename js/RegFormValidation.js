function regValidate()  
{  
var username = document.myRegForm.username; 
var password = document.myRegForm.password; 
var confirm = document.myRegForm.confirm;   
var address = document.myRegForm.address;  
var email = document.myRegForm.email; 
var male = document.myRegForm.male;
var female= document.myRegForm.female;
var country = document.myRegForm.country;
var english= document.myRegForm.english;
var malayalam = document.myRegForm.malayalam;
var comment = document.myRegForm.country;

if(username_validation(username,5,12))  
{   
   if(password_validation(password,7,12))
    {
        if(confirm_password(password,confirm))
        {
if(alphanumeric(address))  
{
if(ValidateEmail(email))  
{ 
    if(gender_validation(male,female))
    {
        if(language_validation(english,malayalam))
        {


        if(country_validation(country)){
            // return tr
            
          }
        }
       }
      }
	}
   }
}
  
return false;
}
 function username_validation(username,mx,my)  
{  
var username_len = username.value.length;  
if (username_len == 0 || username_len >= my || username_len < mx)  
{  
alert("User Id should not be empty / length be between "+mx+" to "+my);  
username.focus();  
return false;  
}  
return true;  
}  
function password_validation(password,mx,my)  
{  
var password_len = password.value.length;  
if (password_len == 0 ||password_len >= my || password_len < mx)  
{  
alert("Password should not be empty / length be between "+mx+" to "+my);  
password.focus();  
return false;  
}  
return true;  
}  
function confirm_password(password,confirm)
    {
        if(password.value == confirm.value)
        {
            
            return true;
        }
        else
        {
            alert('Password mismatch');
            confirm.focus();
            return false;
    }
        }
function allLetter(username)
{   
var letters = /^[A-Za-z]+$/;  
if(username.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Username must have alphabet characters only');  
username.focus();  
return false;  
}  
}  
function alphanumeric(address)  
{   
var letters = /^[0-9a-zA-Z]+$/;  
if(address.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('User address must have alphanumeric characters only');  
address.focus();  
return false;  
}  
}  
   

function ValidateEmail(email)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(email.value.match(mailformat))  
{  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
email.focus();  
return false;  
}  
 } 
 

      

 
function gender_validation(male,female)  
{  
x=0;  
  
if(male.checked)   
{  
x++;  

}
if(female.checked)  
{  
x++;   
}  
if(x==0)  
{  
alert('Select Male/Female');  
male.focus();  
return false;  
} 
else {

return true;
}
}
function language_validation(english,malayalam)  
{  
x=0;  
  
if(english.checked)   
{  
x++;  
} if(malayalam.checked)  
{  
x++;   
}  
if(x==0)  
{  
alert('Select english/malayalam');  
english.focus();  
return false;  
}  else 
{
 return true ;
}
}

    function country_validation(country)  
    {  
    if(country.value == "Default")  
    {  
    alert('Select your country from the list');  
    country.focus();  
    return false;  
    }  
    else  
    {  
        alert('Form Succesfully Submitted');  
window.location.reload(true);  
    return true;  
    }  
 }
       
    
} 

