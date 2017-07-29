(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name panel7.controller:Panel7Ctrl
   *
   * @description
   *
   */
  angular
    .module('panel7')
    .controller('Panel7Ctrl', Panel7Ctrl);

  function Panel7Ctrl($timeout) {
    var vm = this;

    vm.controlsVisible = false;
    vm.timeoutPromise = null;

    vm.handleMouseMove = function () {
      vm.controlsVisible = true;
      $timeout.cancel(vm.timeoutPromise);

      vm.timeoutPromise = $timeout(function () {
        vm.controlsVisible = false;
      }, 2000);
    };
  }
}());
