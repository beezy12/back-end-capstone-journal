// this ctrl connects from the routes, to the databaseEntry.js model, and back up
'use strict'

const userModel = require('../models/databaseUser')
const entryModel = require('../models/databaseEntries')

module.exports = {



    getUserInfo (req, res) {

        entryModel
            .find({ user: req.session.passport.user })

            .exec((err, everything) => {
                if(err) throw err

                console.log('all Ive got', everything)
                res.send(everything)
            })
    },




    saveJournalEntry (req, res) {

        const newEntry = new entryModel({
            title: req.body.title,
            entry: req.body.entry,
            user: req.session.passport.user
        })

        console.log('about to save this entry ---> ', newEntry)
        newEntry.save((err, savedObject) => {
            if(err) throw err

            console.log('saved new entry!!!')
            res.send({"status":"successful"})
        })

        // entryModel
        //     // .find(req.session.passport.user)
        //     .exec(function(err, user) {
        //         entries.user.push(newEntry._id)
        //         entries.save()
        //     })

    }
}

