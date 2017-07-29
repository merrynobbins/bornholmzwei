/* global describe, beforeEach, it, browser, expect */
'use strict';

var Panel9PagePo = require('./panel9.po');

describe('Panel9 page', function () {
  var panel9Page;

  beforeEach(function () {
    panel9Page = new Panel9PagePo();
    browser.get('/#/panel9');
  });

  it('should say Panel9Ctrl', function () {
    expect(panel9Page.heading.getText()).toEqual('panel9');
    expect(panel9Page.text.getText()).toEqual('Panel9Ctrl');
  });
});
