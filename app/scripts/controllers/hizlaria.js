'use strict';

/**
 * @ngdoc function
 * @name ahotanApp.controller:HizlariaCtrl
 * @description
 * # HizlariaCtrl
 * Controller of the ahotanApp
 */
angular.module('ahotanApp')
  .controller('HizlariaCtrl', function ($scope, $routeParams, hizlariaService) {
    hizlariaService.getHizlaria($routeParams.hizlaria)
        .then(function(hizlaria) {
            console.log(hizlaria.data);
            $scope.hizlaria = hizlaria.data;
        });
    hizlariaService.getHizlariarenPasarteak($routeParams.hizlaria)
        .then(function(pasarteak) {
            console.log(pasarteak.data);
            $scope.pasarteak = pasarteak.data;
        });
  });
