const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// GET route
app.get('/payload', (req, res) => {
  res.send('GET Testing');
});

// POST route
app.post('/payload', (req, res) => {
  res.json({
    message: 'POST request received',
    data: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
