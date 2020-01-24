import React from 'react';
import Reviews from './reviews.jsx'
// import Rate from ‘./Rate.jsx’
// import ReactCarousel from ‘./ReactCarousel.jsx’
// import SildeShow from ‘./SildeShow.jsx’
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <Reviews />
            </div>
        )
    }
}
export default App;