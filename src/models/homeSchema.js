'use strict';

const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const homeSchema = new Schema({
    userEmail: {type: String},
});

homeSchema.index({userEmail: 1});

module.exports = mongooose.model('homeSchema');
