'use strict'

const User = require('../models/databaseUser')

module.exports = {

    getUserInfo (req, res) {
        User.find({}, (err, entries) => {
            if(err) throw err

            res.send(entries)
        })
    }



    // register method
    // also console.log(req.body) inside of method on back end to see what you're getting back

}
