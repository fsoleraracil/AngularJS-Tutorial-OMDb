'use strict';

/**
 * @ngdoc function
 * @name omdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .controller('MainCtrl', ['$scope', 'Technologies', function ($scope, technologies) {
    $scope.awesomeThings = technologies;
  }]);
