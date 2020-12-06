const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const tthemeSchema = new Schema({
    ThemeName : {
        type: String
    },
    Description : {
        type: String
    }
})

const TThemes = mongoose.model('tthemes', tthemeSchema);

module.exports = TThemes;