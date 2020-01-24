var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('successfully connected to the database')
});

var reviewSchema = new mongoose.Schema({
  overallRating: Number,
  propertyID: Number,
  //messageThread is currently an object.  I'm unsure if I need to specifiy that it's an object inside an array, or if that will happen by default.
  messageThread: {
    userName: String,
    userPostMonthYear: String,
    userMessage: String,
    userPicture: png,
    hostName: String, //static
    hostResponseDate: String, //dynamic
    hostMessage: String, //dynamic
    hostPicture: png //static
  },
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


let save = (data, callback) => {
  // var repo = new RepoModel(data);

  // console.log('data: ', data)

  ReviewModel.insertMany(data, function(err, data) {
   if (err){
    console.log(err)
   }
    else {
      callback(data)
    }
  });
}
