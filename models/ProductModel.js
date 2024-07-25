const { Schema, model } = require("../connection");

const mySchema = new Schema({
  title: String,
  brand: String,
  category: String,
  model: String,
  price: Number,
  image: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = model("products", mySchema);
