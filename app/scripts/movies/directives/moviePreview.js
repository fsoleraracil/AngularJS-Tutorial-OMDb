'use strict';

/**
 * @ngdoc function
 * @name omdbApp.directive:moviePreview
 * @description
 * # moviePreview
 * Directive of the omdbApp
 */
angular.module('omdbApp')
  .directive('moviePreview', function () {
    return {
      restrict: 'E',
      template: '<p><strong>{{ field }}:</strong> {{ movie[field] }}</p>',
      scope: {
        field: '@',
        movie: '='
      }
    };
  });