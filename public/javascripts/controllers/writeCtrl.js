// this controller connects to the html-partials, and matches the route in the routes folder

'use strict'

app.controller('writeCtrl', ['$http', function($http) {
    const self = this


    self.title = ''
    self.entry = ''


// TO GET RID OF DUPLICATE ENTRIES, RUN A DB CHECK WHEN SAVE IS CLICKED AND USE A LODASH FILTER
// TO REMOVE THE DUPLICATE.

    self.saveEntry = function() {
        // console.log('hearing the saveEntry click')

        let entryInfo = {title: self.title, entry: self.entry}
        // console.log('entryInfo', entryInfo)


        $http.post('/api/userdata', entryInfo)
        .then((data) => {
            // console.log('this is what I got back after saving', data)

            self.status = data.data.status
            // console.log(self.status)
        })
    }

}])
