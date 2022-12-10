const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req,res)=>{
    res.send(`Env variable is: ${process.env.API}`)
})

app.listen(3001, ()=>{
    console.log('Running at 3001')
})