// this ctrl connects from the routes, to the databaseEntry.js model, and back up
'use strict'

const userModel = require('../models/databaseUser')

module.exports = {

    getUserInfo (req, res) {

        console.log('THIS IS WHAT IM LOOKING FOR', req.session.passport.user)

        userModel.findById(req.session.passport.user, (err, everything) => {
            if(err) throw err

            // console.log('all Ive got', everything)
            res.send(everything)
        })
    },

    saveJournalEntry (req, res) {
        console.log('journal entry in the back end --->', req.body)





    }





}
