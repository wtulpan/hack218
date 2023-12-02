const express = require('express');
const app = express();
const port = 3000;

// Define a simple endpoint
app.get('/api/arjun', (req, res) => {
    res.json({ message: 'My whip would smoke that slow ass whip' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});