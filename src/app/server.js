// server.js
const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();
const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const router = new Router();

app.use(cors());
app.use(bodyParser());

// Function to read messages from the file
const getMessages = () => {
  try {
    const filePath = path.resolve(__dirname, 'messages.txt');
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split('\n').filter(line => line.trim() !== '');
  } catch (err) {
    console.error('Error reading messages file:', err);
    return [];
  }
};

// Endpoint to get a random message
router.get('/random-message', async ctx => {
  const messages = getMessages();
  if (messages.length === 0) {
    ctx.status = 500;
    ctx.body = { error: 'No messages available' };
    return;
  }
  const randomIndex = Math.floor(Math.random() * messages.length);
  ctx.body = { message: messages[randomIndex].toUpperCase() };
});

app.use(router.routes()).use(router.allowedMethods());

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/random-message`);
});
