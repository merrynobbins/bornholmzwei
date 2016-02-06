/* global describe, beforeEach, it, browser, expect */
'use strict';

var GeschichteUndGeschichtenPagePo = require('./geschichte-und-geschichten.po');

describe('Geschichte und geschichten page', function () {
  var geschichteUndGeschichtenPage;

  beforeEach(function () {
    geschichteUndGeschichtenPage = new GeschichteUndGeschichtenPagePo();
    browser.get('/#/geschichte-und-geschichten');
  });

  it('should say GeschichteUndGeschichtenCtrl', function () {
    expect(geschichteUndGeschichtenPage.heading.getText()).toEqual('geschichteUndGeschichten');
    expect(geschichteUndGeschichtenPage.text.getText()).toEqual('GeschichteUndGeschichtenCtrl');
  });
});
