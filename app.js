'use strict';

const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send({
        message: 'Hello there'
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}: http://localhost:${PORT}`);
});
