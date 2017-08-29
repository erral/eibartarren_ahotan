'use strict';

/**
 * @ngdoc service
 * @name ahotanApp.pasarteakService
 * @description
 * # pasarteakService
 * Service in the ahotanApp.
 */
angular.module('ahotanApp')
  .service('pasarteakService', function pasarteakService($http) {
    return {
      getPasarteak: function() {

        var url = 'https://ahotsak.eus/api/herriak/eibar/pasarteak/';
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
