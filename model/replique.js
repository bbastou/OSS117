const mongoose = require('mongoose');

const repliqueSchema = mongoose.Schema({
    id:Number,
    permalien: String,
    replique: String,
    film: String
});

const Replique = mongoose.model('repliques', repliqueSchema);


module.exports = Replique;