const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors')
const endpoints = require('./endpoints')

const app = express();
const port = 3000;

// Configure HTTPS options

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
};
app.use(cors())

// Define a simple endpoint
app.get('/api/alerts', (req, res) => {
    res.json(endpoints['alerts']('GET'))
});
app.post('/api/alerts', (req, res) => {
    res.json(alerts('POST', {}))
});

// Create an HTTPS server
const server = https.createServer(options, app);

// Start the server
server.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});