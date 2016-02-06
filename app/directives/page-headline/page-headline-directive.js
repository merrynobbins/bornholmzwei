(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:pageHeadline
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <page-headline></page-headline>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('pageHeadline', pageHeadline);

  function pageHeadline() {
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: 'directives/page-headline/page-headline-directive.tpl.html',
      replace: true,
      controllerAs: 'pageHeadline',
      controller: function () {
        var vm = this;
        vm.name = 'pageHeadline';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */

        scope.content = attrs.content;
      }
    };
  }
}());
