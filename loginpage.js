firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      email_id = document.getElementById("email_field").value;
      // var user = firebase.auth().currentUser;
       var t = new Date().getTime()+10*1000;
      if(user != null){
        sessionStorage.setItem("time",t);
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
        document.getElementById("email_field").value="";
        document.getElementById("password_field").value="";
        document.getElementById("institute").value="";
        document.getElementById("password_field").value="";
        window.location = "index.html";
      }
  
    } else {

      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function login(){  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);

    }); 
  }

  function register(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    var ch = userEmail.split('@');

    var name = document.getElementById("name").value;
    alert(name);
    if(name=='')
    {
      alert("Fill the name field");
    }
    else
    {
      if(ch[1]==="vit.edu")
      {
          firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(){
            qwerty();
          }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
          // ...
          });
      }
      else
      {
        alert("Register with your vit.edu account");
      }
    }


  }
  
  function qwerty()
  {  var user = firebase.auth().currentUser;
     var name1=document.getElementById("name").value;
     var institute1 = document.getElementById("institute").value;

    const obj ={
      userid:user.uid,
      name:name1,
      institute:institute1,
      username:user.email,
      download_count:0,
      upload_count:0,
      points:0
    };
    var db = firebase.firestore();
    var dataref = db.collection("Users");
    dataref.doc().set(obj).then(function(){
      console.log("Details added to firestore");
    }).catch(function(error){
      console.log(error);
    });
  }
  function logout(){
    firebase.auth().signOut();
    // sessionStorage.clear();
  }
  