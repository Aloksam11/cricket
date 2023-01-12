const express = require("express");
const PlayerModel =require("../models/PlayerSchema");

const addPlayer = express.Router();

const RegisterPlayer =require("../controllers/RegisterPlayer");
const Cricket = require("../models/PlayerSchema");
addPlayer.post("/register",RegisterPlayer);


addPlayer.get('/players',(req,res) => {
    Cricket.find(
      {},
      {_id:0,__v:0},
      {},
      function(error,result){
        if(error){
          console.log(error);
        } else {
          res.send(result);
        }
      }
    );
  });

  addPlayer.get("/players/:Name",(req,res) => {
      var name = req.params.Name;
      Cricket.find(
        {Name: name},
        { _id: 0, __v: 0 },
        {},
        function (error,result) {
            if (error) {
              console.log(error);
            } else {
                res.send(result);
            }
        }
      )  
    });

module.exports = addPlayer;