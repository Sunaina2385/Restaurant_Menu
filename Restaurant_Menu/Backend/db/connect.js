const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connectDB =  () => {
    mongoose.connect("mongodb://127.0.0.1:27017/Menu").then(
        ()=>{
            console.log("Database Connected Successfully");
        }
    ).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDB;