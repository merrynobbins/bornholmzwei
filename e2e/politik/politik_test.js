/* global describe, beforeEach, it, browser, expect */
'use strict';

var PolitikPagePo = require('./politik.po');

describe('Politik page', function () {
  var politikPage;

  beforeEach(function () {
    politikPage = new PolitikPagePo();
    browser.get('/#/politik');
  });

  it('should say PolitikCtrl', function () {
    expect(politikPage.heading.getText()).toEqual('politik');
    expect(politikPage.text.getText()).toEqual('PolitikCtrl');
  });
});
