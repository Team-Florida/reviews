import React from 'react';

const Reviews = (props) => (
  <div>
    {props.data.map((data) => (
      <div className="house-review">
        <div className="user-name">{data.messageThread[0].userName}</div>
        <div className="user-post-month-year">{data.messageThread[0].userPostMonthYear}</div>
        <div className="user-message">{data.messageThread[0].userMessage}</div>
      </div>
    ))}
  </div>
)

{/* <div className="foo">Bar</div> */}

export default Reviews;

