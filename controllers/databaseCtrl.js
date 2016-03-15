// this ctrl connects from the routes, to the databaseEntry.js model, and back up
'use strict'

const userModel = require('../models/databaseUser')

module.exports = {

    index (req, res) {
        res.render('index')
    },

    // loggedin is the loggedin.jade file
    loggedin (req, res) {
        res.render('loggedin')
    },

    getUserInfo (req, res) {
        userModel.find({}, (err, entries) => {
            if(err) throw err
            res.send(entries)
        })
    }
}
