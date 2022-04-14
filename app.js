const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/html2', (req, res) => {
  res.sendFile(path.join(__dirname + '/index2.html'));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
