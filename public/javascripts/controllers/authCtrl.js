'use strict'

app.controller('authCtrl', ['$http', '$state', '$location', function($http, $state, $location) {

    // use vm instead of self.
    const self = this

    // instantiating models
    self.email = ''
    self.pass = ''
    self.verify = ''
    self.test = 'hellloooooooooo'


    // this function fires on the ng-submit='auth.register' in the form
    self.register = function() {
        // email, pass, and verify came from their ng-models in register.jade
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
        console.log('login function fired in the front end controller')
        let loginObj = {email: self.email, password: self.pass}
        console.log(loginObj)

        $http.post('/api/login', loginObj)
        .then((data) => {
            console.log('this is the logged in user data ---->>', data)

            // maybe use state.go here????
            $location.path('/main')

            // if(data.status === 200) {
            //     console.log('inside status')
                // window.location.pathname = '/'

        }, function (err) {
                console.log(err)
        })
    }




}])
