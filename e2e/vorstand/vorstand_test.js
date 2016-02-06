/* global describe, beforeEach, it, browser, expect */
'use strict';

var VorstandPagePo = require('./vorstand.po');

describe('Vorstand page', function () {
  var vorstandPage;

  beforeEach(function () {
    vorstandPage = new VorstandPagePo();
    browser.get('/#/vorstand');
  });

  it('should say VorstandCtrl', function () {
    expect(vorstandPage.heading.getText()).toEqual('vorstand');
    expect(vorstandPage.text.getText()).toEqual('VorstandCtrl');
  });
});
