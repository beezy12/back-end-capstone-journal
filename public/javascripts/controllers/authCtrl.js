'use strict'

app.controller('authCtrl', ['$http', '$state', '$location', function($http, $state, $location) {

    // use vm instead of self.
    const self = this

    // instantiating models
    self.email = ''
    self.pass = ''
    self.verify = ''



    self.register = function() {
        let obj = {email: self.email, password: self.pass, verify: self.verify}

        $http.post('/api/register', obj)
        .then((data) => {
            // console.log(data)
            if(data.status === 200) {
                console.log('this is the status code Ive been waiting for')
                $location.path('/login')
            } else {
                console.log('you did something very wrong')
            }
        }, function(err) {
            console.log(err)
        })
    }



    self.login = function() {

    }




}])



