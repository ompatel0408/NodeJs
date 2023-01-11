const playListController = require('../controller/playListController');
const express = require('express');
const routes = express.Router();

routes.post('/playList', playListController.createPlayList);
routes.put('/playList/:id', playListController.pushSongs);
routes.get('/playList',playListController.getPlayList);
routes.put('/playList1/:id', playListController.pullSongs);
module.exports = routes;
