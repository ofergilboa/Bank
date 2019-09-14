import React, { Component } from 'react'

class Transaction extends Component {
   render() {
      return (
         <div>
            {this.props.a.amount<0 ?
               <div style={{ color: "red" }}>amount : {this.props.a.amount} | vendor : {this.props.a.vendor} | category : {this.props.a.category}</div>
               : <div style={{ color: "green" }}>amount : {this.props.a.amount} | vendor : {this.props.a.vendor} | category : {this.props.a.category}</div>
            }
         </div>)
   }
}
export default Transaction