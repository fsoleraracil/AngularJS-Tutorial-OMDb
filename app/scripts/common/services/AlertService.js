'use strict';

/**
 * @ngdoc function
 * @name omdbApp.service:alertService
 * @description
 * # alertService
 * Service of the omdbApp
 */  

angular.module('omdbApp')
  .factory('alertService', function() {
    return {
      info: function(text) {
        swal('Info', text, 'info');
      },
      success: function(text) {
        swal('Success', text, 'success');
      },
      error: function(text) {
        swal('Error', text, 'error');
      },
      prompt: function(displayText, callback, defaultPrompt) {
        swal({
          title: 'Question',
          text: displayText,
          type: 'input',
          showCancelButton: true,
          closeOnConfirm: true,
          animation: 'slide-from-top',
          inputPlaceholder: displayText,
          inputValue: defaultPrompt
        }, callback);
      }
    }
  });
