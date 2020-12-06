const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ffoodSchema = new Schema({
    welcome_food : {
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

const FFoods = mongoose.model('ffoods', ffoodSchema);

module.exports = FFoods;