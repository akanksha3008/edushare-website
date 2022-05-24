var user = firebase.auth().currentUser;

// if(user!=null)
// {  document.getElementById("loggedin").style.display="block";
   
// }
if(user)
{
  var ti=parseInt(sessionStorage.getItem("time"));
  var currTime = new Date().getTime();
  if(currTime>=ti)
  {
    alert('Session over....login again');
    logout();
  }
}
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      document.getElementById("loggedin").style.display="none";
      document.getElementById("navigation").innerHTML += "<li class='nav-item dropdown'><a class='nav-link dropdown-toggle' style='color: aliceblue;' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Account</a><div class='dropdown-menu' style='color:black;' aria-labelledby='navbarDropdown'><a class='dropdown-item' style='color:black; padding:4px;' href='profile.html'>Profile</a><a class='dropdown-item' style='color:black; padding:4px;' href='uploadFile.html'>Uploads</a><a class='dropdown-item' style='color:black; padding:4px;' onclick='logout(); return false;' href='#'>Logout</a></div></li>";
      console.log("Hello  World");
      } 
     else{
      //document.getElementById("logbutton").innerText = "LogIn";
      document.getElementById("loggedin").style.display="block";
     }
    });


function check(){
    if(firebase.auth().currentUser===null)
    {
      alert("Login first");
      event.preventDefault();
      return false;
    }
    else 
    return true;
}
  
function logout(){

    firebase.auth().signOut();
    sessionStorage.clear();
    window.location = "index.html";

  }
  