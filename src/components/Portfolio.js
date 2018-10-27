import React, { Component } from 'react';


class Portfolio extends Component {
    constructor() {
        super()

        this.state = {
            edit: false,
            amount: 0
        }

        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleAmountChange = this.handleAmountChange.bind(this)
    }

    toggleEdit(){
        this.setState({
            edit: !this.state.edit
        })
    }

    handleAmountChange(e){
        this.setState({
            amount: e.target.value
        })
    }

    render() {
        return (
            <div>
                <table className="w3-table-all">
                    <tbody>
                        <tr className='w3-hover-blue'>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Market Cap</th>
                            <th>Price</th>
                            <th>Change 24hr</th>
                            <th>Amount</th>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr className='w3-hover-grey'>
                            <td>{this.props.coin.rank}</td>
                            <td>{this.props.coin.name}</td>
                            <td>${Math.round(this.props.coin.marketCap).toLocaleString()}</td>
                            <td>${this.props.coin.price.toFixed(3).toLocaleString()}</td>
                            <td>{this.props.coin.change.toFixed(2)}%</td>
                            <td>{this.props.coin.num}</td>
                            <td>${Math.round(this.props.coin.price * this.props.coin.num).toLocaleString()}</td>
                            <td>{
                                this.state.edit ? 
                                (
                                    <div>
                                        <input className='w3-input'value={this.state.amount} type='number' onChange={this.handleAmountChange}/>
                                        <button className="w3-button w3-round-xxlarge w3-blue" onClick={e => {this.props.editAmount(this.state.amount, this.props.coin.id); this.toggleEdit()}}>Submit</button>
                                        <button className="w3-button w3-round-xxlarge w3-blue" onClick={this.toggleEdit}>Cancel</button>
                                    </div>
                                ) :
                                (
                                <button className="w3-button w3-round-xxlarge w3-blue" onClick={this.toggleEdit}>Edit</button>
                                )
                            }
                            </td>
                            <td><button className="w3-button w3-round-xxlarge w3-blue" onClick={e => this.props.deletePortfolio(this.props.coin.id)}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Portfolio