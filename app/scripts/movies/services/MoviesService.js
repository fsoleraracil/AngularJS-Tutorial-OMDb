'use strict';

/**
 * @ngdoc function
 * @name omdbApp.service:MoviesService
 * @description
 * # MoviesService
 * Service of the omdbApp
 */
angular.module('omdbApp')
  .factory('MoviesService', function ($http, alertService) {
    var serviceUrl = 'http://www.omdbapi.com/';

    return {
      search: function (text) {
        return $http.get(serviceUrl + '?s=' + text)
          .then(function (response) {
            return response.data.Search ? response.data.Search : [];
          }, function (error) {
            alertService.error('Error downloading movie data: ' + error);
          });
      },

      byTitle: function (text) {
        return $http.get(serviceUrl + '?t=' + text)
          .then(function (response) {
            return response.data;
          }, function (error) {
            alertService.error('Error downloading movie details: ' + error);
          });
      },

      byID: function (text) {
        return $http.get(serviceUrl + '?i=' + text)
          .then(function (response) {
            return response.data;
          }, function (error) {
            alertService.error('Error downloading movie details: ' + error);
          });
      }
    };
  });
