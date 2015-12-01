'use strict';

/**
 * @ngdoc function
 * @name omdbApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .controller('MoviesCtrl', ['$scope', 'MoviesService', function ($scope, MoviesService) {
    $scope.movies = [];
    $scope.keywords = '';
  
    $scope.search = function () {
      MoviesService.search($scope.keywords)
        .then(function (movies) {
          $scope.movies = movies;
        });
    };
  }]);