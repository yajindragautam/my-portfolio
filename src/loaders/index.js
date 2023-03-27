const loadExpress = require('./express');

const init = async(app)=>{
    loadExpress.init(app); 
}

module.exports = {init}