/* global describe, beforeEach, it, browser, expect */
'use strict';

var ImpressumPagePo = require('./impressum.po');

describe('Impressum page', function () {
  var impressumPage;

  beforeEach(function () {
    impressumPage = new ImpressumPagePo();
    browser.get('/#/impressum');
  });

  it('should say ImpressumCtrl', function () {
    expect(impressumPage.heading.getText()).toEqual('impressum');
    expect(impressumPage.text.getText()).toEqual('ImpressumCtrl');
  });
});
