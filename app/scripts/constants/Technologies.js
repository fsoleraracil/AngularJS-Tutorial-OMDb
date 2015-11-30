'use strict';

/**
 * @ngdoc function
 * @name omdbApp.constants:Technologies
 * @description
 * # Technologies
 * Controller of the omdbApp
 */
angular.module('omdbApp')
  .constant('Technologies', [
      {
          title: 'HTML5',
          description: 'With HTML you can create your own Web site!'
      },
      {
          title: 'AngularJS',
          description: 'AngularJS is a toolset for building the framework most suited to your application development.'
      },
      {
          title: 'Bootstrap',
          description: 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.'
      },
      {
          title: 'Karma',
          description: 'Spectacular Test Runner for JavaScript.'
      },
      {
          title: 'Node.js',
          description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
      }
  ]);