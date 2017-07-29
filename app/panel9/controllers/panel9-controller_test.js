/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Panel9Ctrl', function () {
  var ctrl;

  beforeEach(module('panel9'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Panel9Ctrl');
  }));

  it('should have ctrlName as Panel9Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Panel9Ctrl');
  });
});
