'use strict'

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000


// this will be the log in page
app.get('/', (req, res) => {
    res.send('yo')
})

app.get('/loggedin', (req, res) => {
    res.send('logged in heeeere')
})



app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})
