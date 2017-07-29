/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Panel10Ctrl', function () {
  var ctrl;

  beforeEach(module('panel10'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Panel10Ctrl');
  }));

  it('should have ctrlName as Panel10Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Panel10Ctrl');
  });
});
