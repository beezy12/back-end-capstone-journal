'use strict'

app.controller('noteListCtrl', ['$http', '$state', '$angularMoment', function($http, $state, $angularMoment) {

    const self = this


    // this fires on page load. retrieves users data from db for display on DOM (journal entries)
    $http.get('/api/userdata')
    .then((userData) => {
        console.log('userData from the database ===>', userData)
        self.data = userData.data
    })


    // let today = new Date()
    // console.log('daaaaate', today)

    // let day = today.getFullDay()
    // let month = today.getFullMonth()
    // let date = today.getDate()
    // let year = today.getFullYear()

    // let wholeDate = day + " " + month + " " + date + ", " + year

    // document.getElementById('dateStuff').innerHTML = wholeDate


    let now = moment().day()
    console.log(moment.weekdays[now])
    // console.log(today)






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
