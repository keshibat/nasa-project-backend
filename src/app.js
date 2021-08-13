const express = require('express');

const planetRouter = require('./routes/planets/planets.router');

const app = express();
app.use(express.json());
app.use(planetsRouter);

module.exports = app;