/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('LageplanCtrl', function () {
  var ctrl;

  beforeEach(module('lageplan'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('LageplanCtrl');
  }));

  it('should have ctrlName as LageplanCtrl', function () {
    expect(ctrl.ctrlName).toEqual('LageplanCtrl');
  });
});
