const express =  require('express');
const avatar_router = new express.Router();
const avatarController = require('../controllers/Avatar.Controller');


avatar_router.get("/get_access_token/:access_token", avatarController.getAccessId)


module.exports = avatar_router;

