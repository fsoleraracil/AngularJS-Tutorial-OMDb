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
      search: function (text) {
        return $http.get(serviceUrl + '?s=' + text)
          .then(function (response) {
            return response.data.Search;
          }, function (error) {
            console.log('Error downloading movie data: ' + error);
            return [];
          });
      },

      byTitle: function (text) {
        return $http.get(serviceUrl + '?t=' + text)
          .then(function (response) {
            return response.data;
          }, function (error) {
            console.log('Error downloading movie details: ' + error);
            return [];
          });
      }
    };
  }]);
