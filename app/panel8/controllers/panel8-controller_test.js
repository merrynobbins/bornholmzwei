/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Panel8Ctrl', function () {
  var ctrl;

  beforeEach(module('panel8'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Panel8Ctrl');
  }));

  it('should have ctrlName as Panel8Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Panel8Ctrl');
  });
});
