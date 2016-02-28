/* global describe, beforeEach, it, browser, expect */
'use strict';

var GaleriePagePo = require('./galerie.po');

describe('Galerie page', function () {
  var galeriePage;

  beforeEach(function () {
    galeriePage = new GaleriePagePo();
    browser.get('/#/galerie');
  });

  it('should say GalerieCtrl', function () {
    expect(galeriePage.heading.getText()).toEqual('galerie');
    expect(galeriePage.text.getText()).toEqual('GalerieCtrl');
  });
});
