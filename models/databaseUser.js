'use strict'

const mongoose = require('mongoose')

const UserSchema = mongoose.model('users', mongoose.Schema({
    username: String,
    entries: {}
}))

module.exports = UserSchema
