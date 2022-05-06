// Setup empty JS object to act as endpoint for all routes
projectData = {
    temperature: 0,
    date: '',
    userResponse: ''
};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
const port = 8080;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server and callback function
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

// Callback function to complete GET '/all'
app.get('/all', (req, res) => {
    console.log('Sending Data');
    res.send(JSON.stringify(projectData));
});

// Post Route
app.post('/add', (req, res) => {
    const body = req.body;
    console.log('Data received', body);
    projectData = {
        temperature: body.temperature,
        date: body.date,
        userResponse: body.userResponse
    };
});