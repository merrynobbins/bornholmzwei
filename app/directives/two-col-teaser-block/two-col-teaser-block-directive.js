(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:twoColTeaserBlock
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <two-col-teaser-block></two-col-teaser-block>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('twoColTeaserBlock', twoColTeaserBlock);

  function twoColTeaserBlock() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'directives/two-col-teaser-block/two-col-teaser-block-directive.tpl.html',
      replace: true,
      transclude: true,
      controllerAs: 'twoColTeaserBlock',
      controller: function () {
        var vm = this;
        vm.name = 'twoColTeaserBlock';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
