const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { portMain } = require('./constants/config');
const { ROUTES } = require('./constants/routes');
const { setupLogging } = require('./config/logging');
const { setupProxies } = require('./config/proxy');

const app = express();

app.use(cors());
app.use(helmet());
setupLogging(app);
setupProxies(app, ROUTES);

app.get('/checking', (req, res) => {
    res.json({"message": "Welcome To API Gateway!"});
});

app.listen(portMain, () => {
    console.log('API Gateway running on port', portMain);
});
