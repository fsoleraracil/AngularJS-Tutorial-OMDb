'use strict';

/**
 * @ngdoc function
 * @name omdbApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .controller('MenuCtrl', function ($location) {
    this.isActive = function (viewPath) {
      return $location.path() === viewPath;
    };
  });
