// importing express
const express = require('express');
const UserRouter = require("./routers/UserRouter")

// initialize express
const app=express();
const port=5000;




// these are middlewares

app.use('/user', UserRouter);


///endpoint or route
app.get('/' , (req,res) => {
    res.send("Response from express")
});
app.get('/add',(req,res) => {
    res.send('Response from Add');
});
app.get ('/getall', (req,res) => {
    res.send("Response from get All")
});
app.get ('/update', (req,res) => {
    res.send("Response from get Update")
});

//starting the server
app.listen(port, () =>{
    console.log("Server started successfully");
});
