// this controller connects to the html-partials, and matches the route in the routes folder

'use strict'

app.controller('writeCtrl', ['$http', '$state', function($http, $state) {
    const self = this


    self.title = ''
    self.entry = ''
// if there is an id, load all the note data associated with that id, if not, load blank page
    // see if an id is in the url
    // if id is in the url
        // get request for the data by id
        // then fill in the text areas/inputs with that data
    // else
        // do nothing

// TO GET RID OF DUPLICATE ENTRIES, RUN A DB CHECK WHEN SAVE IS CLICKED AND USE A LODASH FILTER
// TO REMOVE THE DUPLICATE.

    self.saveEntry = function() {
        let entryInfo = {title: self.title, entry: self.entry}

        $http.post('/api/userdata', entryInfo)
        .then((data) => {
            self.status = data.data.status
        })
    }

}])
