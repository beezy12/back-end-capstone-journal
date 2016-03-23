'use strict'

app.controller('noteListCtrl', ['$http', function($http) {

    const self = this
    // console.log('inside of noteList')

    self.test = 'this is a test of the emergency broadcast system'


    $http.get('/api/userdata')
    .then((userData) => {
        console.log('userData from the database ===>', userData)

        self.username = userData.data[0].username
    })
}])


