const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB=require("./db/connect.js");
const app = express();
const router=require("./routes/recipes.js");

app.use(express.json())
dotenv.config();
app.use(cors());

app.use("/api/recipes/",router);
app.get('/health',  (req, res) =>{
   res.status(200).json({message: "ok"});
});

connectDB();
const port = 8000 || process.env.PORT;
const start =()=>{
    try {
        app.listen(port , () => 
            console.log(`Example app listening on port ${port}!`));
    } catch (error) {
        console.log(error);
    }
};
start();

