'use strict';

/**
 * @ngdoc function
 * @name omdbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
        {
            title: 'HTML5',
            description: 'With HTML you can create your own Web site!'
        },
        {
            title: 'AngularJS',
            description: ''
        },
        {
            title: 'Karma',
            description: ''
        }
    ];
  });
