const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Email = new Schema({
   Emails : {
        type : String
    },
   Title : {
        type : String
    },
    Message : {
       type : String
   }
}, {

    collection : 'emails'
}

);

module.exports = mongoose.model('Email', Email);
