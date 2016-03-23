'use strict'

const express = require('express')
const router = express.Router()
const databaseCtrl = require('../controllers/databaseCtrl')
const User = require('../models/databaseUser')


// router.get('/api/login', databaseCtrl.loginUser)
router.get('/api/userdata', databaseCtrl.getUserInfo)



router.post('/api/register', (req, res) => {
    // see what you get back in terminal for req.body and do comparisons
    console.log('req.body', req.body)
    if(req.body.password === req.body.verify) {

        User.findOne({email: req.body.email}, (err,user) => {
            if(err) throw err

            if(user) {
                res.sendStatus(403).send('there was already an email in there')
            } else {
                User.create(req.body, (err) => {
                    if(err) throw err

                    res.status(200).send('created a new profile')
                })
            }
        })

    } else {
        res.status(200).send('passwords do not match!')
    }
})







// send instead of redirect
// res.sendStatus(200)

module.exports = router








