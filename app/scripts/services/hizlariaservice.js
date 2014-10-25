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

        var url = 'http://www.ahotsak.com/api/hizlariak/' + hizlaria + '/pasarteak/';
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
      }
    };
  });
