// this ctrl connects from the routes, to the databaseEntry.js model, and back up
'use strict'

const userModel = require('../models/databaseUser')

module.exports = {

    getUserInfo (req, res) {
        console.log(req.session.passport.user)
        userModel.find({}, (err, entries) => {
            if(err) throw err

            res.send(entries)
        })
    }



    // register method
    // also console.log(req.body) inside of method on back end to see what you're getting back

}
