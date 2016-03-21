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
        })
        .state('welcome', {
            url: '/welcome',
            views: {
                '': {
                    templateUrl: 'views/welcome.html',
                    controller: 'welcomeCtrl'
                },
                'catcher@welcome': {
                    templateUrl: 'views/noteList.html',
                    controller: 'noteListCtrl'
                }
            }
        })
        .state('welcome.write', {
            views: {
                'catcher@welcome': {
                    templateUrl: 'views/writing.html',
                    controller: 'writeCtrl'
                }
            }
        })

        // ^^^^ add a url if wanting to use route params


        // .state('welcome.write', {
        //     url: '/write',
        //     templateUrl: 'views/welcome.writing.html',
        //     // controller: 'writeCtrl'
        //     // parent: 'welcome'
        // })

        // this ^^^^ is really going to be welcome/write. you just add the new piece on.
        // BUT if you did '^/write' then this path would be like a root path. even tho
        // it's still nested and really just connected to welcome. it can get messy.

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



