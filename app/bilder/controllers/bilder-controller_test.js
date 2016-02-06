/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('BilderCtrl', function () {
  var ctrl;

  beforeEach(module('bilder'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('BilderCtrl');
  }));

  it('should have ctrlName as BilderCtrl', function () {
    expect(ctrl.ctrlName).toEqual('BilderCtrl');
  });
});
