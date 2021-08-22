const express = require('express');
const app = express();
const cors = require("cors");
const axios = require('axios');

const port = 4000
const artistID = '393068687';

app.use(cors());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

app.get('/', (req, res) => { 
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