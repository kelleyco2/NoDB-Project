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
            total: 0,
            logo: ''
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
            let newTotal = 0
            for(let i = 0; i < res.data.length; i++){
                newTotal += res.data[i].num * res.data[i].price
                this.setState({
                    total: newTotal
                })
            }
            this.setState({
                portfolio: res.data,
            })
        })
    }

    editAmount(amount, id){
        axios.put(`/api/coins/${id}`, {amount}).then(res => {
            let newTotal = 0
            for(let i = 0; i < res.data.length; i++){
                newTotal += res.data[i].num * res.data[i].price
                this.setState({
                    total: newTotal
                })
            }
            this.setState({
                portfolio: res.data
            })
        })
    }

    deletePortfolio(id){
        axios.delete(`/api/coins/${id}`).then(res => {
            let newTotal = 0
            for(let i = 0; i < res.data.length; i++){
                newTotal += res.data[i].num * res.data[i].price
                this.setState({
                    total: newTotal
                })
            }
            this.setState({
                portfolio: res.data
            })
            if(res.data.length < 1){
                this.setState({
                    total: 0
                })
            }
        })
    }



    render() {
        let listings = this.state.listings.map( (listing, i)  => {
            return (
                <Listing 
                listing={listing}
                updatePortfolio={this.updatePortfolio}
                key={i}/>
            )
        })
        let coins = this.state.portfolio.map((coin, i) => {
            return (
                <Portfolio
                coin={coin} 
                deletePortfolio={this.deletePortfolio}
                edit={this.state.edit}
                toggleEdit={this.toggleEdit}
                amount={this.state.amount}
                handleAmountChange={this.handleAmountChange}
                editAmount={this.editAmount}
                key={i}/>
            )
        })
        return(
            <div className='container'>
                <div className='listings'>{listings}</div>
                <div className='portfolio'>
                    {coins}
                    <h2 style={{marginLeft: '16px'}}>Total ${Math.round(this.state.total).toLocaleString()}</h2>
                </div>
            </div>
        )
    }
}

export default Listings