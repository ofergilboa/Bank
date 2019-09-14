import React, { Component } from 'react'
import Transaction from './Transaction';

class Transactions extends Component {
   render() {
      return (
         <div>
            {this.props.actions.map((a, i) => <Transaction a={a} key={i}/>)}
         </div>)
   }
}
export default Transactions