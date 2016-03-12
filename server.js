'use strict'

const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000


app.set('view engine', 'jade')
// use public directory for static files
app.use(express.static(path.join(__dirname, 'public')))

// this will be the log in page
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/loggedin', (req, res) => {
    res.render('loggedin')
})



app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})
