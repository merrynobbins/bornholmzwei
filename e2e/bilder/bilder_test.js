/* global describe, beforeEach, it, browser, expect */
'use strict';

var BilderPagePo = require('./bilder.po');

describe('Bilder page', function () {
  var bilderPage;

  beforeEach(function () {
    bilderPage = new BilderPagePo();
    browser.get('/#/bilder');
  });

  it('should say BilderCtrl', function () {
    expect(bilderPage.heading.getText()).toEqual('bilder');
    expect(bilderPage.text.getText()).toEqual('BilderCtrl');
  });
});
