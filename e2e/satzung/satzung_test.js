/* global describe, beforeEach, it, browser, expect */
'use strict';

var SatzungPagePo = require('./satzung.po');

describe('Satzung page', function () {
  var satzungPage;

  beforeEach(function () {
    satzungPage = new SatzungPagePo();
    browser.get('/#/satzung');
  });

  it('should say SatzungCtrl', function () {
    expect(satzungPage.heading.getText()).toEqual('satzung');
    expect(satzungPage.text.getText()).toEqual('SatzungCtrl');
  });
});
