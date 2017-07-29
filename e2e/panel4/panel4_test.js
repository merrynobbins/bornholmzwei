/* global describe, beforeEach, it, browser, expect */
'use strict';

var Panel4PagePo = require('./panel4.po');

describe('Panel4 page', function () {
  var panel4Page;

  beforeEach(function () {
    panel4Page = new Panel4PagePo();
    browser.get('/#/panel4');
  });

  it('should say Panel4Ctrl', function () {
    expect(panel4Page.heading.getText()).toEqual('panel4');
    expect(panel4Page.text.getText()).toEqual('Panel4Ctrl');
  });
});
