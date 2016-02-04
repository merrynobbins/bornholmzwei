(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:footTeaserImage
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <foot-teaser-image></foot-teaser-image>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('footTeaserImage', footTeaserImage);

  function footTeaserImage() {
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: 'directives/foot-teaser-image/foot-teaser-image-directive.tpl.html',
      replace: true,
      controllerAs: 'footTeaserImage',
      controller: function () {
        var vm = this;
        vm.name = 'footTeaserImage';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
