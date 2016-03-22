'use strict'

// app creation
const app = angular.module('scribe', ['ui.router'])

// configure app with ui router

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    // the state here matches the ui-sref on the a links in header.jade and elsewhere
    $stateProvider
        .state('default', {
            url: '/',
            templateUrl: 'views/login.html'
            // when logged in, use state.go to route to the main state below
        })
        .state('main', {
            url: '/main',
            views: {
                '': {      // the empty string here is the nameless ui-view in index.html
                    templateUrl: 'views/main.html'
                },
                'catcher@main': {
                    templateUrl: 'views/noteList.html'
                    // controller: 'noteListCtrl'
                }
            }
        })
        .state('main.write', {
            views: {
                'catcher@main': {
                    templateUrl: 'views/writing.html',
                    controller: 'writeCtrl'
        // ^^^^ add a url if wanting to use route params
                }
            }
        })


    // if user navigates to route we havent specified, redirect to default state
    $urlRouterProvider.otherwise("/")
})

//
