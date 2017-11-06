const express = require('express');
const router = express.Router();



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "EMechanicLocal"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});




//..........................................for UserProfile..............................//

// get all data from mongodb
router.get('/get/list', function(req , res , next){
res.send("Working");
});





// add data to mongodb
router.post('/insert/profile', function(req , res, next){
res.send("Working");
});


module.exports = router;
