// this ctrl connects from the routes, to the databaseEntry.js model, and back up
'use strict'

const userModel = require('../models/databaseUser')
const entryModel = require('../models/databaseEntries')

module.exports = {



    getUserInfo (req, res) {

        entryModel
            .findById(req.session.passport.user)
            .populate('users')
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

        entryModel
            .findById(req.session.passport.user)
            .exec(function(err, user) {
                entries.user.push(newEntry._id)
                entries.save()
            })

    }
}



    // const newMember = new memberModel({
    //     memberName: `${req.params.memberName}`,
    //     belongsTo: "56db4694fb7c7a249417b726",
    //     tasks: []
    // })

    // // now that we have a new instance of our db, we can save
    // newMember.save((err, savedObject) => {
    //     if(err) throw err
    //     // console.log('success in saving that')
    //     // console.log(savedObject)

    //     res.send({"status":"successful"})
    // })





// // look at express api docs for router.param
// router.param('id', (req, res, next, id) => {
//     Note
//         .findById(id)
//         .populate('category')
//         .exec((err, note) => {
//             if(err) throw err;
//             // pretty sure those are mongoose methods above
//             //note is our data from the db
//             // attaching the note to the request object and then fire next
//             req.note = note;
//             //next says to move on down the waterfall
//             next();
//         });
// });

