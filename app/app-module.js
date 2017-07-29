(function () {
  'use strict';

  /* @ngdoc object
   * @name bornholmZwei
   * @description
   *
   */
  angular
    .module('bornholmZwei', [
      'ui.router',
      'slick',
      'mm.foundation',
      'angular-google-analytics',
      'home',
      'fruechteFuerFluechtlinge',
      'bornholmZweiLaedtEin',
      'unsereNatur',
      'geschichteUndGeschichten',
      'bienenFuerDasVolk',
      'neuigkeiten',
      'satzung',
      'presse',
      'impressum',
      'lageplan',
      'galerie',
      'termine',
      'archiv',
      'archiv2016',
      'archiv2017',
<<<<<<< HEAD
      'panel1',
      'panel2',
      'panel3',
      'panel4',
      'panel5',
      'panel6',
      'panel7',
      'panel8',
      'panel9',
      'panel10'
    ]);
    /*
    .config([
      'AnalyticsProvider',
      function (AnalyticsProvider) {
        AnalyticsProvider.setAccount({
          tracker: 'UA-103012813-1',
          name: 'tracker1',
          set: {
            forceSSL: true,
            anonynizeIp: true
          }
        });

        AnalyticsProvider.setPageEvent('$stateChangeSuccess');
        AnalyticsProvider.ignoreFirstPageLoad(true);
      }
    ]).run([
      'Analytics',
      function () {}
    ]);
    */
=======
      'datenschutz'
    ])
    .config(['AnalyticsProvider', function (AnalyticsProvider) {
      AnalyticsProvider.setAccount({
        tracker: 'UA-103012813-1',
        name: 'tracker1',
        set: {
          forceSSL: true,
          anonynizeIp: true
        }
      });
      AnalyticsProvider.setPageEvent('$stateChangeSuccess');
      AnalyticsProvider.ignoreFirstPageLoad(true);
    }]).run(['Analytics', function () {
    }]);
>>>>>>> 806964b8dd6e10ae2f4187a7d2ebcce2d7951848
}());
