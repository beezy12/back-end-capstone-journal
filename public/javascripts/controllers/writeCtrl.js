// this controller connects to the html-partials, and matches the route in the routes folder

'use strict'

app.controller('writeCtrl', [function() {
    const self = this
    console.log('inside of writeCtrl')



    self.title = ''
    self.entry = ''



    self.saveEntry = function(user, note) {
        console.log('hearing the saveEntry click')

        let entryInfo = {title: self.title, entry: self.entry}

        $http.post('/api/userdata', entryInfo)
    }

}])
