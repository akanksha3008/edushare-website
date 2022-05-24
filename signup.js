var signup = document.getElementById("signup");
signup.addEventListener('click', function(){
    console.log("Form accepted..");
    var userEmail = document.getElementById("remail_field").value;
    var userPass = document.getElementById("rpassword_field").value;
    var name = document.getElementById("name").value;
    var college =document.getElementById("institute").value;
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(user=>{
         console.log("user created..");
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage + " " + userEmail);
      // ...
    });

});


 
  
