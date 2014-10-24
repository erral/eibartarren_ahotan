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
        var url = 'http://www.ahotsak.com/api/herriak/eibar/hizlariak/',
        params = {
            giltza: 'emvUIWiLQMqSygTbRtrd',
            format: 'json',
            callback: 'JSON_CALLBACK'
        }
        console.log(url);
        console.log(params);
        return $http.jsonp(url, {params: params}).success(

            function(resp){
                return resp;
            }
        );
      }
    };
  });
