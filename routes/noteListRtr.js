'use strict'

const express = require('express')
const router = express.Router()
const passport = require('passport')

const registerCtrl = require('../controllers/registerCtrl')
const loginCtrl = require('../controllers/loginCtrl')
const databaseCtrl = require('../controllers/databaseCtrl')







router.post('/api/register', registerCtrl.registerUser)
router.post('/api/login', loginCtrl.loginUser)
router.get('/api/userdata', databaseCtrl.getUserInfo)



//     passport.authenticate('local', (req, res) => {
//         console.log('what the fuck')
//     })
// )


// passport.authenticate('local', {
//     successRedirect: '/main',
//     failureRedirect: '/'
// })




module.exports = router









