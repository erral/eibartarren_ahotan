'use strict';

/**
 * @ngdoc function
 * @name ahotanApp.controller:PasarteaCtrl
 * @description
 * # PasarteaCtrl
 * Controller of the ahotanApp
 */
angular.module('ahotanApp')
  .controller('PasarteaCtrl', function ($scope, $routeParams, pasarteaService) {
    pasarteaService.getPasartea($routeParams.pasartea)
        .then(function(pasartea) {
            console.log(pasartea.data);
            $scope.pasartea = pasartea.data;
        });
  });
