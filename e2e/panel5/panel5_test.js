/* global describe, beforeEach, it, browser, expect */
'use strict';

var Panel5PagePo = require('./panel5.po');

describe('Panel5 page', function () {
  var panel5Page;

  beforeEach(function () {
    panel5Page = new Panel5PagePo();
    browser.get('/#/panel5');
  });

  it('should say Panel5Ctrl', function () {
    expect(panel5Page.heading.getText()).toEqual('panel5');
    expect(panel5Page.text.getText()).toEqual('Panel5Ctrl');
  });
});
