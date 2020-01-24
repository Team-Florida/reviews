const faker = require('faker');

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

var NumberBetweenZeroAndFive = function () {
  var randomNum = Math.floor(Math.random() * Math.floor(6));
  return randomNum;
}

var NumberBetweenZeroAndOne = function () {
  var randomNum = Math.floor(Math.random() * Math.floor(2));
  return randomNum;
}

var fakeData = {
  overallRating: NumberBetweenZeroAndFive(),
  // propertyID: Number,
  messageThread: {
    userName: faker.name.findName(),
    userPostMonthYear: faker.date.month() + ' 2019',
    userMessage: faker.lorem.paragraph(),
    userPicture: faker.image.avatar(),
    hostName: 'Ahmed Valdez', //static
    hostResponseDate: 'January 2020',
    hostMessage: doesHostRespond(),
    hostPicture: `https://s3.amazonaws.com/uifaces/faces/twitter/johnriordan/128.jpg`,
  },
  rating: {
    communication: NumberBetweenZeroAndFive(),
    checkIn: NumberBetweenZeroAndFive(),
    accuracy: NumberBetweenZeroAndFive(),
    location: NumberBetweenZeroAndFive(),
    cleanliness: NumberBetweenZeroAndFive(),
    value: NumberBetweenZeroAndFive()
  },
  amenaties: {
    amazingAmenities: NumberBetweenZeroAndOne(),
    quickResponses: NumberBetweenZeroAndOne(),
    outstandingHositality: NumberBetweenZeroAndOne(),
    sparklingClean: NumberBetweenZeroAndOne(),
    stylishSpace: NumberBetweenZeroAndOne()
  }
}





console.log(fakeData)