/* global describe, beforeEach, it, browser, expect */
'use strict';

var FruechteFuerFluechtlingePagePo = require('./fruechte-fuer-fluechtlinge.po');

describe('Fruechte fuer fluechtlinge page', function () {
  var fruechteFuerFluechtlingePage;

  beforeEach(function () {
    fruechteFuerFluechtlingePage = new FruechteFuerFluechtlingePagePo();
    browser.get('/#/fruechte-fuer-fluechtlinge');
  });

  it('should say FruechteFuerFluechtlingeCtrl', function () {
    expect(fruechteFuerFluechtlingePage.heading.getText()).toEqual('fruechteFuerFluechtlinge');
    expect(fruechteFuerFluechtlingePage.text.getText()).toEqual('FruechteFuerFluechtlingeCtrl');
  });
});
