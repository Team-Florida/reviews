import React from 'react';
import Reviews from './reviews.jsx';
import axios from 'axios';
import styled from 'styled-components';
import OverallReview from './OverallReview.jsx'

const Title = styled.h1`
    margin: 0px;
    font-size: 24px;
    font-weight: 800;
    font-family: Helvetica Neue;
    line-height: 1.25em;
    color: #484848;
    padding-top: 2px;
    padding-bottom: 2px;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houseReviews: [],
            viewableHouseReviews: []
        }
    }

    getData() {
        axios.get('/reviews')
        .then((response) => {
            // handle success
            // console.log(response.data)
            this.setState({
                houseReviews: response.data,
                //displays only the first 7 reviews
                viewableHouseReviews: [response.data[0], response.data[1], response.data[2], response.data[3], response.data[4], response.data[5], response.data[6]]
            })

        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
    }

    componentDidMount(){
        this.getData()
    }

    render() {
        return (
            <div>
                <Title>
                    Reviews
                </Title>

                {this.state.houseReviews === undefined ? <div /> : <OverallReview data={this.state.houseReviews}/>}
                <Reviews data={this.state.viewableHouseReviews}/>
            </div>
        )
    }
}

export default App;