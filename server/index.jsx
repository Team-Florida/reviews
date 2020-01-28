const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;
const app = express();
const query = require('../database/index.jsx');

// console.log(query.query, 'THIS IS ON THE SERVER SIDE');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/reviews', function (req, res) {

  query.query((data)=>{res.send(data)});

})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});