/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Panel4Ctrl', function () {
  var ctrl;

  beforeEach(module('panel4'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Panel4Ctrl');
  }));

  it('should have ctrlName as Panel4Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Panel4Ctrl');
  });
});
