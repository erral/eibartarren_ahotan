'use strict';

/**
 * @ngdoc function
 * @name ahotanApp.controller:PasarteaCtrl
 * @description
 * # PasarteaCtrl
 * Controller of the ahotanApp
 */
angular.module('ahotanApp')
  .controller('PasarteaCtrl', function ($scope, $routeParams, pasarteaService, $sce) {
    pasarteaService.getPasartea($routeParams.pasartea)
        .then(function(pasartea) {
            $scope.pasartea = pasartea.data;
            $scope.audio_player = $sce.trustAsHtml(pasartea.data.audioa_html);
            $scope.bideo_player = $sce.trustAsHtml(pasartea.data.bideoa_html);
            console.log($scope.pasartea);
        });
  });
