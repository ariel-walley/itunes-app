const express = require('express');
const app = express();
const cors = require("cors");
const axios = require('axios');
const port = 4000;

app.use(cors());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

app.get('/albums/:artist', (req, res) => {
  const artistID = req.params.artist;
  axios.get(`https://itunes.apple.com/lookup?id=${artistID}&entity=album`)
  .then((response) => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.send(error);
  })
})