const express = require("express");
const mongoose = require("mongoose");

const app = express();

// conexão com o banco MongoDB Atlas
mongoose.connect('mongodb+srv://andrezamoreira:marvin13@tiquiz-vwr8v.mongodb.net/questions?retryWrites=true', {
    useNewUrlParser: true
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(3333);