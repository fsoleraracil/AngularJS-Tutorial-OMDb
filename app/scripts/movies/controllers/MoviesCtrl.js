'use strict';

/**
 * @ngdoc function
 * @name omdbApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .controller('MoviesCtrl', function (MoviesService) {
    this.selectedMovies = [];
    this.keywords = '';
    var that = this;
  
    this.search = function () {
      MoviesService.search(that.keywords)
        .then(angular.bind(this, function (movies) {
          this.selectedMovies = movies;
        }));
    };

    this.isMoviesEmpty = function () {
      return that.selectedMovies.length === 0;
    };
  });
