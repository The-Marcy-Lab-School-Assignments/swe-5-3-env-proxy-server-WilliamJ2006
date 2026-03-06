//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');

const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.API_KEY);

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToFrontend = path.join(__dirname, '../frontend');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToFrontend);

app.use(serveStatic);

const serveGIFS = async (req, res, next) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=${process.env.API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(
        `Fetch Failed: ${response.status} ${response.statusText}`,
      );
    }
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(503).send(error);
  }
};

const serveSearchGIFS = async (req, res, next) => {
  try {
    const q = req.query.q;
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${process.env.API_KEY}&limit=10`,
    );
    if (!response.ok) {
      throw new Error(
        `Fetch Failed: ${response.status} ${response.statusText}`,
      );
    }
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(503).send(error);
  }
};

app.get('/api/gifs', serveGIFS);
app.get('/api/gifs/search', serveSearchGIFS);

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
