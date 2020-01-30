import React from 'react';
import styled from 'styled-components';
import Message from './elements/Message.jsx';
import Date from './elements/Date.jsx';
import UserName from './elements/UserName.jsx';
import Avatar from './elements/Avatar.jsx';

// const NameDate = styled.h1`
//   // float: left;
//   text-align: left;
//   margin: 2px 10px;
//   display: inline;
// `;



const Reviews = (props) => (
  //entire block displaying a person's Airbnb review
  <div>
    {props.data.map((data) => (
      <div className="house-review">
        <div className="user-photo-name-date">
          <Avatar>
            <img src={data.messageThread[0].userPicture}/>
          </Avatar>
          <div>
            <UserName>
              <div className="user-name">{data.messageThread[0].userName}</div>
            </UserName>
            <Date>
              <div className="user-post-month-year">{data.messageThread[0].userPostMonthYear}</div>
            </Date>
          </div>
        </div>
        {/* <div className="user-message">{data.messageThread[0].userMessage}</div> */}
        <Message>
          {data.messageThread[0].userMessage}
        </Message>
      </div>
    ))}
  </div>
)

{/* <div className="foo">Bar</div> */}

export default Reviews;

