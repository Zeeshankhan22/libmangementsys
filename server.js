const { application } = require("express");
const express=require("express")
const fs = require('fs');

const app=express()

app.use(express.static("Data"))



app.get("/",function(req,res){

    res.sendFile(__dirname+"/admin.html")

})
app.post("/",function(req,res){
    res.sendFile(__dirname+"/admindis.html")
})



app.get("/userlogin",function(req,res){
    res.sendFile(__dirname+("/userlogin.html"))
})
app.post("/userdash",function(req,res){
    res.sendFile(__dirname+"/userdash.html")
})



app.get("/users",function(req,res){

    res.sendFile(__dirname+"/userlogin.html")

})
app.post("/signup",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})



app.listen(4000,function(){
    console.log("Server Run on 4000 Port");
})