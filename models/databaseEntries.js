'use strict'

const mongoose = require('mongoose')



const EntrySchema = new mongoose.Schema({
    title: String,
    body: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    // Ryan said to use an array here, but how?
    }

})




module.exports = mongoose.model('entries', EntrySchema)
