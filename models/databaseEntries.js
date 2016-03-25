'use strict'

const mongoose = require('mongoose')



const EntrySchema = new mongoose.Schema({
    title: String,
    entry: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})




module.exports = mongoose.model('entries', EntrySchema)


