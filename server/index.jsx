const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;
const app = express();
const getAllReviews = require('../database/index.jsx');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/reviews', function (req, res) {

  getAllReviews((data)=>{res.send(data)});

})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});