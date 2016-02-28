/* global describe, beforeEach, it, browser, expect */
'use strict';

var TerminePagePo = require('./termine.po');

describe('Termine page', function () {
  var terminePage;

  beforeEach(function () {
    terminePage = new TerminePagePo();
    browser.get('/#/termine');
  });

  it('should say TermineCtrl', function () {
    expect(terminePage.heading.getText()).toEqual('termine');
    expect(terminePage.text.getText()).toEqual('TermineCtrl');
  });
});
