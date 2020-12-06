const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const kthemeSchema = new Schema({
    ThemeName : {
        type: String
    },
    Description : {
        type: String
    }
})

const KThemes = mongoose.model('kthemes', kthemeSchema);

module.exports = KThemes;