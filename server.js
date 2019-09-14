const express = require('express')
const app = express()
const api = require(`./server/routes/api`)
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/Bank`, { useNewUrlParser: true })

app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*')
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

   next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.use(express.static(path.join(__dirname, 'dist')))
// app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(`/`, api)






const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server running on port ' + port))