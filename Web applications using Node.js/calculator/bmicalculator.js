const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/", function(req, res){
  var w = Number(req.body.weight);
  var h = Number(req.body.height);
  var bmi = w/(h*h);
  res.send("The bmi is given by "+bmi);
});

app.listen("3000", function(){
  console.log("CONNECTED TO PORT 3000");
});
