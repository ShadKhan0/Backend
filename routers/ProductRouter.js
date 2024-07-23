const express = require('express');
const router = express.Router();
const Model = require("../models/ProductModel");

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

