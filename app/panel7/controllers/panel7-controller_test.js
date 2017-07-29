/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Panel7Ctrl', function () {
  var ctrl;

  beforeEach(module('panel7'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Panel7Ctrl');
  }));

  it('should have ctrlName as Panel7Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Panel7Ctrl');
  });
});
