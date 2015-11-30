'use strict';

/**
 * @ngdoc function
 * @name omdbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .controller('AboutCtrl', ['$scope', 'Technologies', function ($scope, technologies) {
    $scope.awesomeThings = technologies;
  }]);
