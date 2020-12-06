const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Planner = new Schema({
   
    planner_name : {
        type : String
    },
    party_category : {
        type : String
    },
    contact_no : {
        type : Number
    },
    address : {
        type : String
    },
    specialities : {
        type : String
    },
    previous_works : {
        type : String
    }
}, {
    
    collection : 'planner'

}

);

module.exports = mongoose.model('Planner', Planner);
