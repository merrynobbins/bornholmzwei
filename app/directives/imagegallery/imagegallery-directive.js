(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:imagegallery
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <imagegallery></imagegallery>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('imagegallery', imagegallery);

  function imagegallery() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'directives/imagegallery/imagegallery-directive.tpl.html',
      replace: true,
      controllerAs: 'imagegallery',
      controller: function () {
        var vm = this;
        vm.name = 'imagegallery';

        vm.images = [
          {thumb: '/images/slider/thumbs/IMG_1948.jpg', img: '/images/slider/IMG_1948.jpg', description: 'Bild 1'},
          {thumb: '/images/slider/thumbs/IMG_4578.jpg', img: '/images/slider/IMG_4578.jpg', description: 'Bild 2'},
          {thumb: '/images/slider/thumbs/IMG_9129.jpg', img: '/images/slider/IMG_9129.jpg', description: 'Bild 3'},
          {thumb: '/images/slider/thumbs/IMG_9139.jpg', img: '/images/slider/IMG_9139.jpg', description: 'Bild 4'},
          {thumb: '/images/slider/thumbs/IMG_9146.jpg', img: '/images/slider/IMG_9146.jpg', description: 'Bild 5'},
          {thumb: '/images/slider/thumbs/IMG_9195.jpg', img: '/images/slider/IMG_9195.jpg', description: 'Bild 6'},
          {thumb: '/images/slider/thumbs/IMG_9198.jpg', img: '/images/slider/IMG_9198.jpg', description: 'Bild 7'},
          {thumb: '/images/slider/thumbs/IMG_9204.jpg', img: '/images/slider/IMG_9204.jpg', description: 'Bild 8'},
          {thumb: '/images/slider/thumbs/IMG_9195.jpg', img: '/images/slider/IMG_9195.jpg', description: 'Bild 9'},
          {thumb: '/images/slider/thumbs/IMG_9198.jpg', img: '/images/slider/IMG_9198.jpg', description: 'Bild 10'},
          {thumb: '/images/slider/thumbs/IMG_9204.jpg', img: '/images/slider/IMG_9204.jpg', description: 'Bild 11'}
        ];
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
