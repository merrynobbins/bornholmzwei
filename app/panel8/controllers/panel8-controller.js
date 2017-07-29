(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name panel8.controller:Panel8Ctrl
   *
   * @description
   *
   */
  angular
    .module('panel8')
    .controller('Panel8Ctrl', Panel8Ctrl);

  function Panel8Ctrl($timeout) {
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
