'use strict';

module.exports = function(app) {
    app.use('/', require('./src/routes'));
};
