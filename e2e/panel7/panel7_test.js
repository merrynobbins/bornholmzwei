/* global describe, beforeEach, it, browser, expect */
'use strict';

var Panel7PagePo = require('./panel7.po');

describe('Panel7 page', function () {
  var panel7Page;

  beforeEach(function () {
    panel7Page = new Panel7PagePo();
    browser.get('/#/panel7');
  });

  it('should say Panel7Ctrl', function () {
    expect(panel7Page.heading.getText()).toEqual('panel7');
    expect(panel7Page.text.getText()).toEqual('Panel7Ctrl');
  });
});
