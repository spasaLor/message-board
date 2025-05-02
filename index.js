const express = require('express');
const path=require("node:path");
require('dotenv').config();
const controller = require('./controllers/messageController');

const app=express();
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/",controller.getAllMessages);
app.get("/new", controller.getNewMessage);
app.post("/new",controller.postNewMessage);


app.listen(8080,()=>console.log("Listening on http://localhost:8080"));