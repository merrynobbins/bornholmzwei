/* global describe, beforeEach, it, browser, expect */
'use strict';

var KontaktPagePo = require('./kontakt.po');

describe('Kontakt page', function () {
  var kontaktPage;

  beforeEach(function () {
    kontaktPage = new KontaktPagePo();
    browser.get('/#/kontakt');
  });

  it('should say KontaktCtrl', function () {
    expect(kontaktPage.heading.getText()).toEqual('kontakt');
    expect(kontaktPage.text.getText()).toEqual('KontaktCtrl');
  });
});
