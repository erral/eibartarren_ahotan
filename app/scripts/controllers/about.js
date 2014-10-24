'use strict';

/**
 * @ngdoc function
 * @name ahotanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ahotanApp
 */
angular.module('ahotanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
