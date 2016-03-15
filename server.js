'use strict'

const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const MONGODB_URL = 'mongodb://localhost:27017/scribe'

// const routes = require('./routes/')
const welcomeRtr = require('./routes/welcomeRtr')

const PORT = process.env.PORT || 3000


app.set('view engine', 'jade')
// this one gives a path to anything in public that doesn't already have a path
app.use(express.static(path.join(__dirname, 'public')))
// this one gives a path to anything in views that doesn't already have a path
app.set('views', path.join(__dirname, 'views'))





app.use(welcomeRtr)


mongoose.connect(MONGODB_URL, (err) => {
    if(err) throw err

    app.listen(PORT, () => {
        console.log(`server is running on port: ${PORT}`)
    })
})
