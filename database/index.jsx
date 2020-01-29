var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('successfully connected to the database')
});
var fakeData = require('./fakedata.jsx');


var reviewSchema = new mongoose.Schema({
  overallRating: Number,
  // propertyID: Number,
  messageThread: [{
    userName: String,
    userPostMonthYear: String,
    userMessage: String,
    userPicture: String,
    hostName: String, //static
    hostResponseDate: String, //dynamic
    hostMessage: String, //dynamic
    hostPicture: String //static
  }],
  rating: {
    communication: Number,  //0-5 average
    checkIn: Number, //0-5 average
    accuracy: Number, //0-5 average
    location: Number, //0-5 average
    cleanliness: Number, //0-5 average
    value: Number, //0-5 average
  },
  amenaties: {
    amazingAmenities: Number,
    quickResponses: Number,
    outstandingHositality: Number,
    sparklingClean: Number,
    stylishSpace: Number,
  }
});

var ReviewModel = mongoose.model('Review', reviewSchema);


let save = () => {

  //deletes all documents currently in the collection
  ReviewModel.deleteMany({}, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('success, the origional data has been deleted');
    }
  });

  // populate() creates an array of unique data objects, following the conventions of the reviewSchema below.  We can then add this array of 100 objects to the database.
  var arrayOfFakeData = [];
  var populate = function (){
    for (var i = 0; i < 100; i++) {
      var tempData = fakeData();
      arrayOfFakeData.push(tempData);
    }
  }
  //calls the function above.
  populate()

  ReviewModel.insertMany(arrayOfFakeData, function(err, data) {
   if (err){
    console.log(err)
   } else {
    console.log('success, your data has been logged to the db')
    }
  });
}
//calls the above function and populates the database with 100 new records.  This function call can be moved elsewhere in this repo.
save();

let getAllReviews = (callback) => {
  // return db.reviews.find();
  var houseReviews = ReviewModel.find({}, function (err, docs) {
    if (err){
      callback(err)
    } else {
      callback(docs)
    }

  });

}

module.exports = getAllReviews