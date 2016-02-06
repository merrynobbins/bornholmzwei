(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:imagegallerySyncedpreview
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <imagegallery-syncedpreview></imagegallery-syncedpreview>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('imagegallerySyncedpreview', imagegallerySyncedpreview);

  function imagegallerySyncedpreview() {
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: 'directives/imagegallery-syncedpreview/imagegallery-syncedpreview-directive.tpl.html',
      replace: true,
      controllerAs: 'imagegallerySyncedpreview',
      controller: function () {
        var vm = this;
        vm.name = 'imagegallerySyncedpreview';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */

        angular.element('.imagegallery-syncedpreview--window').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.imagegallery-syncedpreview--gallery'
        });

        angular.element('.imagegallery-syncedpreview--gallery').slick({
          slidesToShow: 7,
          slidesToScroll: 1,
          asNavFor: '.imagegallery-syncedpreview--window',
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          infinite: true,
          speed: 300,
          variableWidth: true
        });
      }
    };
  }
}());
