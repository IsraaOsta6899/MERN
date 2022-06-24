const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String },
    position: { type: String },
    status:{type:Array,"default":[0,0,0]}
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);