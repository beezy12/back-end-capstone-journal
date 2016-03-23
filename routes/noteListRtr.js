'use strict'

const express = require('express')
const router = express.Router()
const passport = require('passport')

const databaseCtrl = require('../controllers/databaseCtrl')
const User = require('../models/databaseUser')
require('../lib/local')



router.get('/api/userdata', databaseCtrl.getUserInfo)



router.post('/api/register', (req, res) => {
    // see what you get back in terminal for req.body and do comparisons
    // console.log('req.body', req.body)
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
})



// router.post('/api/login',
//     passport.authenticate('local', {
//         successRedirect: '/main',
//         failureRedirect: '/'
//     })
// )


router.post('/api/login',
    passport.authenticate('local', (req, res) => {
        console.log('what the fuck')
    })
)


// passport.authenticate('local', {
//     successRedirect: '/main',
//     failureRedirect: '/'
// })




module.exports = router









