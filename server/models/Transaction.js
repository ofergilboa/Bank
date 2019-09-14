const mongoose = require(`mongoose`)
const Schema = mongoose.Schema


const transactionSchema = new Schema({
   amount: Number,
   vendor: String,
   category: String
})
//    citiesVisited: [{type: Schema.Types.ObjectId, ref: 'City'}],
//    cityLiving: {type: Schema.Types.ObjectId, ref: 'City'}


const Transaction = mongoose.model("Transaction", transactionSchema)





module.exports = Transaction 