const express = require('express')
const app = express()
const port = process.env.PORT || 3001
var cors = require('cors')
const dotenv = require("dotenv").config()
const bodyParser = require('body-parser')

app.use(cors())

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  knex('memes')
  .then((rows) => {
    res.send(rows)
  })
  .catch((err) => {
    next(err)
  })
})