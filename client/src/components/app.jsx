import React from 'react';
import Reviews from './reviews.jsx';
import axios from 'axios';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromDB: []
        }
    }
    getData() {

        axios.get('/reviews')
        .then((response) => {
            // handle success
            // console.log(response)
            this.setState({
                dataFromDB: response.data
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
                <h1>Airbnb Reviews</h1>
                <Reviews data={this.state.dataFromDB}/>
            </div>
        )
    }
}

export default App;