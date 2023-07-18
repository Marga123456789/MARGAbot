const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
  const message = req.body.message;

  const response = await ai.chat(message);

  res.send(response);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
