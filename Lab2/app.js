const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Azure! Get');
});

app.post('/', (req, res) => {
    res.send('Hello, Azure! Post');
  });
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port ${port}`));

module.exports = app;