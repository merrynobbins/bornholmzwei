/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Panel1Ctrl', function () {
  var ctrl;

  beforeEach(module('panel1'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Panel1Ctrl');
  }));

  it('should have ctrlName as Panel1Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Panel1Ctrl');
  });
});
