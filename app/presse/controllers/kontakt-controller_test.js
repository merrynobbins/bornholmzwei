/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('KontaktCtrl', function () {
  var ctrl;

  beforeEach(module('kontakt'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('KontaktCtrl');
  }));

  it('should have ctrlName as KontaktCtrl', function () {
    expect(ctrl.ctrlName).toEqual('KontaktCtrl');
  });
});
