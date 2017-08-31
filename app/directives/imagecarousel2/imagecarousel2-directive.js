(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:imagecarousel2
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <imagecarousel2></imagecarousel2>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('imagecarousel2', imagecarousel2);

  function imagecarousel2() {
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: 'directives/imagecarousel2/imagecarousel2-directive.tpl.html',
      replace: true,
      controllerAs: 'imagecarousel2',
      controller: function () {
        var vm = this;
        vm.name = 'imagecarousel2';
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
