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
        console.log('req user', req.session.passport.user)
        const newEntry = new entryModel({
            title: req.body.title,
            entry: req.body.entry,
            user: req.session.passport.user
        })

        console.log('about to save this entry ---> ', newEntry)
        newEntry.save((err, savedObject) => {
            if(err) throw err
            res.send({"status":"successful"})
        })
    },

    getOneNote (req, res) {
        console.log('*** ayoooo req.params here on the back end', req.params)
        entryModel.findById(`${req.params.noteId}`, (err, foundNote) => {
            console.log('******this is the note I want from the db', foundNote)
            res.send(foundNote)
        })
    },

    deleteEntry (req, res) {
        console.log('this is the deleted note', req.params)
        entryModel.remove({ '_id': `${req.params.noteId}` }, function(err) {
            if(err) throw err

            res.send('successfully deleted the entry')
        })
    },

    updateEntry (req, res) {
         entryModel.findByIdAndUpdate(`${req.params.noteId}`, req.body, (err, foundNote) => {
            console.log('the junk is below');
            console.log(err);
            console.log(foundNote);
            res.send(foundNote)
        })
    }


    // dateHere (req, res) {

    // }


}

