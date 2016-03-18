'use strict'

// app creation
const app = angular.module('scribe', ['ui.router'])

// configure app with ui router
// listing these twice is called annotating. this is done because when this code gets minified,
// the second part of it (the function part), gets called just a and b when it's minified.
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    // the state here matches the ui-sref on the a links in header.jade and elsewhere
    $stateProvider
        .state('default', {
            url: '/',
            templateUrl: 'views/login.html'
        })
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'views/welcome.html',
            controller: 'welcomeCtrl as welcome'
        })
        .state('writing', {
            url: '/write',
            templateUrl: 'views/writing.html',
            controller: 'writeCtrl as write'
        })

    // if user navigates to route we havent specified, redirect to default state
    $urlRouterProvider.otherwise("/")
})


//    ******
// remember to also include a ui-view in /newsily-main. this is where emma's navbar lived and the
// ui-view in there was where all other partials lived. so the navbar was present on every page
// except login.   *** ALSO: when using nested views....you must include dot notation when stringing
// them together.


//          .state('newsily-main', {
//           url: "/newsily-main",
//           templateUrl: "app/partials/main-view.html",
//           controller: "mainAppCtrl"
//         })
//         .state('newsily-main.posts', {
//           url: "/newsily-main-posts",
//           templateUrl: "app/partials/main-view.posts.html"
// });

