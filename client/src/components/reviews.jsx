import React from 'react';
import styled from 'styled-components';
import Message from './elements/Message.jsx';
import Date from './elements/Date.jsx';
import UserName from './elements/UserName.jsx';

const Avatar = styled.h1`
  background-color: #D8D8D8;
  border-radius: 50%;
  border-width: 2px;
  border-color: #ffffff;
  // border-style: solid;
  vertical-align: middle;
  overflow: hidden;
  display: block;
  height: 48px;
  width: 48px;
`;

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

