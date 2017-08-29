'use strict';

/**
 * @ngdoc service
 * @name ahotanApp.hizlariakService
 * @description
 * # hizlariakService
 * Service in the ahotanApp.
 */
angular.module('ahotanApp')
  .service('hizlariakService', function hizlariakService($http) {
    return {
      getHizlariak: function() {

        var url = 'https://ahotsak.eus/api/herriak/eibar/hizlariak/';
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
