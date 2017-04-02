const express = require('express');
const bodyParser = require('body-parser');
const config = require('../etc/config.json');
const cors = require('cors');

let db = require('./utils/DataBaseUtils.js');

// Set up connection with data Base
db.setUpConnection();

// Create new express app
const app = express();

// Use midleware body-parser to parce body of request to normal .json
app.use( bodyParser.json() );

// Use midleware cors to make cros origin requests
app.use(cors({ origin: '*' }));

// Make REST API
app.get('/notes', (req, res) => {
  // get request to /notes url. in result - send response. With use dbUTILS
  db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
  // POST request with use dbUTILS
  db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
  // DELETE request with use dbUTILS
  db.deleteNote(req.params.id).then(data => {
    res.send(data)
  });
});

// Listen server on port
const server = app.listen(config.serverPort, () => {
  console.log(`Server listening on port ${config.serverPort}`);
});
