const mongoose = require("mongoose");

const Institution = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},
{
    // create at e update at -> dates
    timestamps: true
});

module.exports = mongoose.model('Institution', Institution);