// this controller connects from the welcome.html partial to the welcomeRtr
'use strict'

app.controller('welcomeCtrl', ['$http', function($http) {

    // instead of using scope, Im using self for readibility
    const self = this


    // this path must match the path in route in server.js. this is how the front connects to the back.
    // make a get request. paths match. goes all the way down to the server and back up to here.   .then when the data comes back from the database, assign it to variables to be used by angular in the partial

    $http.get('/api/userdata')
    .then((userData) => {
        console.log('users stuff heeerrre ===>', userData)

        self.username = userData.data[0].username
    })


}])
