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

        var i = 0,
            $tmpElement,
            tmpTagName,
            $body;

        scope.content = attrs.content;

        // $document[0].body will return undefined, no idea why, though... so this is a hack to get the body
        $tmpElement = element;
        tmpTagName = angular.element(element)[0].tagName.toLowerCase();

        while (tmpTagName !== 'body' && i < 20) {
          i++;
          $tmpElement = angular.element($tmpElement).parent();
          tmpTagName = $tmpElement[0].tagName.toLowerCase();
        }

        $body = $tmpElement;

        angular.element(element).on('click', function () {
          angular.element('html, body').animate({scrollTop: $body[0].scrollHeight}, 500);
          angular.element(element)
              .closest('.foot-area')
              .find('.copytext.invisible-on-desktop')
              .css('opacity', 0)
              .removeClass('invisible')
              .animate({opacity: 1}, 500);
        });
      }
    };
  }
}());
