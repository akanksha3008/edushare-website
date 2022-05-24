var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      
    //   document.getElementById("user_div").style.display = "block";
    //   document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){

         db.collection("Users").where("username","==",user.email).get()
         .then(function(querySnapshot){
                querySnapshot.forEach(doc => {
                    document.getElementById("current_user").innerText=doc.data().name;
                    document.getElementById("inst_name").innerText=doc.data().institute;
                    document.getElementById("points").innerText=doc.data().points;
                    document.getElementById("downloads").innerText=doc.data().download_count;
                    document.getElementById("uploads").innerText=doc.data().upload_count;
                    
                });
         }).catch(function(error){
              //alert(error);
         });

      }
  
    } else {

     
    }
  });

  function logout(){
    alert("Logging out");
    firebase.auth().signOut();
     window.location = "index.html";
  }
  