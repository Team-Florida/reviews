import React from 'react';

const Reviews = (props) => (
  <div>
    {props.data.map((data, index) => (
      <div className="phrase-row">
      <div className="phrase-data">{data.messageThread[0].userName}</div>
      <div className="phrase-data">{data.messageThread[0].userPostMonthYear}</div>
      <div className="phrase-data">{data.messageThread[0].userMessage}</div>

      {/* {console.log(data)} */}
      </div>
    ))}
  </div>
)

export default Reviews;

