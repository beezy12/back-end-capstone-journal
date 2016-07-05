'use strict'

// app creation
const app = angular.module('scribe', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    // the state here matches the ui-sref on the a-links in header.jade and elsewhere
    $stateProvider
        .state('default', {
            url: '/',
            templateUrl: 'views/register.html',
            controller: 'authCtrl',
            controllerAs: 'auth'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'authCtrl',
            controllerAs: 'auth'
        })
        .state('main', {
            url: '/main',
            views: {       // views are the names of the ui-views
                '': {      // the empty string here is the nameless ui-view in index.html
                    templateUrl: 'views/main.html',
                    controller: 'writeCtrl',
                    controllerAs: 'writer'
                },
                'catcher@main': {  // catcher is the name of the second ui-view
                    templateUrl: 'views/noteList.html',
                    controller: 'noteListCtrl',
                    controllerAs: 'noteList'
                }
            }
        })
        .state('single', {
            url: '/single/:id',
            templateUrl: 'views/oneNote.html',
            controller: 'oneNoteCtrl',
            controllerAs: 'oneNote'
        })
        .state('main.write', {
            views: {
                'catcher@main': {
                    templateUrl: 'views/writing.html',
                    controller: 'writeCtrl',
                    controllerAs: 'writer'
        // ^^^^ add a url if wanting to use route params
                }
            }
        })

    $urlRouterProvider.otherwise("/")
})
