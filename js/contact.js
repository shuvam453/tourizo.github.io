function validateForm() {
		var namea = document.forms["myForm"]["fname"].value;
		var emailid = document.forms["myForm"]["femail"].value;
		var subjecta = document.forms["myForm"]["fsubject"].value;
		var messagea = document.forms["myForm"]["ftxtarea"].value;
		  	if (namea==null || namea=="") {
		    	document.getElementById('js').innerHTML = "<div class='error_color'> **Name must be filled out</div> ";
		    	return false;
		  	}
		  	if ((namea.length <= 4) || (namea.length >= 20) ){  
				document.getElementById('js').innerHTML = " <div class='error_color'>**Enter minimum 5 letters....</div>";
				return false;  
			}
			if (!isNaN(namea)){  
				  document.getElementById('js').innerHTML = "<div class='error_color'> **only letters are allowed..</div>.";
				  return false;  
			}


			if (emailid==null || emailid=="" ){  
		  document.getElementById('eid').innerHTML = " **<div class='error_color'>Email can be blank....Please Enter your email id.....</div>";
		  return false;  
		}
		if (emailid.indexOf('@') <= 0){  
		  document.getElementById('eid').innerHTML = " **<div class='error_color'>@invalid email-id...Please Enter valid email-id....</div>";
		  return false;  
		}
		if ((emailid.charAt(emailid.length-4) != '.') && (emailid.charAt(emailid.length-3) != '.')){  
		  document.getElementById('eid').innerHTML = " **<div class='error_color'>.invalid position....</div>";
		  return false;  
		}


		if (subjecta==null || subjecta=="" ){  
		  document.getElementById('sub').innerHTML = " **<div class='error_color'>Subjects can be blank....whats your subjects....</div>";
		  return false;  
		}
		if ( subjecta.length <= 10 ){  
		  document.getElementById('sub').innerHTML = " **<div class='error_color'>Minimum 10 words must be important....</div>";
		  return false;  
		}


		if (messagea==null || messagea=="" ){  
		  document.getElementById('area').innerHTML = " **<div class='error_color'>Message can be blank....please enter some comments....</div>";
		  return false;  
		}
		if (messagea.length <= 25 ){  
		  document.getElementById('area').innerHTML = " **<div class='error_color'>Please Enter More Than 25 letters</div> ";
		  return false;  
		}


		alert("Form Submitted Successfully!");
	    return true;
	}