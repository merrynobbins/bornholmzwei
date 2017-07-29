/* global describe, beforeEach, it, browser, expect */
'use strict';

var Panel1PagePo = require('./panel1.po');

describe('Panel1 page', function () {
  var panel1Page;

  beforeEach(function () {
    panel1Page = new Panel1PagePo();
    browser.get('/#/panel1');
  });

  it('should say Panel1Ctrl', function () {
    expect(panel1Page.heading.getText()).toEqual('panel1');
    expect(panel1Page.text.getText()).toEqual('Panel1Ctrl');
  });
});
