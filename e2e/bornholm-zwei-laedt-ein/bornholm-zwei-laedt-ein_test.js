/* global describe, beforeEach, it, browser, expect */
'use strict';

var BornholmZweiLaedtEinPagePo = require('./bornholm-zwei-laedt-ein.po');

describe('Bornholm zwei laedt ein page', function () {
  var bornholmZweiLaedtEinPage;

  beforeEach(function () {
    bornholmZweiLaedtEinPage = new BornholmZweiLaedtEinPagePo();
    browser.get('/#/bornholm-zwei-laedt-ein');
  });

  it('should say BornholmZweiLaedtEinCtrl', function () {
    expect(bornholmZweiLaedtEinPage.heading.getText()).toEqual('bornholmZweiLaedtEin');
    expect(bornholmZweiLaedtEinPage.text.getText()).toEqual('BornholmZweiLaedtEinCtrl');
  });
});
