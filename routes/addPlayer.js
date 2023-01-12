const express = require("express");

const addPlayer = express.Router();

const RegisterPlayer =require("../controllers/RegisterPlayer")
addPlayer.post("/register",RegisterPlayer)


addPlayer.get("/login", (req, res) => {
    res.send("login")
})

module.exports = addPlayer;