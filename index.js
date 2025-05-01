const express = require('express');
const path=require("node:path");
const app=express();
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/",(req,res)=>{
    res.render("index",{title:"Message Board", messages: messages});
    });
app.get("/new", (req,res)=>{
    res.render("form", {title: "New Message"});
});
app.post("/new",(req,res)=>{
    const content = req.body;
    messages.push({text:content.msg, user:content.name, added:new Date()});
    res.redirect("/");
});


app.listen(8080,()=>console.log("Listening on http://localhost:8080"));