'use strict';

async function home(req, res, next) {
    res.json({
        message: 'Hello this works'
    });
}

module.exports = home;
