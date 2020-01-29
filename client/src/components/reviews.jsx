import React from 'react';
import styled from 'styled-components';

const Message = styled.h1`
    margin: 0px;
    font-size: 16px;
    font-weight: 400;
    font-family: Helvetica Neue;
    line-height: 1.375em;
    color: #484848;
    padding-top: 2px;
    padding-bottom: 2px;
    overflow-wrap: break-word;
`;

const UserName = styled.h1`
    margin: 0px;
    font-size: 16px;
    font-weight: 600;
    font-family: Helvetica Neue;
    line-height: 1.375em;
    color: #484848;
    padding-top: 2px;
    padding-bottom: 2px;
    overflow-wrap: break-word;
`;

const Date = styled.h1`
    margin: 0px;
    font-size: 14px;
    font-weight: 400;
    font-family: Helvetica Neue;
    line-height: 1.28571em;
    color: #484848;
    padding-top: 2px;
    padding-bottom: 2px;
    overflow-wrap: break-word;
`;






const Reviews = (props) => (
  //entire block displaying a person's Airbnb review
  <div>
    {props.data.map((data) => (
      <div className="house-review">
        <div className="user-photo-name-date">
          <img src={data.messageThread[0].userPicture}/>
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

