'use strict';

/**
 * @ngdoc overview
 * @name ahotanApp
 * @description
 * # ahotanApp
 *
 * Main module of the application.
 */
angular
  .module('ahotanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/hizlaria/:hizlaria', {
        templateUrl: 'views/hizlaria.html',
        controller: 'HizlariaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
