'use strict'

const express = require('express')
const router = express.Router()

const databaseCtrl = require('../controllers/databaseCtrl')
const authCtrl = require('../controllers/authCtrl')

const passport = require('passport')




router.post('/api/register', authCtrl.registerUser)
router.post('/api/login', passport.authenticate('local'),
    function (req, res) {
        res.sendStatus(200)
    }
)

router.get('/api/userdata', databaseCtrl.getUserInfo)
router.post('/api/userdata', databaseCtrl.saveJournalEntry)





module.exports = router














