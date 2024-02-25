const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('https://shardnetwork.autos/search-proxy', async (req, res) => {
  try {
    const searchTerm = req.body.query;

    // Make a request to the Google search API
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    const response = await axios.get(googleSearchUrl);

    // Forward the Google search results to the client
    res.send(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
