(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name panel5.controller:Panel5Ctrl
   *
   * @description
   *
   */
  angular
    .module('panel5')
    .controller('Panel5Ctrl', Panel5Ctrl);

  function Panel5Ctrl($timeout) {
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
