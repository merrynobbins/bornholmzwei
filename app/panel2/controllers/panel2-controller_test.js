/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Panel2Ctrl', function () {
  var ctrl;

  beforeEach(module('panel2'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Panel2Ctrl');
  }));

  it('should have ctrlName as Panel2Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Panel2Ctrl');
  });
});
