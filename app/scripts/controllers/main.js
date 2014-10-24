'use strict';

/**
 * @ngdoc function
 * @name ahotanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ahotanApp
 */
angular.module('ahotanApp')
  .controller('MainCtrl', function ($scope, hizlariakService) {
    hizlariakService.getHizlariak()
        .then(function(hizlariak) {
            $scope.hizlariak = hizlariak.data;
        });
  });
