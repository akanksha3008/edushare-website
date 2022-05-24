function getDetails(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user!=null) {
           
          var user = firebase.auth().currentUser;
          var x = document.getElementById("inlineRadio1").value;
          console.log(x);
      
          if(x==="yes")
          {
             //    var uploader = document.getElementById('uploader');
            var fileButton = document.getElementById('fileButton');
   
 
            //Listen for file selection
            fileButton.addEventListener('change',function(e){
                    var firestore = firebase.firestore();
                    var u = firebase.auth().currentUser;
                    // uploader.setAttribute('visibility','visible');
                    if(u!=null){
                    console.log(u.email);
                    var file = e.target.files[0];
                    console.log('File size: '+ file.size);
                    //create a storage ref
                    var storageRef =  firebase.storage().ref('firstYear/'+file.name);
                    //upload file
                    var task = storageRef.put(file);
                    //update progress bar
            
                    task.on('state_changed',function progress(snapshot){
            
                    //    var percentage = ((snapshot.bytesTransferred)/snapshot.totalBytes)*100;
                    //    uploader.value = percentage;
            
                    },
                    function error(err){
            
                    },
                    function complete(){
                        //when uploading to storage is completed , we add the url of the file alongwith other details to 
                        //cloud firestore 
                        var obj_url;
                        // console.log(firebase.storage().ref('firstYear/'+file.name).getDownloadURL());
                        firebase.storage().ref('firstYear/'+file.name).getDownloadURL().then(function(url){
                            obj_url = url;
                            console.log(obj_url);
                            var s = Math.round(file.size/1024);
                            const docRef = firestore.doc("filesharingedi/Downloads/firstYear/"+file.name);
                            var n;
                            var a = firebase.auth().currentUser.email;
                            console.log(typeof a);
                            firebase.firestore().collection("Users").where("username","==",a).get().then(
                            function(querySnapshot){
                                querySnapshot.forEach(function(doc){
                                    console.log(doc.id);
                                    console.log(doc.data().name);
                                    n = doc.id;
                                    var data = {
                                    filename : file.name,
                                    size : s,
                                    author : firebase.auth().currentUser.email,
                                    url : obj_url,
                                    count :0               
                                    };
                                //putting in cloud firestore database
                                docRef.set(data).then(function(){
                                    // console.log(obj_url);
                                    firebase.firestore().collection("Users").doc(doc.id).update({
                                        upload_count:firebase.firestore.FieldValue.increment(1)
                                    })
                                    console.log("Status saved");
                                }).catch(function(error){
                                    console.log(error);
                                });
                        });        
                    }).catch(function(error){
                            alert(error);
                        });
                    
            
                        });
            
                        alert('Upload successful');
                        uploader.value = 0;
                    }  );
                }
                else
                alert("Login first");
                });
            
          }
          else if(x==="no")
          {
                var dept = $("#dept").find(":selected").text();
                var subject =$("#subject").find(":selected").text();

                alert("dept: "+dept+" "+subject);
          }

        }
        else
         alert("Login first!");
      });

}
