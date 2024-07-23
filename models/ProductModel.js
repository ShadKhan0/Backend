
const {Schema, model} = require ("../connection");


const mySchema = new Schema({
    name:String,
    category:{type:String, required:true },
    brand:String,
    price:Number,

});
module.exports = model('products', mySchema)
