'use strict'

app.controller('oneNoteCtrl', ['$http', '$state', '$stateParams', function($http, $state, $stateParams) {
    const self = this

    let entry = $stateParams;


    $http.get(`/api/userdata/getNote/${entry.id}`)
    .then((foundNote) => {
        self.noteInfo = foundNote
    })


    self.deleteEntry = function(thisEntry) {
        $http.delete(`/api/userdata/deleteEntry/${entry.id}`)
        .then(() => {
            $state.go('main')
        })
        .catch((res) => {
            console.log(res.status)
        })
    }




}])
