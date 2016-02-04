(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:pageLogo
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <page-logo></page-logo>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('pageLogo', pageLogo);

  function pageLogo() {
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: 'directives/page-logo/page-logo-directive.tpl.html',
      replace: true,
      controllerAs: 'pageLogo',
      controller: function () {
        var vm = this;
        vm.name = 'pageLogo';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
