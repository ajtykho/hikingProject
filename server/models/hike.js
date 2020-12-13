const mongoose = require('mongoose');

const hikeSchema = mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String },
   descritpion: { type: String },
   imageUrl: { type: String }
});

module.exports = mongoose.model('Hike', hikeSchema);