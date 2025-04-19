const express = require('express');
const app = express();
const path = require('path');

let latestLocation = {};

app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

app.post('/api/location', (req, res) => {
  latestLocation = req.body;
  res.sendStatus(200);
});

app.get('/api/location', (req, res) => {
  res.json(latestLocation);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
