const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(cors());

app.get('/vehicle/:number', async (req, res) => {
  const number = req.params.number;

  try {
    const response = await axios.get(`https://santosh-production.up.railway.app/api/vehicle/${number}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Proxy fetch failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
