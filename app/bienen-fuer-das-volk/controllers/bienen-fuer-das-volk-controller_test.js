/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('BienenFuerDasVolkCtrl', function () {
  var ctrl;

  beforeEach(module('bienenFuerDasVolk'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('BienenFuerDasVolkCtrl');
  }));

  it('should have ctrlName as BienenFuerDasVolkCtrl', function () {
    expect(ctrl.ctrlName).toEqual('BienenFuerDasVolkCtrl');
  });
});
