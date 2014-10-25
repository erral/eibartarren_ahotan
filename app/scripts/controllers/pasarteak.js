'use strict';

/**
 * @ngdoc function
 * @name ahotanApp.controller:PasarteakCtrl
 * @description
 * # PasarteakCtrl
 * Controller of the ahotanApp
 */
angular.module('ahotanApp')
  .controller('PasarteakCtrl', function ($scope, pasarteakService) {
    pasarteakService.getPasarteak()
        .then(function(pasarteak) {
            $scope.pasarteak = pasarteak.data;
        });
  });
