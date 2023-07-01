'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var SkillSchema = new Schema({
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: {type: String,default:"",index:true},
    percentage: {type: Number, default:0},
    status: {type: String, default:'public'},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now},
    deletedAt:{type:Date, default:Date.now},
});


module.exports = mongoose.model('Skill', SkillSchema);
