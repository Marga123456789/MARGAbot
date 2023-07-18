import { ChatBot } from './chatbot';

const chatbot = new ChatBot();

export default async function handler(req, res) {
  const message = req.body.message;

  const response = await chatbot.chat(message);

  res.send(response);
}
