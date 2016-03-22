'use strict'

const express = require('express')
const router = express.Router()
const databaseCtrl = require('../controllers/databaseCtrl')


// router.get('/api/register', databaseCtrl.registerUser)
// router.get('/api/login', databaseCtrl.loginUser)
router.get('/api/userdata', databaseCtrl.getUserInfo)


module.exports = router




// send instead of redirect
// res.sendStatus(200)




