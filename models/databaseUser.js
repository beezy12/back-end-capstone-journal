'use strict'

const mongoose = require('mongoose')

const UserSchema = mongoose.model('users', mongoose.Schema({
    email: String,
    password: String,
    entries: {}
}))

module.exports = UserSchema





// ****  use UserSchema.pre('create') instead of UserSchema.pre('save')
// .pre('save')  rehashes the password every time you save a user's entry
