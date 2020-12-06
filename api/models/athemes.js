const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const athemeSchema = new Schema({
    ThemeName : {
        type: String
    },
    Description : {
        type: String
    }
})

const AThemes = mongoose.model('athemes', athemeSchema);

module.exports = AThemes;