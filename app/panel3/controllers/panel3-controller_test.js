/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Panel3Ctrl', function () {
  var ctrl;

  beforeEach(module('panel3'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Panel3Ctrl');
  }));

  it('should have ctrlName as Panel3Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Panel3Ctrl');
  });
});
