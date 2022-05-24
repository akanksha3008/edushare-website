const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(3000,function(){
  console.log("listening to 3000 port");
});

app.get("/EDUSHARE",function(req,res){
    res.sendFile(__dirname+"/index.html");
});


  