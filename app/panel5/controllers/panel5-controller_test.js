/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Panel5Ctrl', function () {
  var ctrl;

  beforeEach(module('panel5'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Panel5Ctrl');
  }));

  it('should have ctrlName as Panel5Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Panel5Ctrl');
  });
});
