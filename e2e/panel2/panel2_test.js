/* global describe, beforeEach, it, browser, expect */
'use strict';

var Panel2PagePo = require('./panel2.po');

describe('Panel2 page', function () {
  var panel2Page;

  beforeEach(function () {
    panel2Page = new Panel2PagePo();
    browser.get('/#/panel2');
  });

  it('should say Panel2Ctrl', function () {
    expect(panel2Page.heading.getText()).toEqual('panel2');
    expect(panel2Page.text.getText()).toEqual('Panel2Ctrl');
  });
});
