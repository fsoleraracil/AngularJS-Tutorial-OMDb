'use strict';

/**
 * @ngdoc function
 * @name omdbApp.service:MoviesService
 * @description
 * # MoviesService
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .factory('MoviesService', ['$http', function ($http) {
    var serviceUrl = 'http://www.omdbapi.com/';

    return {
      search: function (text, success) {
        $http.get(serviceUrl + '?s=' + text)
          .success(function (data) {
            success(data.Search);
          })
          .error(function (error) {
            console.log('Error download movie data: ' + error);
          });
      },

      byTitle: function (text, success) {
        $http.get(serviceUrl + '?t=' + text)
          .success(function (data) {
            success(data);
          })
          .error(function (error) {
            console.log('Error downloading movie details: ' + error);
          });
      }
    };
  }]);