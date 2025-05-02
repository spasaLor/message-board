const pool=require('../db/pool');

const getAllMessages = async(req,res)=>{
    const {rows}=await pool.query("select * from messages");
    res.render("index",{title:"Message Board", messages: rows});
}
const getNewMessage = (req,res)=>{
    res.render("form", {title: "New Message"});
}
const postNewMessage = async (req,res)=>{
    const content = req.body;
    await pool.query("insert into messages (username,message,date) values ($1,$2,$3)",[content.name, content.msg, new Date()]);
    res.redirect("/");
}
module.exports={getAllMessages, getNewMessage, postNewMessage}