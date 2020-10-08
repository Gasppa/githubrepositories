const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const consign = require('consign')

const app = express()

app.use(express.json())
app.use(cors())

consign()
    .include('./routes')
    .into(app)

app.listen(5000, ()=>{
    console.log('server running');    
})