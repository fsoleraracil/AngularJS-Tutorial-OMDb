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
      // As we are using the controller as a class we need to bypass the this var.
      MoviesService.search(that.keywords)
        // We also can bind the this to the callback function.
        .then(angular.bind(this, function (movies) {
          this.selectedMovies = movies;
        }));
    };

    this.isMoviesEmpty = function () {
      return that.selectedMovies.length === 0;
    };
  });
