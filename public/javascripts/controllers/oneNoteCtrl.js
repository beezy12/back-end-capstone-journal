'use strict'

app.controller('oneNoteCtrl', ['$http', '$state', '$stateParams', function($http, $state, $stateParams) {
    const self = this
    console.log('state params here', $stateParams)
    let entry = $stateParams;
    console.log('entry variable here', entry)

    $http.get(`/api/userdata/getNote/${entry}`)
        .then((foundNote) => {
            console.log('this is the note I wanted', foundNote)
            // now use state.go with the foundNote info???
    })
}])
