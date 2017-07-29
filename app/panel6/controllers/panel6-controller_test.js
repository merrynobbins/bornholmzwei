/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Panel6Ctrl', function () {
  var ctrl;

  beforeEach(module('panel6'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Panel6Ctrl');
  }));

  it('should have ctrlName as Panel6Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Panel6Ctrl');
  });
});
