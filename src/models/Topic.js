const mongoose = require("mongoose");

const Topic = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    }
},
{
    // create at e update at -> dates
    timestamps: true
});

module.exports = mongoose.model('Topic', Topic);