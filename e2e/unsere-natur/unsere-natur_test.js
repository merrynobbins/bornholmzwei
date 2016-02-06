/* global describe, beforeEach, it, browser, expect */
'use strict';

var UnsereNaturPagePo = require('./unsere-natur.po');

describe('Unsere natur page', function () {
  var unsereNaturPage;

  beforeEach(function () {
    unsereNaturPage = new UnsereNaturPagePo();
    browser.get('/#/unsere-natur');
  });

  it('should say UnsereNaturCtrl', function () {
    expect(unsereNaturPage.heading.getText()).toEqual('unsereNatur');
    expect(unsereNaturPage.text.getText()).toEqual('UnsereNaturCtrl');
  });
});
