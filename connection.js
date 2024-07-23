const mongoose = require('mongoose');

const url= "mongodb+srv://kshad6523:Spiker123@cluster0.gbadbej.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

//asynchronous function - Promise object
mongoose.connect(url)
.then((result) => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

module.exports =mongoose;
