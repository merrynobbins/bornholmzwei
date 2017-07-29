/* global describe, beforeEach, it, browser, expect */
'use strict';

var Panel3PagePo = require('./panel3.po');

describe('Panel3 page', function () {
  var panel3Page;

  beforeEach(function () {
    panel3Page = new Panel3PagePo();
    browser.get('/#/panel3');
  });

  it('should say Panel3Ctrl', function () {
    expect(panel3Page.heading.getText()).toEqual('panel3');
    expect(panel3Page.text.getText()).toEqual('Panel3Ctrl');
  });
});
