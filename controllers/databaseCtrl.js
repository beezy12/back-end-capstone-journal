// this ctrl connects from the routes, to the databaseEntry.js model, and back up
'use strict'

const userModel = require('../models/databaseUser')

module.exports = {

    getUserInfo (req, res) {
        userModel.find({}, (err, entries) => {
            if(err) throw err

            res.send(entries)
        })
    }
}
