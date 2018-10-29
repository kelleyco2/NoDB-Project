import React, { Component } from 'react';
import Listings from './components/Listings'
import Heading from './components/Heading'
import 'w3-css/w3.css';
import './App.css'


class App extends Component {
    render() {
        return(
            <div className='background'>
                <Heading />
                <Listings />
            </div>
        )
    }
}

export default App