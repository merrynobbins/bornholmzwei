/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SatzungCtrl', function () {
  var ctrl;

  beforeEach(module('satzung'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('SatzungCtrl');
  }));

  it('should have ctrlName as SatzungCtrl', function () {
    expect(ctrl.ctrlName).toEqual('SatzungCtrl');
  });
});
