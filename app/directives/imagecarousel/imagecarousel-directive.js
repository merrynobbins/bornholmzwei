(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:imagecarousel
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <imagecarousel></imagecarousel>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('imagecarousel', imagecarousel);

  function imagecarousel() {
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: 'directives/imagecarousel/imagecarousel-directive.tpl.html',
      replace: true,
      controllerAs: 'imagecarousel',
      controller: function () {
        var vm = this;
        vm.name = 'imagecarousel';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */

        angular.element(element).slick({
          dots: false,
          infinite: true,
          speed: 750,
          slidesToShow: 3,
          slidesToScroll: 3,
          pauseOnHover: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000
        });
      }
    };
  }
}());
