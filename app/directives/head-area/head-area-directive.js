(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:headArea
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <head-area></head-area>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('headArea', headArea);

  function headArea() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'directives/head-area/head-area-directive.tpl.html',
      replace: true,
      transclude: true,
      controllerAs: 'headArea',
      controller: function () {
        var vm = this;
        vm.name = 'headArea';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
