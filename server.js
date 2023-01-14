const express = require("express");
const mongodb = require("mongoose");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
mongodb.connect(
  "mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/test")
  .then(() => console.log('Connected!'))
  .catch((err) => console.log("Not able to connect to DB"));

const addPlayer = require("./routes/addPlayer")
app.use("/cricket",addPlayer);

app.listen(5000,() =>{
    console.log("server started");
})