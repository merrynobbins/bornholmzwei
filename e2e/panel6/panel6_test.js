/* global describe, beforeEach, it, browser, expect */
'use strict';

var Panel6PagePo = require('./panel6.po');

describe('Panel6 page', function () {
  var panel6Page;

  beforeEach(function () {
    panel6Page = new Panel6PagePo();
    browser.get('/#/panel6');
  });

  it('should say Panel6Ctrl', function () {
    expect(panel6Page.heading.getText()).toEqual('panel6');
    expect(panel6Page.text.getText()).toEqual('Panel6Ctrl');
  });
});
