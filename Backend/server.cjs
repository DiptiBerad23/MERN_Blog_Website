const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const connect = require('./config/db')
const cors = require('cors')


const thingsRoute = require('./routes/thingsRoutes')
const app = express()
 app.use(cors())

//to display images
 app.use('/images',express.static('public/images'));

require('dotenv').config()

const PORT = process.env.port || 5000

connect()




app.use(express.json())


app.use('/api',thingsRoute)




app.listen(PORT, () => {
    console.log(`we are listening at ${PORT}`)
})