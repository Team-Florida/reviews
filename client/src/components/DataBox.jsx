import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
  margin: 0px;
  font-size: 16px;
  font-weight: 400;
  font-family: Helvetica Neue;
  line-height: 1.375em;
  color: #484848;
  border: 1px solid red;
  height: 239px;
  width: 594;
  padding: 24px 24px 16px;
`;

const OutOfFiveBox = styled.div`
  margin: 0px;
  font-size: 16px;
  font-weight: 400;
  font-family: Helvetica Neue;
  line-height: 1.375em;
  color: #484848;
  border: 1px solid red;
  height: 84px;
  width: 544px;
  // padding: 24px 24px 16px;
`;

const OutOfFiveRow = styled.div`
  margin-bottom: 12px;
  box-sizing: border-box;
  border: 1px solid blue;
  display: block;
  width: 544px;
  height: 20px;
`;

const OneOrZero = styled.div`
  margin: 0px;
  font-size: 16px;
  font-weight: 400;
  font-family: Helvetica Neue;
  line-height: 1.375em;
  color: #484848;
  border: 1px solid red;
  height: 60px;
  width: 544px;
  // padding: 24px 24px 16px;
`;

const OutOfOneRow = styled.div`
  margin-bottom: 12px;
  box-sizing: border-box;
  border: 1px solid blue;
  display: block;
  width: 544px;
  height: 20px;
`;

const DividingLine = styled.div`
  border-bottom-width: 1px;
  border-bottom-color: #EBEBEB;
  border-bottom-style: solid;
  box-sizing: border-box;
  display: block;
  width: 544px;
  margin-top: 8px;
  margin-bottom: 16px;

`




const DataBox = () => {
  return (
  <InfoBox>
    <OutOfFiveBox>
      <OutOfFiveRow></OutOfFiveRow>
      <OutOfFiveRow></OutOfFiveRow>
      <OutOfFiveRow></OutOfFiveRow>
    </OutOfFiveBox>

    <DividingLine></DividingLine>

    <OneOrZero>
      <OutOfOneRow></OutOfOneRow>
      <OutOfOneRow></OutOfOneRow>

    </OneOrZero>
  </InfoBox>
  )
}

export default DataBox;