'use strict'

// app creation
const app = angular.module('scribe', ['ui.router'])

// configure app with ui router
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    // the state here matches the ui-sref on the a links in header.jade and elsewhere
    $stateProvider
        .state('default', {
            url: '/',
            templateUrl: 'html-partials/welcome.html'
        })
        .state('writing', {
            url: '/newEntry',
            templateUrl: 'html-partials/send-entry.html'
        })

    // if user navigates to route we havent specified, redirect to default state
    $urlRouterProvider.otherwise("/")
})
