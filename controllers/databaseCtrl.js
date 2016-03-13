// this ctrl connects from the routes, to the databaseEntry.js, and back up
'use strict'

module.exports = {

    index (req, res) {
        res.render('index')
    },

    // loggedin is the loggedin.jade file
    loggedin (req, res) {
        res.render('loggedin')  
    }
}
