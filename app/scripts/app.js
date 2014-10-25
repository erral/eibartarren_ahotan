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
      .when('/hizlariak', {
        templateUrl: 'views/hizlariak.html',
        controller: 'HizlariakCtrl'
      })
      .when('/hizlaria/:hizlaria', {
        templateUrl: 'views/hizlaria.html',
        controller: 'HizlariaCtrl'
      })
      .when('/pasarteak', {
        templateUrl: 'views/pasarteak.html',
        controller: 'PasarteakCtrl'
      })
      .when('/pasartea/:pasartea', {
        templateUrl: 'views/pasartea.html',
        controller: 'PasarteaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
