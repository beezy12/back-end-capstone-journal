'use strict'

const express = require('express')
const router = express.Router()

const databaseCtrl = require('../controllers/databaseCtrl')
const authCtrl = require('../controllers/authCtrl')




router.post('/api/register', authCtrl.registerUser)

router.get('/api/userdata', databaseCtrl.getUserInfo)





module.exports = router














