const express = require('express')
const app= express()
const port= 5000

const data=[{
    id:1,
    firstName:'Nischal',
    lastName:'Khatiwada',
},

{
    id:2,
    firstName:'Aryan',
    lastName:'Dhakal',
}

]
app.get('/', (req, res)=>{
    res.send(data)
})

app.listen(port, () => {
    console.log(`GetServer running on ${port}`)
  })