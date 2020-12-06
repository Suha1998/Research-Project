const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Rating = new Schema({
    planner_id : {
        type : ObjectId
    },
    Comment : {
       type : String
   },
    Date : {
       type : String
   },
    Rate : {
       type : Number
   }
}, {

    collection : 'rating'
}

);

module.exports = mongoose.model('Rating', Rating);
