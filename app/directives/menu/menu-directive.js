(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:menu
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <menu></menu>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('menu', menu);

  function menu() {
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: 'directives/menu/menu-directive.tpl.html',
      replace: true,
      controllerAs: 'menu',
      controller: function () {
        var vm = this;
        vm.name = 'menu';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */

        var $menuWrapper = angular.element(element).find('.menu--content-wrapper'),
            $body = angular.element('body');

        scope.toggleMenu = function () {
          if ($menuWrapper.length) {
            if ($menuWrapper.hasClass('menu--content-wrapper__visible')) {
              scope.hideMenu();
            } else {
              scope.showMenu();
            }
          }
        };

        scope.showMenu = function () {
          if ($menuWrapper.length) {
            $menuWrapper.addClass('menu--content-wrapper__visible');

            setTimeout(function () {
              $body.one('click.menuOff', scope.hideMenu);
            }, 0);
          }
        };

        scope.hideMenu = function () {
          if ($menuWrapper.length) {
            $menuWrapper.removeClass('menu--content-wrapper__visible');
            $body.off('click.menuOff');
          }
        };
      }
    };
  }
}());
