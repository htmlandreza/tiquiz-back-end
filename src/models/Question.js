const mongoose = require("mongoose");

const Question = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    },
    optionsAnswer: [{
        optionsID:{
            type:Number,
            default: 0
        },
        answer: String
    }],
    creatBy: [{
        intitution: String,
        teacherName: {
            type: String,
            required: true
        },
        teacherEmail: {
            type: String,
            required: true
        }
    }],
    status: {
        type: String,
        required: true
    }
},
{
    // create at e update at -> dates
    timestamps: true
});

module.exports = mongoose.model('Question', Question);