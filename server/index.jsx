const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');

const PORT = 3000;
const app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//allows host to repond to guest's message 25% of the time with a random string.
var doesHostRespond = function() {
  var odds = Math.random();
  console.log(odds, 0.25)
  if (odds > 0.25) {
    return null;
  } else {
    return faker.lorem.paragraph()
  }
}

faker.locale = "en_US";


var fakeData = {
  messageThread: {
    userName: faker.name.findName(),
    userPostMonthYear: faker.date.month() + ' 2019',
    userMessage: faker.lorem.paragraph(),
    userPicture: faker.image.avatar(),
    hostName: 'Ahmed Valdez', //static
    hostResponseDate: 'January 2020',
    hostMessage: doesHostRespond(),
  }

  // randomDate: faker.date.month() + faker.date.past(),
}
  // overallRating: Number,
  // propertyID: Number,


//   messageThread: {
//     userName: faker.name.findName(),
//     userPostMonthYear: String,
//     userMessage: String,
//     userPicture: png,
//     hostName: String, //static
//     hostResponseDate: String, //dynamic
//     hostMessage: String, //dynamic
//     hostPicture: png //static
//   },
//   rating: {
//     communication: Number,  //0-5 average
//     checkIn: Number, //0-5 average
//     accuracy: Number, //0-5 average
//     location: Number, //0-5 average
//     cleanliness: Number, //0-5 average
//     value: Number, //0-5 average
//   },
//   amenaties: {
//     amazingAmenities: Number,
//     quickResponses: Number,
//     outstandingHositality: Number,
//     sparklingClean: Number,
//     stylishSpace: Number,
//   }
// });




console.log(fakeData)