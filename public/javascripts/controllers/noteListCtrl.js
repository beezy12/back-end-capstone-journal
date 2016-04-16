'use strict'

app.controller('noteListCtrl', ['$http', '$state', function($http, $state) {

    const self = this
    // $scope.data = ''

    // this fires on page load. retrieves users data from db for display on DOM (journal entries)
    $http.get('/api/userdata')
    .then((userData) => {
        console.log('userData from the database ===>', userData)
        self.data = userData.data
    })
}])







/*  THIS IS HOW SOUND IS PLAYED

var theme = new Audio('http://www.warnersdock.com/OFFICE.mp3'); //song plays on page load
theme.play();



$(".attack").click(function(event) {
var hit = new Audio('sound/Left Hook-SoundBible.com-516660386.mp3');  //Right Cross-SoundBible.com-1721311663.mp3
hit.play();
});


$(".start").click(function(event) {
var hit = new Audio('sound/dwightWeapons.mp3');  //Right Cross-SoundBible.com-1721311663.mp3
hit.play();
});


*/
