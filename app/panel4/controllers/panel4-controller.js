(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name panel4.controller:Panel4Ctrl
   *
   * @description
   *
   */
  angular
    .module('panel4')
    .controller('Panel4Ctrl', Panel4Ctrl);

  function Panel4Ctrl($timeout) {
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
