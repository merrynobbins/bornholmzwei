/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('UnsereNaturCtrl', function () {
  var ctrl;

  beforeEach(module('unsereNatur'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('UnsereNaturCtrl');
  }));

  it('should have ctrlName as UnsereNaturCtrl', function () {
    expect(ctrl.ctrlName).toEqual('UnsereNaturCtrl');
  });
});
