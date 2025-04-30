


const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
const fullPath = path.join(__dirname);
app.set("views",fullPath);

app.get("/view", async (req,res)=>{
  fs.readFile("./public/views.txt","utf-8",(err,data)=>{
    if(err){
      console.log(err);
      return;
    };
    let number = data++;
    number++;
    res.json({is:"yes",number: number});
    fs.writeFile("./public/views.txt",String(number),(err)=>{
      if(err){
        console.log(err);
        return;
      };
    });
  });

});

app.get("/showOld",(req,res)=>{
  fs.readFile("./public/views.txt","utf-8",(err,data)=>{
    if(err){
      console.log(err);
      return;
    };
    res.json({data: data});
  });
});
app.get("/",(req,res)=>{
  res.render("./index");
});

app.listen(3000);
