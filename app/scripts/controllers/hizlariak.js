'use strict';

/**
 * @ngdoc function
 * @name ahotanApp.controller:HizlariakCtrl
 * @description
 * # HizlariakCtrl
 * Controller of the ahotanApp
 */
angular.module('ahotanApp')
  .controller('HizlariakCtrl', function ($scope, hizlariakService) {
    hizlariakService.getHizlariak()
        .then(function(hizlariak) {
            $scope.hizlariak = hizlariak.data;
        });
  });
