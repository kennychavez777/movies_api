const express = require('express');
const app = express();
// const router = require('./routes/routes')(app);
const routes = require('./routes/routes');
const port = 3000;

app.use('', routes);

app.listen(port, () => { console.log('API running on port ' + port); });