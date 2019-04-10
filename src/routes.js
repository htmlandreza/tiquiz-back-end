const express = require("express");

const routes = express.Router();

const QuestionController = require('./controllers/QuestionController');

// GET, POST, PUT, DELETE
routes.post("/questions", QuestionController.store)

module.exports = routes;