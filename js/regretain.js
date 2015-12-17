var usernameForm = document.getElementById('username');
var addressForm = document.getElementById('address');
var emailForm = document.getElementById('email');
      if(!localStorage.getItem('username'))
      {
        populate();
        localStorage.removeItem('input');
      }
      else
      {
        retain();
      }
      function populate()
      {
      localStorage.setItem('username',document.getElementById('username').value);
      localStorage.setItem('address',document.getElementById('address').value);
      localStorage.setItem('email',document.getElementById('email').value);
      retain();
      }

      function retain()
       {
        var currentname= localStorage.getItem('username');
        var currentaddress = localStorage.getItem('address');
        var currentEmail = localStorage.getItem('email');
        document.getElementById('username').value = currentname;
        document.getElementById('address').value = currentaddress;
        document.getElementById('email').value = currentEmail;
      }
      usernameForm.onchange = populate;
      addressForm.onchange = populate;
      emailForm.onchange = populate;