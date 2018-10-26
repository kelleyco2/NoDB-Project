import React, { Component } from 'react';
import axios from 'axios';
import api_keys from './api_keys'
import Listing from './Listing'
import Portfolio from './Portfolio'
import './Listings.css'

class Listings extends Component {
    constructor() {
        super()

        this.state = {
            listings: [],
            portfolio: [],
        }

        this.updatePortfolio = this.updatePortfolio.bind(this)
        this.deletePortfolio = this.deletePortfolio.bind(this)
        this.editAmount = this.editAmount.bind(this)
    }

    componentDidMount(){
        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + api_keys.coinMarketCapKey).then(res => {
            this.setState({
                listings: res.data.data
            })
        })

    }

    updatePortfolio(obj, value){
        let newObj = {
            rank: obj.cmc_rank,
            name: obj.name,
            marketCap: obj.quote.USD.market_cap,
            price: obj.quote.USD.price,
            change: obj.quote.USD.percent_change_24h,
            num: value
        }

        axios.post('/api/coins', newObj).then(res => {
            console.log(res.data)
        })

        axios.get('/api/coins').then(res => {
            this.setState({
                portfolio: res.data
            })
        })
    }

    editAmount(amount, id){
        axios.put(`/api/coins/${id}`, {amount}).then(res => {
            this.setState({
                portfolio: res.data
            })
        })
    }

    deletePortfolio(id){
        axios.delete(`/api/coins/${id}`).then(res => {
            this.setState({
                portfolio: res.data
            })
        })
    }



    render() {
        let listings = this.state.listings.map( listing  => {
            return (
                <Listing 
                listing={listing}
                updatePortfolio={this.updatePortfolio}/>
            )
        })
        let coins = this.state.portfolio.map(coin => {
            return (
                <Portfolio
                coin={coin} 
                deletePortfolio={this.deletePortfolio}
                edit={this.state.edit}
                toggleEdit={this.toggleEdit}
                amount={this.state.amount}
                handleAmountChange={this.handleAmountChange}
                editAmount={this.editAmount}
                />
            )
        })
        return(
            <div className='container'>
                <div className='listings'>{listings}</div>
                <div>{coins}</div>
            </div>
        )
    }
}

export default Listings