var data='';
$('#List').find('tbody').html('');
var storage = firebase.storage();
var storageRef = storage.ref();
var db = firebase.firestore();
var x;
var z = [];
var i =0;
var sub='';

function StoreData(subject){
  alert(subject);
  localStorage.setItem("subject",subject);
}
function onButtonClick1(content,dept)
{

    alert("in function");
    console.log(content);
    storageRef.child("computer/Data Structures/").listAll().then(function(result){
        var u = firebase.auth().currentUser;
        if(u!=null)
        {
            result.items.forEach(function(reference){
              displayDetails(reference,content,dept);   
        });
        //  window.location='coursesList.html';
      }
      else
        alert("Login First");

    });
}

let new_html1 = '';

function displayDetails(reference,content,dept)
{   // console.log(reference);
     var name = reference.toString().split("/");
     name = name[4];
    console.log(name);
    reference.getDownloadURL().then(function(url){

         getFileDetails(name,url,content,dept);
         
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

function onButtonClick(name,content,event)
{
     console.log("Subkect id"+sub);
     var dataref = db.collection("filesharingedi/Downloads/Data Structures/");
  console.log('Filename: '+name);

  dataref.doc(name).update({
    count: firebase.firestore.FieldValue.increment(1)
 });

 db.collection("Users").where("username","==",firebase.auth().currentUser.email).get()
 .then(function(querySnapshot){
   querySnapshot.forEach(function(doc){
      db.collection("Users").doc(doc.id).update({
          download_count: firebase.firestore.FieldValue.increment(1)
      });
   })
 })
}


function getFileDetails(name,url,content,dept){
// {  console.log("Subejct: "+sub);
//  alert(sub);
  var dataref = db.collection("filesharingedi/Downloads/Data Structures/");
  dataref.where("filename","==",name).where("url","==",url).get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          
          new_html1+='<tr>';
          new_html1+='<td>';
          new_html1+=`<a  href = "${url}"><button class ="downloader">${doc.id}</button></a>`;
          new_html1+='</td>';

          new_html1+=`<td> ${doc.data().size} </td>`;
          new_html1+=`<td> ${doc.data().count} </td>`;
          new_html1+=`<td> ${doc.data().author} </td>`;
          var l = doc.data().count;
          new_html1+='</tr>';

         $('#List').find('tbody').html(new_html1);
   
            var q = document.getElementsByClassName("downloader");
            console.log(q.length);    
                 for(i=0;i<q.length;i++)
                 {   console.log(q[i].innerHTML);
                    var a = q[i].textContent;
                     q[i].addEventListener('click',onButtonClick.bind(null,a,content));
                 }
      });
   
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });
 
}


// var q = document.getElementsByClassName("branch");
// for(i=0;i<q.length;i++)
// {   
 
//     q[i].addEventListener('click',onButtonClick1.bind(null,q[i].innerHTML,'computer'));
// } 

