const songController = require('../controller/songsController');
const express = require('express');
const routes = express.Router();

routes.post('/songs',songController.createSong)

module.exports = routes;