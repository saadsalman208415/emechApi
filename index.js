const express = require('express');
const bodyParser = require('body-parser');



const app = express();


app.use(bodyParser.json());
app.use('/em/api', require('./routes/api_routes') );

// error handling middleware
app.use(function(err , req , res , next){
  res.status(422).send({error: err.message});
});

app.listen(process.env.port || 2000, function(){
  console.log('working');
});
