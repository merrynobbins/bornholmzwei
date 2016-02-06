(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name satzung.controller:SatzungCtrl
   *
   * @description
   *
   */
  angular
    .module('satzung')
    .controller('SatzungCtrl', SatzungCtrl);

  function SatzungCtrl() {
    var vm = this;
    vm.ctrlName = 'SatzungCtrl';
  }
}());
