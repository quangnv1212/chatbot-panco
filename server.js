const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000; // Choose a port for your server

// Middleware to parse JSON requests
app.use(express.json());

// Define a route that makes a call to the OpenAI API
app.post('/translate', async (req, res) => {
    try {
        const { text } = req.body;

        // Check if the text exceeds 350 words
        const wordCount = text.split(/\s+/).length;
        if (wordCount > 350) {
            return res.status(400).json({ error: 'Input text exceeds 350 words limit' });
        }

        // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
        // Special comment: Place your OpenAI API key here
        const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';

        // Make a call to the OpenAI API
        const response = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                prompt: `Translate the following English text to French: "${text}"`,
                max_tokens: 60,
            },
            {
                headers: {
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Extract and send back the translated text
        const translatedText = response.data.choices[0].text.trim();
        res.json({ translatedText });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});