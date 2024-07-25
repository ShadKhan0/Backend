const express = require('express');
const router = express.Router();
const Model = require("../models/ProductModel");


router.post('/add' ,(req,res) => {
    console.log(req.body);
    new Model(req.body).save .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        log
        
    });nc
})
router.get("/name", (req,res) => {
    res.send("Response from product name");
});

router.get("/category", (req,res) => {
    res.send("Response from product category");
});
router.get("/brand", (req,res) => {
    res.send("Response from product brand");
});
router.get("/price", (req,res) => {
    res.send("Response from product price");
});

module.exports = router;

