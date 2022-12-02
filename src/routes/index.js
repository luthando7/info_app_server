'use strict';

const express = require('express');
const router = express.Router();
const controllers = require('../api/controllers');
// const middleware = require('../api/middleware');

require('./home.routes')(router, controllers);

module.exports = router;
