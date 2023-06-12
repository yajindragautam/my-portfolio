const mongoose = require('mongoose');

const url = process.env.ENVTRONMENT === process.env.MONGOURL ? "" : process.env.MONGOURLREMOTE;

try{
  mongoose.Promise = global.Promise;
  mongoose.connect(url, 
  {
    useNewUrlParser: true,
    connectTimeoutMS:60000,
  });

  console.log("MongoDB Connected successfully");
}catch(err){
  console.log(err);
}

module.exports = {mongoose};
