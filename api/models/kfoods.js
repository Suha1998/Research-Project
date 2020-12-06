const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const kfoodSchema = new Schema({
    party_drinks : {
        type: String
    },
    starter : {
        type: String
    },
    main_course : {
        type: String
    },
    Dessert : {
        type: String
    }
})

const KFoods = mongoose.model('kfoods', kfoodSchema);

module.exports = KFoods;