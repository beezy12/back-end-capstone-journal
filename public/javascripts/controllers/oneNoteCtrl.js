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


    self.saveEntry = function() {
        console.log('heard the save click')
        let entryInfo = {title: self.title, entry: self.entry}

        $http.post('/api/userdata', entryInfo)
        .then((data) => {
            self.status = data.data.status
        })
    }


}])
