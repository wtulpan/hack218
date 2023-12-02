const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

// Define a simple endpoint
app.get('/api/arjun', (req, res) => {
    res.json({ message: 'my whip is way faster than your whip' });
});

// Configure HTTPS options
const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
};

// Create an HTTPS server
const server = https.createServer(options, app);

// Start the server
server.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});