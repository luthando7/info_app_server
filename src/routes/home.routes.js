'use strict';

const controller = require('../api/home.contoller');

const express = require('express');
const router = express.Router();


console.log('>>> on the home router');
router.get('/', controller);

module.exports = router;

