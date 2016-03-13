'use strict'

const express = require('express')
const router = express.Router()
const databaseCtrl = require('../controllers/databaseCtrl')

router.get('/', databaseCtrl.index)
router.get('/loggedin', databaseCtrl.loggedin)


module.exports = router
