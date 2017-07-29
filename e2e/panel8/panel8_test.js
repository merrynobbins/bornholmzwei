/* global describe, beforeEach, it, browser, expect */
'use strict';

var Panel8PagePo = require('./panel8.po');

describe('Panel8 page', function () {
  var panel8Page;

  beforeEach(function () {
    panel8Page = new Panel8PagePo();
    browser.get('/#/panel8');
  });

  it('should say Panel8Ctrl', function () {
    expect(panel8Page.heading.getText()).toEqual('panel8');
    expect(panel8Page.text.getText()).toEqual('Panel8Ctrl');
  });
});
