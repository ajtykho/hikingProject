const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    maxHikeId: { type: Number },
});

module.exports = mongoose.model('Sequence', schema);
