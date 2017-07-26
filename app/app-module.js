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
}());
