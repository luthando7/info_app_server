'use strict';

const express = require('express');
const homeRoutes = require('./src/routes/home.routes');
const app = express();

const PORT = 3000;


app.use('/', homeRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}: http://localhost:${PORT}`);
});
