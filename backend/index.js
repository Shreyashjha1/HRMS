const express = require('express');
const path = require('path');
const app = express();

// Serve frontend build files
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Handle React routing, send all unmatched requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
