'use strict'

const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
// const flash = require('connect-flash')
const passport = require('passport')

const noteListRtr = require('./routes/noteListRtr')

const PORT = process.env.PORT || 3000
const SESSION_SECRET = process.env.SESSION_SECRET || 'supersecret'

const devUrl = 'mongodb://localhost:27017/scribe'

const prodUrl = 'mongodb://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD +
'@ds021731.mlab.com:21731/scribe'

const MONGODB_URL =  process.env.NODE_ENV === 'development' ? devUrl : prodUrl

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(methodOverride('_method'))   // HTTP PUT and DELETE support

app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: SESSION_SECRET,
    store: new RedisStore({ url: REDIS_URL }),
    resave: false,
    saveUninitialized: true
}))

// app.use(flash())
app.use(passport.initialize())
app.use(passport.session())


// this redirects to the back-end routes
app.use(noteListRtr)




mongoose.connect(MONGODB_URL, (err) => {
    if(err) throw err

    app.listen(PORT, () => {
        console.log(`server is running on port: ${PORT}`)
    })
})
