const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();

const todo = require("./routes/todo")



const app = express();
app.use(cors());
const PORT = process.env.port || 5000;


mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("Connected to DB")})
    .catch((err)=>console.log(err));

app.use(express.json());
app.use("/",todo);

app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`);
});