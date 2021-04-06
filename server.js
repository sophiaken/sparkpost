//Acquiring the modules required
var express = require('express');
var app = express();

//declaring a global variable to store the data locally
var whole_data;

//Listening to the port of the server
app.listen(3000,function(req,res){
    console.log("Server is listening in port 3000");
});

// Telling the server to receive the json data
app.use(express.json());

//POST method to receive the posted data
app.post('/sparkpost', function(req, res){
  data =  JSON.stringify(req.body);
  whole_data = data;
  res.send(req.body);    // echo the result back
});

//GET method to retrieve the data based on query strings sent in request params
app.get('/sparkpost/:name',function(req,res){
    let data = JSON.parse(whole_data);
    //checking the stored value with the query value for updation
    if(data.name == req.params.name){
        data.age = data.age + 1;
        res.send(data);
    }
    else{
        //response when user name not found
        res.send("User not found");
    }
        
});



