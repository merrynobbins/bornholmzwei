/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('VorstandCtrl', function () {
  var ctrl;

  beforeEach(module('vorstand'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('VorstandCtrl');
  }));

  it('should have ctrlName as VorstandCtrl', function () {
    expect(ctrl.ctrlName).toEqual('VorstandCtrl');
  });
});
