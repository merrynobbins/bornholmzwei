(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name panel6.controller:Panel6Ctrl
   *
   * @description
   *
   */
  angular
    .module('panel6')
    .controller('Panel6Ctrl', Panel6Ctrl);

  function Panel6Ctrl($timeout) {
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
