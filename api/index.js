// Imports and setup
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
app.use(express.json());

// Endpoints
app.get('/api/alerts', async (req, res) => {
    console.log(req.ip.split(':')[req.ip.split(':').length-1])
    try {
        const data = await endpoints['alerts']('GET');
        res.json(data);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});
app.put('/api/alerts', async (req, res) => {
    var payload = req.body
    try {
        const data = await endpoints['alerts']('PUT', payload.text);
        res.json(data);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});
app.delete('/api/alerts', async (req, res) => {
    var payload = req.body
    try {
        const data = await endpoints['alerts']('DELETE', payload.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

// Create an HTTPS server
const server = https.createServer(options, app);
server.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});