import React, { Component } from 'react';


class Portfolio extends Component {
    constructor() {
        super()

        this.state = {
            edit: false,
            amount: 0,
            percent: 'green'
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

    componentDidMount(){
        if(this.props.coin.change < 0){
            this.setState({
                percent: 'red'
            })
        }
    }

    render() {
        return (
            <div>
                <table className="w3-table-all w3-animate-left">
                    <tbody>
                        <tr className='w3-hover-blue'>
                            <th>Rank</th>
                            <th>Name</th>
                            {/* <th>Market Cap</th> */}
                            <th>Price</th>
                            <th>Change</th>
                            <th>Amount</th>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>{this.props.coin.rank}</td>
                            <td>{this.props.coin.name}</td>
                            {/* <td>${Math.round(this.props.coin.marketCap).toLocaleString()}</td> */}
                            <td>${this.props.coin.price.toFixed(2).toLocaleString()}</td>
                            <td style={{color: this.state.percent}}>{this.props.coin.change.toFixed(2)}%</td>
                            <td>{this.props.coin.num}</td>
                            <td>${Math.round(this.props.coin.price * this.props.coin.num).toLocaleString()}</td>
                            <td>{
                                this.state.edit ? 
                                (
                                    <div>
                                        <input className='w3-input'value={this.state.amount} type='number' style={{width: '100px', marginRight: '10px'}} onChange={this.handleAmountChange}/>
                                        <button className="w3-button w3-round-xxlarge w3-blue" style={{marginTop: '10px'}} onClick={e => {this.props.editAmount(this.state.amount, this.props.coin.id); this.toggleEdit()}}>Submit</button>
                                        <button className="w3-button w3-round-xxlarge w3-blue" style={{marginTop: '10px'}} onClick={this.toggleEdit}>Cancel</button>
                                    </div>
                                ) :
                                (
                                <button className="w3-button w3-round-xxlarge w3-blue" style={{width: '85px'}}onClick={this.toggleEdit}>Edit</button>
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