/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('C0630kinderfest18Ctrl', function () {
  var ctrl;

  beforeEach(module('0630kinderfest18'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('C0630kinderfest18Ctrl');
  }));

  it('should have ctrlName as C0630kinderfest18Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('C0630kinderfest18Ctrl');
  });
});
