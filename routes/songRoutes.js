const songController1 = require('../controller/songsController');
const express = require('express');
const routes = express.Router();

routes.post('/songs',songController1.createSong)

module.exports = routes;