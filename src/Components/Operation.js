import React, { Component } from 'react'
import Breakdown from './Breakdown';

class Opertion extends Component {
   constructor() {
      super()
      this.state = {
         amount: "",
         vendor: "",
         category: "",
         cantWithdraw: false,
      }
   }

   deState = () => {
      this.setState({
         amount: "",
         vendor: "",
         category: ""
      })
   }

   getState = () => {
      let action = {
         amount: parseInt(this.state.amount),
         vendor: this.state.vendor,
         category: this.state.category,
      }
      return action
   }

   addDeposit = () => {
      let action = this.getState()
      this.deState()
      this.props.addDeposit(action)
      this.setState({ cantWithdraw: false })
   }

   addWithdraw = () => {
      let action = this.getState()
      action.amount = 0 - action.amount
      if (this.props.balance + action.amount <= 500) { this.setState({ cantWithdraw: true }) }
      else {
         console.log(this.props.balance + action.amount)
         this.deState()
         this.props.addDeposit(action)
         this.setState({ cantWithdraw: false })
      }
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   render() {
      return (
         <div>
            <div className="input">
               <input name="amount" type="number" placeholder="Amount" value={this.state.amount} onChange={this.handleChange} />
               <input name="vendor" placeholder="Vendor" value={this.state.vendor} onChange={this.handleChange} />
               <input name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange} />
            </div>
            <br />
            <div className="button">
               <button className="Deposit" onClick={this.addDeposit}>Deposit</button>
               <button className="Withdraw" onClick={this.addWithdraw}>Withdraw</button>
            </div>
            <br />
            {this.state.cantWithdraw ? <div>you don't have enough money</div> : null}
            <div className="breakdown">breakdown
            {/* need to add breakdown by categories */}
               {this.props.actions.map((a, i) => <Breakdown actions={a} key={i} />)}
            </div>
         </div>)
   }
}
export default Opertion

