const express = require('express')
const app= express()
const port= 5000
const helmet = require('helmet')


app.get('/', (req, res)=>{
    res.send(data)
})

app.listen(port, () => {
    console.log(`GetServer running on ${port}`)
  })