(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:pageSlogan
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <page-slogan></page-slogan>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('pageSlogan', pageSlogan);

  function pageSlogan() {
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: 'directives/page-slogan/page-slogan-directive.tpl.html',
      replace: true,
      controllerAs: 'pageSlogan',
      controller: function () {
        var vm = this;
        vm.name = 'pageSlogan';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */

        scope.content = attrs.content;
      }
    };
  }
}());
