'use strict';

/**
 * @ngdoc service
 * @name ahotanApp.hizlariaService
 * @description
 * # hizlariaService
 * Service in the ahotanApp.
 */
angular.module('ahotanApp')
  .service('hizlariaService', function hizlariaService($http) {
    return {
      getHizlaria: function(hizlaria) {

        var url = 'https://ahotsak.eus/api/hizlariak/' + hizlaria;
        var params = {
            giltza: 'emvUIWiLQMqSygTbRtrd',
            format: 'json',
            callback: 'JSON_CALLBACK'
        };

        return $http.jsonp(url, {params: params}).success(

            function(resp){
                return resp;
            }
        );
      },
      getHizlariarenPasarteak: function(hizlaria) {

        var url = 'https://ahotsak.eus/api/hizlariak/' + hizlaria + '/pasarteak/';
        var params = {
            giltza: 'emvUIWiLQMqSygTbRtrd',
            format: 'json',
            callback: 'JSON_CALLBACK'
        };

        return $http.jsonp(url, {params: params}).success(

            function(resp){
                return resp;
            }
        );
      },
    };
  });
