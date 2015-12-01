'use strict';

/**
 * @ngdoc function
 * @name omdbApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .controller('MoviesCtrl', ['$scope', 'MoviesService', function ($scope, moviesService) {
    $scope.movies = [];
    $scope.keywords = '';
  
    $scope.search = function () {
      moviesService.search($scope.keywords, function (movies) {
        $scope.movies = movies;
      });
    };
  }]);