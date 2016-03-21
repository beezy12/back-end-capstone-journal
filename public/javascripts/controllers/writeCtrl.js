// this controller connects to the html-partials, and matches the route in the routes folder

'use strict'

app.controller('writeCtrl', [function() {
    const self = this
    console.log('inside of writeCtrl')

    self.test = 4

    self.username = userData.data[0].username

    self.saveEntry = function() {
        $http.post('models/databaseUser', dataToPass)
    }

}])
