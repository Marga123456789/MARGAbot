// Import the necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();

// Enable CORS
app.use(cors());

// Set up body parser
app.use(bodyParser.json());

// Define a route for handling chat requests
app.post('/chat', (req, res) => {
  // Get the user's message
  const message = req.body.message;

  // Create an AI character
  const ai = new AICharacter();

  // Set the AI character's emotions
  ai.setEmotions({
    happy: ["Saya senang", "Saya bahagia", "Saya sangat senang"],
    sad: ["Saya sedih", "Saya tidak bahagia", "Saya sangat sedih"],
    angry: ["Saya marah", "Saya kesal", "Saya sangat marah"],
    surprised: ["Saya terkejut", "Saya heran", "Saya sangat terkejut"],
    afraid: ["Saya takut", "Saya cemas", "Saya sangat takut"]
  });

  // Set the AI character's name
  ai.setName("MARGA");

  // Set the AI character's personality
  ai.setPersonality({
    friendly: true,
    helpful: true,
    empathetic: true
  });

  // Chat with the user
  ai.chat(message, (response) => {
    // Send the response to the user
    res.send(response);
  });
});

// Start the app
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
