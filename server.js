const { application } = require("express");
const express=require("express")
const fs = require('fs');
const bodyparser=require("body-parser")

const app=express()

app.use(bodyparser.urlencoded({extended:true}))

app.use(express.static("Data"))



app.get("/",function(req,res){

    res.sendFile(__dirname+"/admin.html")

})
app.post("/",function(req,res){


var Fname=req.body.fullname
var mail=req.body.email
var password=req.body.pass

if(Fname=="admin" && mail=="admin123@gmail.com" && password==123){
    res.sendFile(__dirname+"/admindis.html")

    const myadmin={
        Firstname:Fname,
        Email:mail,
        Password:password
    
    }
    var jsondata=JSON.stringify(myadmin)
    console.log(jsondata+"Real Admin Login")
    }
    else{
        res.send("Wrong Admin")
    }

   
 
})




// const data={
//            name:Fname,
//            Email:mail,
//            Password:password

// }
//var jsondata22=JSON.stringify(data)

//console.log(jsondata22)


app.get("/userlogin",function(req,res){
    res.sendFile(__dirname+("/userlogin.html"))
})

app.post("/userdash",function(req,res){
    res.sendFile(__dirname+"/userdash.html")
})



app.get("/users",function(req,res){

    res.sendFile(__dirname+"/userlogin.html")

})


app.get("/signin",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})

app.post("/signin",function(req,res){
    res.sendFile(__dirname+"/userlogin.html")

    var Fname=req.body.fname
    var Lname=req.body.lname
    var Uname=req.body.username
    var mail=req.body.email2
    var password=req.body.pass2
    
    
    const data2={
               Firstname:Fname,
               Lastname:Lname,
               Username:Uname,
               Email:mail,
               Password:password
    
    }
    var jsondata2=JSON.stringify(data2)
    console.log(jsondata2)

})



app.listen(4000,function(){
    console.log("Server Run on 4000 Port");
})