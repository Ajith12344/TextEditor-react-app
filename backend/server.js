const express = require('express');
const crypto = require('crypto');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const port = 5000;

// Load environment variables from .env file
dotenv.config();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to match your frontend origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Endpoint to generate HMAC
app.get('/api/generate-hmac', (req, res) => {
  const { distinctId } = req.query;

  if (!distinctId) {
    return res.status(400).json({ error: 'distinctId is required' });
  }

  const secret = process.env.INBOX_SECRET;

  if (!secret) {
    return res.status(500).json({ error: 'Inbox secret is not configured' });
  }

  try {
    const hash = crypto
      .createHmac('sha256', secret) // Use 'sha256' as the hashing algorithm
      .update(distinctId)
      .digest('base64url')
      .replace(/=+$/, ''); // Remove trailing '=' from base64url encoding

    res.json({ hmac: hash });
  } catch (error) {
    console.error('Error generating HMAC:', error);
    res.status(500).json({ error: 'Error generating HMAC' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
