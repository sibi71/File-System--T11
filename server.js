const express = require("express");
const fs = require("fs")
const {dt,fname}= require("./datetime");
const path = require("path");
const http = require("https")
const app=express();
const port = process.env.PORT || 4000;

app.use(express.static("public"))

app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.send("<h2>port /add</h2>");
})
app.get("/add",(req,res)=>{

        fs.writeFile(`temp/${fname}.txt`,dt,(err) =>{
            if(err)
            {
                console.log(err);
            }
            
            console.log("File Created");
            res.send( `<h2>File Created check out <span style="color:green;"> localhost: ${port} / view </span></h2>`);
           

        })

});


app.get("/view",(req,res)=>{
    fs.readdir("temp",(err, files)=>{
        if(err){
            console.log(err);
        }
        else{
            files.forEach((file)=>{
            fs.readFile(`temp/${file}`,"utf-8",(err ,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                   console.log(data);
                    res.write(`<div style="

                                display:flex;
                                justify-content: center;
                                align-items: center;

                            ">
                        <table style="

                            border:2px solid black;
                            width:30%;
                            margin:1%;
                            padding:10px; 
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            border-collapse: collapse;"
                            
                        >
                        <tr><td><h1>${data}</h1></td></tr></table></div>`)

                        res.end;

                      
                    // console.log(data)
                }
                
                    
                })
             })
            
        }
    })
})



app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"html","index.html"))
})


app.listen(port,()=>{
console.log(`Server is up and runnind on port ${port}`);
})