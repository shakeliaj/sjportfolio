(function() {
    'use strict';

    var angular = require('angular');
    require('angular-material');
    require('angular-aria');
    require('angular-animate');
    require('angular-ui-router');
    require('angular-sanitize');
    require('angular-ui-bootstrap');
    require('moment');
    require('angular-moment');

    var app = angular.module('sjportfolio', [
        'ui.router',
        'ngMaterial',
        //add any new services to this dependency list
    ]);

    require('./js/components');
    require('./js/services');

    app.config(function($stateProvider, $urlRouterProvider) {

      //$stateProvider
      //.state('nameOfState', {url: '', component(controller): '', etc.})
        $urlRouterProvider.otherwise('/');
    });
})();
