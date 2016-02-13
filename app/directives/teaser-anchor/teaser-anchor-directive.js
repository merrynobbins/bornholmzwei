(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:teaserAnchor
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <teaser-anchor></teaser-anchor>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('teaserAnchor', teaserAnchor);

  function teaserAnchor() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'directives/teaser-anchor/teaser-anchor-directive.tpl.html',
      replace: true,
      controllerAs: 'teaserAnchor',
      controller: function () {
        var vm = this;
        vm.name = 'teaserAnchor';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */

        scope.content = attrs.content;
        scope.anchor = attrs.anchor;
      }
    };
  }
}());
