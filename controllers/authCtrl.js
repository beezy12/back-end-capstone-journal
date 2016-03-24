'use strict'


const passport = require('passport')

require('../services/local')
const User = require('../models/databaseUser')


module.exports = {

    registerUser (req, res) {
        if(req.body.password === req.body.verify) {

            User.findOne({email: req.body.email}, (err,user) => {
                if(err) throw err

                if(user) {
                    res.sendStatus(403).send('there was already an email in there')
                } else {
                    User.create(req.body, (err, user) => {
                        console.log('req.body in the back end', user)
                        if(err) throw err

                        res.status(200).send('created a new profile')
                    })
                }
            })

        } else {
            res.status(401).send('passwords do not match!')
        }
    },

    loginUser : passport.authenticate('local', {
            failureRedirect: '/#/',
            successRedirect: '/#/main'
    })



    // loginUser (req, res) {
    //     passport.authenticate('local', {
    //         failureRedirect: res.sendStatus(403),
    //         successRedirect: res.sendStatus(200)
    //     })
    // }



}




