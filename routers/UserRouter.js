const express = require("express");
const router = express.Router();
const Model = require("../models/UserModel");
const jwt = require ('jsonwebtoken')
require('dotenv').config();
router.post("/add", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//":" denotes url parameter
router.get("/getbycity/:city", (req, res) => {
  console.log(req.params.city);
  Model.find({ city: req.params.city })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getbyemail/:email", (req, res) => {
  Model.findOne({ email: req.params.email })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      //new true is used to display updated new result else we have to click twice
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post("/authenticate", (req, res) => {
  Model.findOne(req.body)
    .then((result) => {
if(result){
const {_id, email, password}=result;;
const payload={_id,email,password} 
jwt.sign(payload,process.env.JWT_SECRET, {expiresIn:'1hr'},
  (err, token) =>{
    if(err){
    console.log(err);
    res.status(500).json(err);
  }
  else{
res.status(200).json({token:token});
  }}

)//payload, secret-key, expiry and callback
}
else{
  res.status(401).json({message:'invalid credentials'});
}
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
