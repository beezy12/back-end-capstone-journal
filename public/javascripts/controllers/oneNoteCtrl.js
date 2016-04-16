'use strict'

app.controller('oneNoteCtrl', ['$http', '$state', '$stateParams', function($http, $state, $stateParams) {
    const self = this
    
    let entry = $stateParams;

    $http.get(`/api/userdata/getNote/${entry.id}`)
    .then((foundNote) => {
        console.log('this is the note I wanted', foundNote)
        self.noteInfo = foundNote
        console.log('this is self.noteInfo', self.noteInfo)
    })
}])
