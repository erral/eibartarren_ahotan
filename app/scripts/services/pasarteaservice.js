'use strict';

/**
 * @ngdoc service
 * @name ahotanApp.pasarteaService
 * @description
 * # pasarteaService
 * Service in the ahotanApp.
 */
angular.module('ahotanApp')
  .service('pasarteaService', function pasarteaService($http) {
    return {
      getPasartea: function(pasartea) {

        var url = 'http://www.ahotsak.com/api/pasarteak/' + pasartea;
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
