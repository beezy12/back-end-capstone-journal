'use strict'

const express = require('express')
const router = express.Router()
const databaseCtrl = require('../controllers/databaseCtrl')

router.get('/api/userdata', databaseCtrl.getUserInfo)


module.exports = router
