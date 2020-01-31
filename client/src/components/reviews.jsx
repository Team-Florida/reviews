import React from 'react';
import styled from 'styled-components';
import Message from './elements/Message.jsx';
import Date from './elements/Date.jsx';
import UserName from './elements/UserName.jsx';
import Avatar from './elements/Avatar.jsx';

const PicNameDate = styled.div`
  // float: left;
  width: 400px;
  height: 60px;
  text-align: left;
  margin: 2px 0px;
  // border: 1px solid #000000;
`;

const FullReview = styled.div`
  // width: 400px;
  // height: 400px;
  // text-align: left;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid red;
`



const Reviews = (props) => (
  //entire block displaying a person's Airbnb review
  <div>
    {props.data.map((data) => (

      <FullReview>

        <PicNameDate>

            <Avatar>
              <img src={data.messageThread[0].userPicture}/>
            </Avatar>

            <div>
              <UserName>
                <div>{data.messageThread[0].userName}</div>
              </UserName>
              <Date>
                <div>{data.messageThread[0].userPostMonthYear}</div>
              </Date>
            </div>

        </PicNameDate>

        <Message>
          {data.messageThread[0].userMessage}
        </Message>

      </FullReview>

    ))}
  </div>
)

{/* <div className="foo">Bar</div> */}

export default Reviews;

