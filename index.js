const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

const ai = require('./ai');

app.post('/chat', async (req, res) => {
  const message = req.body.message;

  const response = await ai.chat(message);

  res.send(response);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
