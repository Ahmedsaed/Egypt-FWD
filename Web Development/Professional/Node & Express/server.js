const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const port = 8000;

const server = app.listen(port, () => console.log(`Running on port ${port}`));