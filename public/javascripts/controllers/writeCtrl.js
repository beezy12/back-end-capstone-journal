// this controller connects to the html-partials, and matches the route in the routes folder

'use strict'

app.controller('writeCtrl', ['$http', '$state', function($http, $state) {
    const self = this

    self.title = ''
    self.entry = ''

    // TO GET RID OF DUPLICATE ENTRIES, RUN A DB CHECK WHEN SAVE IS CLICKED AND USE A LODASH FILTER
    // TO REMOVE THE DUPLICATE.

    self.saveEntry = function() {
        // console.log('heard the save click')
        let entryInfo = {title: self.title, entry: self.entry}

        $http.post('/api/userdata', entryInfo)
        .then((data) => {
            self.status = data.data.status
        })
    }

}])
