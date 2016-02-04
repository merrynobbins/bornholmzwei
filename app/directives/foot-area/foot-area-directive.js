(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:footArea
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <foot-area></foot-area>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('footArea', footArea);

  function footArea() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'directives/foot-area/foot-area-directive.tpl.html',
      replace: true,
      transclude: true,
      controllerAs: 'footArea',
      controller: function () {
        var vm = this;
        vm.name = 'footArea';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
