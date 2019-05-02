const express = require('express');
const path = require('path');
const app = express();
const port = 3000

app.use(express.static(__dirname + '/dist/EcomPortal'));

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/EcomPortal/index.html'));
});

app.listen(process.env.PORT || port, () => console.log('application started'));
