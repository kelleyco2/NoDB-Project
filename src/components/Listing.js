import React, { Component } from 'react';
import 'w3-css/w3.css';
class Listing extends Component {
    constructor() {
        super()

        this.state = {
            value: 0,
            logo: '',
            percent: 'green'
        }

        this.updateValue = this.updateValue.bind(this)
    }

    componentDidMount(){
        if(this.props.listing.quote.USD.percent_change_24h < 0){
            this.setState({
                percent: 'red'
            })
        }
    }


    updateValue(e){
        this.setState({
            value: e.target.value
        })
    }


    
    render() {
        return(
            <div key={this.props.listing.id}>
                <table className="w3-table-all">
                    <tbody>
                        <tr className='w3-hover-blue'>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Market Cap</th>
                            <th>Price</th>
                            <th>Change</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>{this.props.listing.cmc_rank}</td>
                            <td><a style={{textDecoration: 'none', color: 'blue'}} href={`https://coinmarketcap.com/currencies/${this.props.listing.name}`} target="_blank">{this.props.listing.name}</a></td>
                            <td>${Math.round(this.props.listing.quote.USD.market_cap).toLocaleString()}</td>
                            <td>${this.props.listing.quote.USD.price.toFixed(2).toLocaleString()}</td>
                            <td style={{color: this.state.percent}}>{this.props.listing.quote.USD.percent_change_24h.toFixed(2)}%</td>
                            <td><input className='w3-input' style={{width: '200px'}} value={this.state.value} type='number' onChange={this.updateValue} /></td>
                            <td><button className='w3-circle w3-blue' onClick={e => this.props.updatePortfolio(this.props.listing, +this.state.value)}>+</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Listing