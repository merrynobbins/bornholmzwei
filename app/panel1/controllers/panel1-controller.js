(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name panel1.controller:Panel1Ctrl
   *
   * @description
   *
   */
  angular
    .module('panel1')
    .controller('Panel1Ctrl', Panel1Ctrl);

  function Panel1Ctrl($timeout) {
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
