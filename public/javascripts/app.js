'use strict'

// app creation
const app = angular.module('scribe', ['ui.router'])

// configure app with ui router
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    // the state here matches the ui-sref on the a links in header.jade and elsewhere
    $stateProvider
        // .state('default', {
        //     url: '/',
        //     templateUrl: 'index.html'
        // })
        .state('default', {
            url: '/',
            templateUrl: 'views/login.html'
        })

    // if user navigates to route we havent specified, redirect to default state
    $urlRouterProvider.otherwise("/")
})


//    ******
// remember to also include a ui-view in /newsily-main. this is where emma's navbar lived and the
// ui-view in there was where all other partials lived. so the navbar was present on every page
// except login.


// .state('newsily-main', {
//           url: "/newsily-main",
//           templateUrl: "app/partials/main-view.html",
//           controller: "mainAppCtrl"
//         })
//         .state('newsily-main.posts', {
//           url: "/newsily-main-posts",
//           templateUrl: "app/partials/main-view.posts.html"
// });

