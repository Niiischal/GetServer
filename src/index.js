const express = require('express')
const app= express()
const port= 5000
const helmet = require('helmet')

//Middleware
app.use(helmet())
app.use(express.json())

//Available routes
app.use('/api/register', require('./routes/authentication/register'))

app.listen(port, () => {
    console.log(`GetServer running on ${port}`)
  })