'use strict'

app.controller('oneNoteCtrl', ['$http', '$state', '$stateParams', '$scope', function($http, $state, $stateParams, $scope) {

    const self = this

    let entry = $stateParams;
    console.log('this is the selected entry', entry)


    $http.get(`/api/userdata/getNote/${entry.id}`)
    .then((foundNote) => {
        self.noteInfo = foundNote
        console.log('foundNote', foundNote)
    })


    self.deleteEntry = function(thisEntry) {
        console.log('delete works')
        $http.delete(`/api/userdata/deleteEntry/${entry.id}`)
        .then(() => {
            $state.go('main')
        })
        .catch((res) => {
            console.log(res.status)
        })
    }


    let saved = false
    self.saveEntry = function() {

        if(!saved) {
            let entryInfo = {title: self.title, entry: self.entry}

            $http.post('/api/userdata', entryInfo)
            .then((data) => {
                self.status = data.data.status
                saved = true
            })
        }
    }


    self.saveTheEdit = function() {
        console.log('ng-blur saving edit function fires after input loses focus')
        let entryInfo = {title: self.title, entry: self.entry}
    }

    $scope.$watchGroup(['oneNote.noteInfo.data.entry', 'oneNote.noteInfo.data.title'], function(newvalue, oldvalue) {
        console.log('something changed in the ng-model')
    })

    // YOU DON'T NEED TO WATCH, JUST HAVE A DIFFERENT SAVE FUNCTION IN HERE THAT'S DIFFERENT FROM THE ONE IN THE WRITING CONTROLLER. HAVE THIS ONE RUN A MONGOOSE.UPDATE METHOD. DONE.



}])

