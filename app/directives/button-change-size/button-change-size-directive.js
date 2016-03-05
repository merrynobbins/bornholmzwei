(function () {
  'use strict';

  var fontSize = 100;

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:buttonChangeSize
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <button-change-size></button-change-size>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('buttonChangeSize', buttonChangeSize);

  function buttonChangeSize() {
    return {
      restrict: 'EA',
      scope: {
        eventHandler: '&ngClick'
      },
      templateUrl: 'directives/button-change-size/button-change-size-directive.tpl.html',
      replace: true,
      controllerAs: 'buttonChangeSize',
      controller: function () {
        var vm = this;
        vm.name = 'buttonChangeSize';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */

        scope.setFontSize = function (size) {
          if (!size) {
            return false;
          }

          switch (size) {
            case 'small':
              if (fontSize > 40) {
                fontSize -= 20;
              }
              break;

            case 'large':
              if (fontSize < 200) {
                fontSize += 20;
              }
              break;

            default:
              fontSize = 100;
              break;
          }

          angular.element('.main-content-area').css('font-size', '' + fontSize + '%');
        };
      }
    };
  }
}());
