
var starList =['one','two','three','four','five'];
var rating=0;
var db = firebase.firestore();
document.getElementById("feedSubmit").addEventListener('click',e=>{
   e.preventDefault();

    starList.forEach(element=>{
        var rate = document.getElementById(element).className;
        console.log(rate);
        if(rate.includes('unchecked'))
        {
         
        }
        else{
              console.log(element);
            rating = rating+1;
        }
      
     });
   
     var filename=localStorage.getItem("feedback");
     var fy = localStorage.getItem("isFY");

    // var issue = document.getElementById("issue").value;
    // console.log(issue);

    console.log("rating given by user: "+rating);

    
    var user = firebase.auth().currentUser.email;
    if(fy=="yes"){
          
        db.collection('filesharingedi/Downloads/firstYear').doc(filename).get().then(function(doc){
            if(user!=doc.data().author)
            {
                var five=doc.data().five_rating;
                var four=doc.data().four_rating;
                var three=doc.data().three_rating;
                var two=doc.data().two_rating;
                var one=doc.data().one_rating;
                if(rating==1)
                   one +=1;
                else if(rating==2)
                   two+=1;
               else if(rating==3)
                   three+=1;
               else if(rating==4)
                   four+=1;
               else if(rating==5)
                   five+=1;
                 rating=0;
                var currentRating =( (5*five)+(4*four)+(3*three)+(2*two)+one)/(five+four+three+two+one);
                alert(currentRating);

                db.collection('filesharingedi/Downloads/firstYear').doc(filename).update({
                    rating:currentRating,
                    five_rating:five,
                    four_rating:four,
                     three_rating:three,
                     two_rating:two,
                     one_rating:one
                  }).then(()=>{
                      alert('Ratings given successfully..');
                  });
     
                  var issue = $.trim($("#issue").val());
             console.log(issue);
             if(issue!=null||issue!=''){
                 var data ={
                     writer:user,
                     to:doc.data().author,
                     issues:issue,
                     solvedornot:'no',
                     date:new Date().getDate()
                 }

                 firebase.firestore().doc('issues/'+filename).set(data).then(()=>{
                        alert('Issue registered successfully');
                 }).catch(error=>{
                     alert(error);
                 });
             }
           
          }
          else{
              alert("Author can not give feedback");
          }
        });    

    }
    else{

            var subject = localStorage.getItem("subject");
            db.collection('filesharingedi/Downloads/'+subject).doc(filename).get().then(function(doc){
                if(user!=doc.data().author)
                {
                    var five=doc.data().five_rating;
                    var four=doc.data().four_rating;
                    var three=doc.data().three_rating;
                    var two=doc.data().two_rating;
                    var one=doc.data().one_rating;
                    if(rating==1)
                       one +=1;
                    else if(rating==2)
                       two+=1;
                   else if(rating==3)
                       three+=1;
                   else if(rating==4)
                       four+=1;
                   else if(rating==5)
                       five+=1;
                     rating=0;

                     var currentRating =( (5*five)+(4*four)+(3*three)+(2*two)+one)/(five+four+three+two+one);
                     alert(currentRating);
                     db.collection('filesharingedi/Downloads/'+subject).doc(filename).update({
                        rating:currentRating,
                        five_rating:five,
                        four_rating:four,
                         three_rating:three,
                         two_rating:two,
                         one_rating:one
                      }).catch(function(error){
                          alert(error);
                      });


                      var issue = $.trim($("#issue").val());
                        console.log(issue);
                        if(issue!=null||issue!=''){
                                    var data ={
                                        writer: user,
                                        to:doc.data().author,
                                        issues:issue,
                                        solvedornot:'no',
                                        date:new Date().getDate()
                                    }

                                firebase.firestore().doc('issues/'+filename).set(data).then(()=>{
                                    alert('Issue registered successfully');
                                }).catch(error=>{
                                    alert(error);
                                });
                        }
    
                }
                else{
                    console.log("Author cannot give feedback");
                }
             

            
        });
    }
});


starList.forEach(function(element) {

document.getElementById(element).addEventListener('click', function(){
    alert("in function...");
var cls=document.getElementById(element).className;
if(cls.includes('unchecked'))
{   
    document.getElementById(element).classList.remove('unchecked');
    document.getElementById(element).classList.add('checked');
    alert(document.getElementById(element).className);
}
else
{
    document.getElementById(element).classList.remove('checked'); 
    document.getElementById(element).classList.add('unchecked');
    alert(document.getElementById(element).className);
}

// alert(document.getElementById(element).className);
});

});