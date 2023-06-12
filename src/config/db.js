const mongoose = require('mongoose');

const url = process.env.MONGOURL
try{
  mongoose.Promise = global.Promise;
  mongoose.connect(url, 
  {
    useNewUrlParser: true,
    connectTimeoutMS:60000,
  });

  console.log("Connected successfully to server");
}catch(err){
  console.log(err);
}

module.exports = {mongoose};
