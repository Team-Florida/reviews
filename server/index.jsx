const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;
const app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});