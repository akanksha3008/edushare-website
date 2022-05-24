$('#List').find('tbody').html('');
var storage = firebase.storage();
var storageRef = storage.ref();
var db = firebase.firestore();
var x;
var z = [];
var i =0;
var data = '';
 $("#headingFiles").text("First Year Notes");
      storageRef.child('firstYear/').listAll().then(function(result){
        var u = firebase.auth().currentUser;
        if(u!=null)
        {
            result.items.forEach(function(reference){
              displayDetails(reference);   
        });
      }
      else
        alert("Login First");

    });
     
let new_html = '';

function displayDetails(reference)
{  
     var name = reference.toString().split("/");
     name = name[4];

    reference.getDownloadURL().then(function(url){

         getFileDetails(name,url);
         
   }).catch(function(error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
    
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
    
        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });

}

function onButtonClick(name,author,event)
{
  //console.log('Author:'+author);
     var dataref = db.collection("filesharingedi/Downloads/firstYear");
  console.log('Filename: '+name);

  dataref.doc(name).update({
    count: firebase.firestore.FieldValue.increment(1)
 });

 db.collection("Users").where("username","==",firebase.auth().currentUser.email).get()
 .then(function(querySnapshot){
   querySnapshot.forEach(function(doc){
      db.collection("Users").doc(doc.id).update({
          download_count: firebase.firestore.FieldValue.increment(1),
          points: firebase.firestore.FieldValue.increment(1)
      });
   })
 })
}

function giveFeedback(b,event)
{
  localStorage.setItem("feedback",b);
  localStorage.setItem("isFY","yes");
  alert(b+"data stored");
}
function getFileDetails(name,url)
{
  var dataref = db.collection("filesharingedi/Downloads/firstYear");
  dataref.where("filename","==",name).where("url","==",url).get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          
          new_html+='<tr>';
          new_html+='<td>';
          new_html+=`<a  href = "${url}"><button class ="downloader">${doc.id}</button></a>`;
          new_html+='</td>';

          new_html+=`<td> ${doc.data().size} </td>`;
          new_html+=`<td> ${doc.data().count} </td>`;
          new_html+=`<td> ${doc.data().author} </td>`;
          new_html+=`<td> ${doc.data().about} </td>`;
          new_html+=`<td> <a href='feedback.html' class='setLocal'>Feedback</td>`;
          new_html+='</tr>';

         $('#List').find('tbody').html(new_html);
   
            var q = document.getElementsByClassName("downloader");
            console.log(q.length);    
                 for(i=0;i<q.length;i++)
                 {   console.log(q[i].innerHTML);
                    var a = q[i].textContent;
                     q[i].addEventListener('click',onButtonClick.bind(null,a,doc.data().author));
                 }

                 var f = document.getElementsByClassName('setLocal');
                 console.log(f.length);
                 for(i=0;i<f.length;i++)
                 {
                   console.log(f[i].innerHTML);
                   var b = doc.id;
                   f[i].addEventListener('click', giveFeedback.bind(null,b));
                 }
      });
   
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });
 
}
 


//set branch class a tag evnt listener
//identify the target's innertext
//use it to fetch from database

//or else
//onclick function on each a tag with passing parameters as dept, subject
//fetch from this