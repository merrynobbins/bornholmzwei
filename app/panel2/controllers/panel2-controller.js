(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name panel2.controller:Panel2Ctrl
   *
   * @description
   *
   */
  angular
    .module('panel2')
    .controller('Panel2Ctrl', Panel2Ctrl);

  function Panel2Ctrl($timeout) {
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
