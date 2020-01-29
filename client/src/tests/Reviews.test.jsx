import React from 'react';
import Reviews from '../components/Reviews.jsx';
import { shallow, mount, render } from 'enzyme';
// import Foo from '../components/Foo';

var testingData = [
  {
  "rating": {
  "communication": 5,
  "checkIn": 5,
  "accuracy": 1,
  "location": 0,
  "cleanliness": 5,
  "value": 0
  },
  "amenaties": {
  "amazingAmenities": 0,
  "quickResponses": 0,
  "outstandingHositality": 0,
  "sparklingClean": 1,
  "stylishSpace": 1
  },
  "_id": "5e2fb6337a29474f64f071fc",
  "overallRating": 4,
  "messageThread": [
  {
  "_id": "5e2fb6337a29474f64f071fd",
  "userName": "Mr. Peyton Auer",
  "userPostMonthYear": "February 2019",
  "userMessage": "Laborum quod quia cupiditate vitae. In expedita et amet numquam iure odit et. Amet possimus impedit deserunt sit accusantium.",
  "userPicture": "https://s3.amazonaws.com/uifaces/faces/twitter/overra/128.jpg",
  "hostName": "Ahmed Valdez",
  "hostResponseDate": "January 2020",
  "hostMessage": null,
  "hostPicture": "https://s3.amazonaws.com/uifaces/faces/twitter/johnriordan/128.jpg"
  }
  ],
  "__v": 0
  },
  {
  "rating": {
  "communication": 5,
  "checkIn": 4,
  "accuracy": 1,
  "location": 4,
  "cleanliness": 1,
  "value": 3
  },
  "amenaties": {
  "amazingAmenities": 0,
  "quickResponses": 0,
  "outstandingHositality": 1,
  "sparklingClean": 1,
  "stylishSpace": 1
  },
  "_id": "5e2fb6337a29474f64f071fe",
  "overallRating": 4,
  "messageThread": [
  {
  "_id": "5e2fb6337a29474f64f071ff",
  "userName": "Mrs. Carmine Braun",
  "userPostMonthYear": "August 2019",
  "userMessage": "Error perspiciatis omnis vel. Sit omnis numquam. Sit necessitatibus dolores est sunt earum dolor laudantium quas omnis. Doloremque qui sit suscipit molestiae totam. Atque temporibus molestiae. Dolorem id ut.",
  "userPicture": "https://s3.amazonaws.com/uifaces/faces/twitter/lepetitogre/128.jpg",
  "hostName": "Ahmed Valdez",
  "hostResponseDate": "January 2020",
  "hostMessage": null,
  "hostPicture": "https://s3.amazonaws.com/uifaces/faces/twitter/johnriordan/128.jpg"
  }
  ],
  "__v": 0
  },
  {
  "rating": {
  "communication": 3,
  "checkIn": 4,
  "accuracy": 1,
  "location": 0,
  "cleanliness": 0,
  "value": 0
  },
  "amenaties": {
  "amazingAmenities": 1,
  "quickResponses": 0,
  "outstandingHositality": 1,
  "sparklingClean": 1,
  "stylishSpace": 1
  },
  "_id": "5e2fb6337a29474f64f07200",
  "overallRating": 1,
  "messageThread": [
  {
  "_id": "5e2fb6337a29474f64f07201",
  "userName": "Cora Swift",
  "userPostMonthYear": "February 2019",
  "userMessage": "Doloribus dolor vel autem nisi assumenda accusantium occaecati in laborum. Magnam ipsam ex quae libero earum ipsam delectus rerum officiis. Cumque illum ut cupiditate rerum nobis nostrum aut non. Occaecati consequatur sint vel recusandae modi incidunt reiciendis.",
  "userPicture": "https://s3.amazonaws.com/uifaces/faces/twitter/dannol/128.jpg",
  "hostName": "Ahmed Valdez",
  "hostResponseDate": "January 2020",
  "hostMessage": null,
  "hostPicture": "https://s3.amazonaws.com/uifaces/faces/twitter/johnriordan/128.jpg"
  }
  ],
  "__v": 0
  }
]


describe('A suite', function() {
  it('should check if the data contains a username', function() {
    expect(shallow(<Reviews data={testingData}/>).contains(<div className="user-name">{"Mr. Peyton Auer"}</div>)).toBe(true);
  });
  it('should check if the data contains a date', function() {
    expect(shallow(<Reviews data={testingData}/>).contains(<div className="user-post-month-year">{'February 2019'}</div>)).toBe(true);
  });
  it('should check if the data contains a message', function() {
    expect(shallow(<Reviews data={testingData}/>).contains(<div className="user-message">{"Laborum quod quia cupiditate vitae. In expedita et amet numquam iure odit et. Amet possimus impedit deserunt sit accusantium."}</div>)).toBe(true);
  });
});




// describe('A suite', function() {
//   it('should render without throwing an error', function() {
//     expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
//   });

//   it('should be selectable by class "foo"', function() {
//     expect(shallow(<Foo />).is('.foo')).toBe(true);
//   });

//   it('should mount in a full DOM', function() {
//     expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<Foo />).text()).toEqual('Bar');
//   });
// });
