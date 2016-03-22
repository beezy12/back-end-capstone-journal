'use strict'

const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const flash = require('connect-flash')
const passport = require('passport')

const noteListRtr = require('./routes/noteListRtr')

const PORT = process.env.PORT || 3000
const MONGODB_URL = 'mongodb://localhost:27017/scribe'


app.set('view engine', 'jade')

app.use(bodyParser.urlencoded({extended:false}));

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))




app.use(noteListRtr)





mongoose.connect(MONGODB_URL, (err) => {
    if(err) throw err

    app.listen(PORT, () => {
        console.log(`server is running on port: ${PORT}`)
    })
})
