var subArr=[
    // ['firstYear'],
    ['Computer',['Data Structures','DBMS','DAA']],
    ['Mechanical',['SOM','Fluid Mechanics','Machine Design','Thermodynamics']],
    ['Instrumentation',['Field Instrumentation','Control System','PCC','Digital Control']]
];
$('#List').find('tbody').html('');
var storage = firebase.storage();
var storageRef = storage.ref();
var db = firebase.firestore();
var new_html='';

$("#headingFiles").text("Files you have uploaded till today..");
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(subArr.length);
        db.collection('filesharingedi/Downloads/firstYear').where("author","==",firebase.auth().currentUser.email).get().
        then(function(querySnapshot){
                 querySnapshot.forEach(function(doc){
                  new_html+='<tr>';
                  new_html+='<td>';
                  new_html+=`<a  href = "${doc.data().url}"><button class ="downloader">${doc.id}</button></a>`;
                  new_html+='</td>'; 
                  new_html+=`<td> ${doc.data().size} </td>`;
                  new_html+=`<td> ${doc.data().count} </td>`;
                  new_html+=`<td> ${doc.data().about} </td>`;
                  new_html+='</tr>';
                 });
        });
        subArr.forEach(dept=>{
            dept[1].forEach(subject=>{
                db.collection('filesharingedi/Downloads/'+subject).where("author","==",firebase.auth().currentUser.email).get().
                then(function(querySnapshot){
                 querySnapshot.forEach(function(doc){
                    new_html+='<tr>';
                    new_html+='<td>';
                    new_html+=`<a  href = "${doc.data().url}"><button class ="downloader">${doc.id}</button></a>`;
                    new_html+='</td>'; 
                    new_html+=`<td> ${doc.data().size} </td>`;
                    new_html+=`<td> ${doc.data().count} </td>`;
                    new_html+=`<td> ${doc.data().about} </td>`;
                    new_html+='</tr>';

                 });
                 $('#List').find('tbody').html(new_html);
               })
                
            });
            console.log(dept[0]);
        });
    } 
   else{
     console.log('No user logged in...');
   }
  });



// if(user!=null){


// }
// else{
//     alert("Login First");
// }
