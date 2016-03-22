'use strict'

app.controller('authCtrl', ['$http', function($http) {

    // use vm instead of self.
    const self = this

    self.register = () => {
        let obj = {email: self.email, password: self.pass, verify: self.verify}
        console.log(obj)
        $http.post('/api/register', obj)

    }


}])
