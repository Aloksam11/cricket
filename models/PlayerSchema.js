const mongoose = require('mongoose');

const cricketSchema = new mongodb.Schema({
    Name: String,
    Runs: Number,
    Type: String,
    Country: String
  });
  
  const Cricket = mongodb.model("cricket",cricketSchema);
  
  module.exports = Cricket;
