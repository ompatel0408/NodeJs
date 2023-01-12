const playListController1 = require('../controller/playListController');
const express = require('express');
const routes = express.Router();

routes.post('/playList', playListController1.createPlayList);
routes.put('/playList/:id', playListController1.pushSongs);
routes.get('/playList',playListController1.getPlayList);
routes.put('/playList1/:id', playListController1.pullSongs);
module.exports = routes;
