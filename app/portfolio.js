(function() {
    'use strict';

    var angular = require('angular');
    require('angular-material');
    require('angular-aria');
    require('angular-animate');
    require('angular-ui-router');
    require('angular-sanitize');
    require('moment');
    require('angular-moment');

    var app = angular.module('sjportfolio', [
        'ui.router',
        'ngMaterial',
        //TODO add any new dependencies to this list (ex. angular-bootstrap)
        //TODO add any new services to this dependency list
        //TODO should have a service for the portfolio items db as well as the contact db
    ]);

    require('./js/components');
    require('./js/services');

    app.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('splash', {
                url: '/',
                component: 'splashPage'
            })
            .state('home', {
                url: '/home',
                component: 'homePage'
            })
            .state('about', {
                url: '/about',
                component: 'aboutPage'
            })
            .state('contact', {
                url: '/contact',
                component: 'contactPage'
            })
            .state('portfolio', {
                url: '/portfolio',
                component: 'portfolioPage'
            })
            //TODO add nested state for individual portfolio items
            .state('resume', {
                url: '/resume',
                component: 'resumePage'
            });

        $urlRouterProvider.otherwise('/home');
    });
})();
