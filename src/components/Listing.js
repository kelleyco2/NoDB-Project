import React, { Component } from 'react';

class Listing extends Component {
    constructor() {
        super()

        this.state = {
            value: 0,
        }

        this.updateValue = this.updateValue.bind(this)
    }

    updateValue(e){
        this.setState({
            value: e.target.value
        })
    }

    // let results = this.props.listings.map(obj => {
    //     return (
    //     <div key={obj.id}>
    //         <table>
    //             <tbody>
    //             <tr>
    //                 <th>#</th>
    //                 <th>Name</th>
    //                 <th>Market Cap</th>
    //                 <th>Price</th>
    //                 <th>Change 24hr</th>
    //             </tr>
    //             <tr>
    //                 <td>{obj.cmc_rank}</td>
    //                 <td>{obj.name}</td>
    //                 <td>${Math.round(obj.quote.USD.market_cap).toLocaleString()}</td>
    //                 <td>${obj.quote.USD.price.toFixed(3).toLocaleString()}</td>
    //                 <td>{obj.quote.USD.percent_change_24h.toFixed(2)}%</td>
    //                 <td><input value={this.state.value} type='number' onChange={this.props.updateValue}/></td>
    //                 <td><button onClick={() => this.props.updatePortfolio(this.props.listing, this.state.value)}>+</button></td>
    //             </tr>
    //             </tbody>
    //         </table>
    //     </div>
    //     )
    // })
    render() {
        return(
            <div key={this.props.listing.id}>
                <table>
                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Market Cap</th>
                            <th>Price</th>
                            <th>Change 24hr</th>
                        </tr>
                        <tr>
                            <td>{this.props.listing.cmc_rank}</td>
                            <td>{this.props.listing.name}</td>
                            <td>${Math.round(this.props.listing.quote.USD.market_cap).toLocaleString()}</td>
                            <td>${this.props.listing.quote.USD.price.toFixed(3).toLocaleString()}</td>
                            <td>{this.props.listing.quote.USD.percent_change_24h.toFixed(2)}%</td>
                            <td><input value={this.state.value}type='number' onChange={this.updateValue} /></td>
                            <td><button onClick={e => this.props.updatePortfolio(this.props.listing, +this.state.value)}>+</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Listing