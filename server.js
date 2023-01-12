const express = require("express");
const mongodb = require("mongoose");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.json());

mongodb.connect(
  "mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/test")
  .then(() => console.log('Connected!'))
  .catch((err) => console.log("Not able to connect to DB"));

const addPlayer = require("./routes/addPlayer")
app.use("/player",addPlayer);
// const newplayer = new Cricket({
//   Name: "Virat Kohli",
//   Runs: 31335,
//   Type: "Balanced",
//   Country: "India"
// })

// newplayer.save();
// app.get('/', function (req, res) {
//   res.send('Hello World')
// });

// app.get('/players',(req,res) => {
//   Cricket.find(
//     {},
//     {_id:0,__v:0},
//     {},
//     function(error,result){
//       if(error){
//         console.log(error);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });
app.listen(5000,() =>{
    console.log("server started");
})