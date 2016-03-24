// this ctrl connects from the routes, to the databaseEntry.js model, and back up
'use strict'

const userModel = require('../models/databaseUser')

module.exports = {

    getUserInfo (req, res) {
        console.log('THIS IS WHAT IM LOOKING FOR', req.session.passport.user)
        userModel.findById(req.session.passport.user, (err, everything) => {
            if(err) throw err

            console.log('all Ive got', everything)
            res.send(everything)
        })
    }



    // register method
    // also console.log(req.body) inside of method on back end to see what you're getting back

}
