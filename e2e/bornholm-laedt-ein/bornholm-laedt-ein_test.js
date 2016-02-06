/* global describe, beforeEach, it, browser, expect */
'use strict';

var BornholmLaedtEinPagePo = require('./bornholm-laedt-ein.po');

describe('Bornholm laedt ein page', function () {
  var bornholmLaedtEinPage;

  beforeEach(function () {
    bornholmLaedtEinPage = new BornholmLaedtEinPagePo();
    browser.get('/#/bornholm-laedt-ein');
  });

  it('should say BornholmLaedtEinCtrl', function () {
    expect(bornholmLaedtEinPage.heading.getText()).toEqual('bornholmLaedtEin');
    expect(bornholmLaedtEinPage.text.getText()).toEqual('BornholmLaedtEinCtrl');
  });
});
