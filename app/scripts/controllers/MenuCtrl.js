'use strict';

/**
 * @ngdoc function
 * @name omdbApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewPath) {
      return $location.path() === viewPath;
    };
  }]);
