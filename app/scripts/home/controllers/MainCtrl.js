'use strict';

/**
 * @ngdoc function
 * @name omdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .controller('MainCtrl', function (Technologies) {
    this.awesomeThings = Technologies;
  });
