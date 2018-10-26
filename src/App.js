import React, { Component } from 'react';
import Listings from './components/Listings'
import Heading from './components/Heading'

class App extends Component {
    render() {
        return(
            <div>
                <Heading />
                <Listings />
            </div>
        )
    }
}

export default App