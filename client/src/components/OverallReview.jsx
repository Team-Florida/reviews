import React from 'react';


const OverallReview = (props) => {
  var overallRating = 0;
  var numberOfReviews = 0;
  var averageOverallRating = 0;
  if (props.data.length > 0) {
    for (var i = 0; i < props.data.length; i++) {
      overallRating += props.data[i].overallRating;
      numberOfReviews++;
    }
    averageOverallRating = overallRating/100;
  }

  return(

    <div>
      {averageOverallRating + '   |    100 Reviews'}
    </div>
  )

}
  //entire block displaying a person's Airbnb review



export default OverallReview;
