const PlayerModel =require("../models/PlayerSchema");

function RegisterPlayer(req, res) {
    let Name = req.body.Name;
    let Runs = req.body.Runs;
    let Type = req.body.Type;
    let Country = req.body.Country;
    let playerdata = {
        Name :Name,
        Runs :Runs,
        Type :Type,
        Country :Country
    }
    
    let resultData = new PlayerModel(playerdata);
    resultData.save().then(item => {
        res.send("Player added successfully")
    }).catch((err) => {
        console.log("error in adding Player data");
    })
    

}

module.exports = RegisterPlayer;