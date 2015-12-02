'use strict';

/**
 * @ngdoc function
 * @name omdbApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .controller('MovieCtrl', function ($routeParams, MoviesService) {
    this.selectedMovie = null;
    this.displayFields = ['Genre', 'Director', 'Actors', 'Writer', 'Runtime'];
  
    MoviesService.byID($routeParams.movieID)
      // We also can bind the this to the callback function.
      .then(angular.bind(this, function (movie) {
        this.selectedMovie = movie;
      }));
  });
