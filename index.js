// importing express
const express = require("express");
const UserRouter = require("./routers/UserRouter");
const ProductRouter = require("./routers/ProductRouter")
const cors = require('cors');
// initialize express
const app = express();
const port = 5000;

// these are middlewares
app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json()); //sequence is imp it firsts convert all json format to javascript to be interpreted by js file here
app.use("/product", ProductRouter);
app.use("/user", UserRouter);



///endpoint or route
app.get("/", (req, res) => {
  res.send("Response from express");
});
app.get("/add", (req, res) => {
  res.send("Response from Add");
});
app.get("/getall", (req, res) => {
  res.send("Response from get All");
});
app.get("/update", (req, res) => {
  res.send("Response from get Update");
});

//starting the server
app.listen(port, (err) => {
  if(err){
    console.log("failed" + err);
  }
  else { 
    console.log("Server started successfully");

  }
});
