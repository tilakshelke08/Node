// step 1 create folder
// step 2 move into that folder
// step 3 npm init -y
// step 4 open folder using vs code 
// step 5 npm i express
// step 6 create one server javascript file  eg. server.js

// below one is instance of express
const express =require("express");
const app= express();

//used to parse req.body in express --> mostly used in put and post 
 const bodyparser =require("body-parser");
 app.use(bodyparser.json());
 // above one is you saying that specifically  pasre json data and add to the req.body object  

//below is server started on 3000 port 
app.listen(3000,() =>{
  console.log("server stareted on port no 3000");
})
// 3000 is your port number .
// you can use your choice for your port number 

//get
// to checking get method you can use browser  
app.get("/get" ,(req,res) =>{
  // req , res io parameters
  res.send("hello ji , kaise hai app ");
})
//  get explaination  -> on the app i applied get request and provide the path/route   and send the data to your "res" 

//post 
// to checking  post method use postman 
app.post("/post" ,(req,res) =>{
  console.log(req.body);
  const {name,brand}=req.body;
  console.log("name",name);
  console.log("brand",brand);
     res.send("Cars details sub,itted");
     

})
 //<_________________________________________________>

 // how node js is connecteed to mongodb below one by using "mongoose"

 const mongoose = require("mongoose");
 mongoose.connect('mongodb://localhost:27017/myDatabase' ,{
  useNewurlParser:true, // this or below one is  required configuration 
  useUnifiedTopology:true //without both  configuration show  an error 
 })
 .then( () =>{
  console.log("Connection edstablished");
 }) 
 .catch((Error) =>{
  console.log("Connection Failed");
 })

 // The above one is actually "PROMISE" .

 // link is mongodb or mondb compass local host port "27017"
 // above one is connection node js to mongodb 

//<_________________________________________________>
// postman used for 
//--> designing , testing , documentations

// in postman 
//--> new-->http-->post /get 
// below one is for post when you haver passed the  data.
//--> paste link .
//-->body --> raw--> json --> passed the data .
//eg.{
 //  " name ":"Rapid",
//   "brand ":"Audi"
//}

// middleware i.e bodyparser

// what is api ?
//--> communication bteween server and client 

// to running the node file 
//--> node server.js

//<__________________________________________________________________________>
     
// mongodb ---> open sourec, nosql databases
// data stored inthe forms of  key-value , documnets  and graphs 
//  famous for scalable and performance 
// unstructured data

//mongoose is library in node js ODM i.e  object document mapper 
// node js connected to mongodb database  by the use of "mongoose"
//--> installing mongoose
//--> npm i mongoose

//<-________________________________________________________>
