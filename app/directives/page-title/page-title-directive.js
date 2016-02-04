(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:pageTitle
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <page-title></page-title>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('pageTitle', pageTitle);

  function pageTitle() {
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: 'directives/page-title/page-title-directive.tpl.html',
      replace: true,
      controllerAs: 'pageTitle',
      controller: function () {
        var vm = this;
        vm.name = 'pageTitle';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */

        scope.content = attrs.content;
      }
    };
  }
}());
