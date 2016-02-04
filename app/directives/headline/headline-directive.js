(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:headline
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <headline></headline>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('headline', headline);

  function headline() {
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: 'directives/headline/headline-directive.tpl.html',
      replace: true,
      controllerAs: 'headline',
      controller: function () {
        var vm = this;
        vm.name = 'headline';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */

        scope.content = attrs.content;
      }
    };
  }
}());
