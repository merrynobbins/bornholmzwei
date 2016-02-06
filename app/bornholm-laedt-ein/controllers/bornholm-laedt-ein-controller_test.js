/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('BornholmLaedtEinCtrl', function () {
  var ctrl;

  beforeEach(module('bornholmLaedtEin'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('BornholmLaedtEinCtrl');
  }));

  it('should have ctrlName as BornholmLaedtEinCtrl', function () {
    expect(ctrl.ctrlName).toEqual('BornholmLaedtEinCtrl');
  });
});
