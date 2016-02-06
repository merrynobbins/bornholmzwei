/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('GeschichteUndGeschichtenCtrl', function () {
  var ctrl;

  beforeEach(module('geschichteUndGeschichten'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('GeschichteUndGeschichtenCtrl');
  }));

  it('should have ctrlName as GeschichteUndGeschichtenCtrl', function () {
    expect(ctrl.ctrlName).toEqual('GeschichteUndGeschichtenCtrl');
  });
});
