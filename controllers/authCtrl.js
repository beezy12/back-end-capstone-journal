'use strict'


const passport = require('passport')

const User = require('../models/databaseUser')
require('../services/local')


module.exports = {

    registerUser (req, res) {
        if(req.body.password === req.body.verify) {

            User.findOne({email: req.body.email}, (err,user) => {
                if(err) throw err

                if(user) {
                    console.log('user is truthy')
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
    }
}



