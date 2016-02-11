/* global describe, beforeEach, it, browser, expect */
'use strict';

var LageplanPagePo = require('./lageplan.po');

describe('Lageplan page', function () {
  var lageplanPage;

  beforeEach(function () {
    lageplanPage = new LageplanPagePo();
    browser.get('/#/lageplan');
  });

  it('should say LageplanCtrl', function () {
    expect(lageplanPage.heading.getText()).toEqual('lageplan');
    expect(lageplanPage.text.getText()).toEqual('LageplanCtrl');
  });
});
