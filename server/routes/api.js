var express = require('express')
const router = express.Router()
const Transaction = require(`../models/Transaction`)


router.get(`/transactions`, function (req, res) {
   Transaction.find({}).exec(function (err, resp) {
      res.send(resp)
   })
})

router.post(`/transaction`, async function (req, res) {
   let transaction = new Transaction(req.body)
   await transaction.save()
   res.send(`saved to db`)
})




module.exports = router