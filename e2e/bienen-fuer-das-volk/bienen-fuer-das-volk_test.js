/* global describe, beforeEach, it, browser, expect */
'use strict';

var BienenFuerDasVolkPagePo = require('./bienen-fuer-das-volk.po');

describe('Bienen fuer das volk page', function () {
  var bienenFuerDasVolkPage;

  beforeEach(function () {
    bienenFuerDasVolkPage = new BienenFuerDasVolkPagePo();
    browser.get('/#/bienen-fuer-das-volk');
  });

  it('should say BienenFuerDasVolkCtrl', function () {
    expect(bienenFuerDasVolkPage.heading.getText()).toEqual('bienenFuerDasVolk');
    expect(bienenFuerDasVolkPage.text.getText()).toEqual('BienenFuerDasVolkCtrl');
  });
});
