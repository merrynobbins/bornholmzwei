(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name panel3.controller:Panel3Ctrl
   *
   * @description
   *
   */
  angular
    .module('panel3')
    .controller('Panel3Ctrl', Panel3Ctrl);

  function Panel3Ctrl($timeout) {
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
