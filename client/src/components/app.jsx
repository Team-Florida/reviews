import React from 'react';
import Reviews from './reviews.jsx';
import axios from 'axios';
import styled from 'styled-components';

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

// Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houseReviews: []
        }
    }

    getData() {
        axios.get('/reviews')
        .then((response) => {
            // handle success
            console.log(response.data)
            this.setState({
                houseReviews: response.data
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
                <Reviews data={this.state.houseReviews}/>
            </div>
        )
    }
}

export default App;