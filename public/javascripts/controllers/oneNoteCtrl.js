'use strict'

app.controller('oneNoteCtrl', ['$http', '$state', '$stateParams', function($http, $state, $stateParams) {

    const self = this

    let journal = $stateParams;
    console.log('this is the selected journal', journal)

    self.title = ''
    self.entry = ''


    $http.get(`/api/userdata/getNote/${journal.id}`)
    .then((foundNote) => {
        self.noteInfo = foundNote
        console.log('foundnote', foundNote)
    })


    self.deleteEntry = function(thisEntry) {
        $http.delete(`/api/userdata/deleteEntry/${journal.id}`)
        .then(() => {
            $state.go('main')
        })
        .catch((res) => {
            console.log(res.status)
        })
    }

    // let saved = false
    self.updateEntry = function() {

        let journalInfo = {title: self.noteInfo.data.title, entry: self.noteInfo.data.entry}
        console.log('heres what youre trying to update', journalInfo)

        $http.put('/api/userdata', journalInfo)
        .then((data) => {
            self.status = data.data.status
            // saved = true
        })
    }


}])
