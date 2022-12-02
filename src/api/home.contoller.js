'use strict';

async function home(req, res, next) {
    console.log('>> on the controller');
    res.json({
        message: 'Hello this works'
    });
}

module.exports = home;
