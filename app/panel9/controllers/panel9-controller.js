(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name panel9.controller:Panel9Ctrl
   *
   * @description
   *
   */
  angular
    .module('panel9')
    .controller('Panel9Ctrl', Panel9Ctrl);

  function Panel9Ctrl($timeout) {
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
