(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name panel10.controller:Panel10Ctrl
   *
   * @description
   *
   */
  angular
    .module('panel10')
    .controller('Panel10Ctrl', Panel10Ctrl);

  function Panel10Ctrl($timeout) {
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
