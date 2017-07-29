/* global describe, beforeEach, it, browser, expect */
'use strict';

var Panel10PagePo = require('./panel10.po');

describe('Panel10 page', function () {
  var panel10Page;

  beforeEach(function () {
    panel10Page = new Panel10PagePo();
    browser.get('/#/panel10');
  });

  it('should say Panel10Ctrl', function () {
    expect(panel10Page.heading.getText()).toEqual('panel10');
    expect(panel10Page.text.getText()).toEqual('Panel10Ctrl');
  });
});
