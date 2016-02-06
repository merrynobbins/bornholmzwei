/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PolitikCtrl', function () {
  var ctrl;

  beforeEach(module('politik'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PolitikCtrl');
  }));

  it('should have ctrlName as PolitikCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PolitikCtrl');
  });
});
