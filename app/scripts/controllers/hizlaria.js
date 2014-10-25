'use strict';

/**
 * @ngdoc function
 * @name ahotanApp.controller:HizlariaCtrl
 * @description
 * # HizlariaCtrl
 * Controller of the ahotanApp
 */
angular.module('ahotanApp')
  .controller('HizlariaCtrl', function ($scope, $routeParams, hizlariaService, $sce) {
    hizlariaService.getHizlaria($routeParams.hizlaria)
        .then(function(hizlaria) {
            $scope.hizlaria = hizlaria.data;
        });
    hizlariaService.getHizlariarenPasarteak($routeParams.hizlaria)
        .then(function(pasarteak) {
            var pasarte_guztiak = [];
            for (var i=0; i < pasarteak.data.length; i++){
                var pasa = pasarteak.data[i];
                pasa['audio_player'] = $sce.trustAsHtml(pasa['audioa_html']);
                pasa['bideo_player'] = $sce.trustAsHtml(pasa['bideoa_html']);
                pasarte_guztiak.push(pasa);
            }
            $scope.pasarteak = pasarte_guztiak;
        });
  });
