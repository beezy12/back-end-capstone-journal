'use strict'

app.controller('noteListCtrl', ['$http', function($http) {

    const self = this
    // console.log('inside of noteList')

    // self.test = 'this is a test of the emergency broadcast system'


    $http.get('/api/userdata')
    .then((userData) => {
        console.log('userData from the database ===>', userData)

        // self.email = userData.data.email

        // self.id = userData.data._id

        self.entries = userData.data.entries
        console.log(self.entries)

        self.pass = userData.data.entries


    })
}])


