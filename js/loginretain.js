
var unameForm = document.getElementById('uname');
			if(!localStorage.getItem('uname'))
			{
				
				localStorage.removeItem('input');
				populate();

			
							}
			else
			{
				retain();
			}
			function populate()
			{
			localStorage.setItem('uname',document.getElementById('uname').value);
			retain();
			}

			function retain()
			 {
			 	var currentName = localStorage.getItem('uname');
			 	document.getElementById('uname').value = currentName;
			}
			unameForm.onchange = populate;