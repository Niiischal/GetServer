require('dotenv').config();
const express = require('express')
const helmet = require('helmet')
const connection = require('./db')

connection();

const app= express()
const port= 5000

//Middleware
app.use(helmet())
app.use(express.json())

//Available routes
app.use('/api/register', require('./routes/authentication/register'))

app.listen(port, () => {
    console.log(`GetServer running on ${port}`)
  })