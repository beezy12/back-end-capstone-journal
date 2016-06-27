'use strict'

const express = require('express')
const router = express.Router()

const databaseCtrl = require('../controllers/databaseCtrl')
const authCtrl = require('../controllers/authCtrl')

const passport = require('passport')



// auth routes here
router.post('/api/register', authCtrl.registerUser)
router.post('/api/login', passport.authenticate('local'),
    function (req, res) {
        res.sendStatus(200)
    }
)

// noteList routes here
router.get('/api/userdata', databaseCtrl.getUserInfo)
router.get('/api/userdata/getNote/:noteId', databaseCtrl.getOneNote)


// writing routes here
router.post('/api/userdata', databaseCtrl.saveJournalEntry)
router.delete('/api/userdata/deleteEntry/:noteId', databaseCtrl.deleteEntry)
router.put('/api/userdata', databaseCtrl.updateEntry)



module.exports = router
