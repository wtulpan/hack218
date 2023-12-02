const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors')

const app = express();
const port = 3000;

// Configure HTTPS options

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
};
app.use(cors())

// Define a simple endpoint
app.post('/api/arjun', (req, res) => {
    res.json({ message: 'my whip is way faster than your whip' });
    console.log(req.ip)
});

app.post('/api/fuckeduparjun', (req, res) => {
    res.json({ message: 'youre doing rediculous stuff in the street'});
    console.log(req.ip)
});

// Create an HTTPS server
const server = https.createServer(options, app);

// Start the server
server.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});