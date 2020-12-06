const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const tfoodSchema = new Schema({
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

const TFoods = mongoose.model('tfoods', tfoodSchema);

module.exports = TFoods;