/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('BornholmZweiLaedtEinCtrl', function () {
  var ctrl;

  beforeEach(module('bornholmZweiLaedtEin'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('BornholmZweiLaedtEinCtrl');
  }));

  it('should have ctrlName as BornholmZweiLaedtEinCtrl', function () {
    expect(ctrl.ctrlName).toEqual('BornholmZweiLaedtEinCtrl');
  });
});
