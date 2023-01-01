'use strict';

const controller = require('../api/home.contoller');

const express = require('express');
const router = express.Router();


router.get('/', controller);

module.exports = router;

