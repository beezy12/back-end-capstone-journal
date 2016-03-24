// this controller connects to the html-partials, and matches the route in the routes folder

'use strict'

app.controller('writeCtrl', ['$http', function($http) {
    const self = this
    console.log('inside of writeCtrl')



    self.title = ''
    self.entry = ''



    self.saveEntry = function() {
        console.log('hearing the saveEntry click')

        let entryInfo = {title: self.title, entry: self.entry}
        console.log('entryInfo',entryInfo)
        $http.post('/api/userdata', entryInfo)
    }

}])
