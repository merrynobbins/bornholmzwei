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

  function Panel1Ctrl() {
    var vm = this;
    vm.ctrlName = 'Panel1Ctrl';
  }
}());
