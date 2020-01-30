const faker = require('faker');
// faker.setLocale("de");


// doesHostRespond() allows host to repond to guest's message 25% of the time with a random string.  Otherwise the host response will be null.
var doesHostRespond = function() {
  var odds = Math.random();

  if (odds > 0.25) {
    return null;
  } else {
    return faker.lorem.paragraph()
  }
}

var numberBetweenZeroAndFive = function () {
  var randomNum = Math.floor(Math.random() * Math.floor(6));
  return randomNum;
}

var numberBetweenZeroAndOne = function () {
  var randomNum = Math.floor(Math.random() * Math.floor(2));
  return randomNum;
}

var fakeData = function () {
 return {
  overallRating: numberBetweenZeroAndFive(),
  // propertyID: Number,
  messageThread: {
    userName: faker.name.findName(),
    userPostMonthYear: faker.date.past() + ' 2019',
    userMessage: faker.lorem.paragraph(),
    userPicture: faker.image.avatar(),
    hostName: 'Ahmed Valdez', //static
    hostResponseDate: 'January 2020',
    hostMessage: doesHostRespond(),
    hostPicture: `https://s3.amazonaws.com/uifaces/faces/twitter/johnriordan/128.jpg`, //static
  },
  rating: {
    communication: numberBetweenZeroAndFive(),
    checkIn: numberBetweenZeroAndFive(),
    accuracy: numberBetweenZeroAndFive(),
    location: numberBetweenZeroAndFive(),
    cleanliness: numberBetweenZeroAndFive(),
    value: numberBetweenZeroAndFive()
  },
  amenaties: {
    amazingAmenities: numberBetweenZeroAndOne(),
    quickResponses: numberBetweenZeroAndOne(),
    outstandingHositality: numberBetweenZeroAndOne(),
    sparklingClean: numberBetweenZeroAndOne(),
    stylishSpace: numberBetweenZeroAndOne()
  }
}
}

module.exports = fakeData;