import React, { Component } from 'react';
import './App.css';
import Transactions from './Components/Transactions';
import Opertion from './Components/Operation';
import axios from 'axios';



class App extends Component {
   constructor() {
      super()
      this.state = {
         actions: [],
         balance: 0
      }
   }

   componentDidMount = () => {
      this.getAllActions()
   }

   getAllActions = async () => {
      let res = await axios.get(`http://localhost:5000/transactions`)
      const actions = res.data
      this.setState({ actions }, function () {
         this.colcSum()
      })
   }

   postNewAction = async action => {
      await axios.post(`http://localhost:5000/transaction`, action)
   }


   colcSum = () => {
      let sum = 0
      let all = this.state.actions
      all.forEach(a => sum += a.amount)
      this.setState({ balance: sum })
   }

   addDeposit = async action => {
      await this.postNewAction(action)
      await this.getAllActions()
      this.colcSum()
   }

   addWithdraw = action => {
      this.addDeposit(action)
   }

   render() {
      return (
         <div className="App" >
            <header className="App-header">
               <div>{this.state.balance}</div>
               <br />
               <Transactions actions={this.state.actions} />
               <br />
               <Opertion addDeposit={this.addDeposit} balance={this.state.balance} addWithdraw={this.addWithdraw} actions={this.state.actions} />

            </header>
         </div>
      );
   }
}

export default App;
