/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('GalerieCtrl', function () {
  var ctrl;

  beforeEach(module('galerie'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('GalerieCtrl');
  }));

  it('should have ctrlName as GalerieCtrl', function () {
    expect(ctrl.ctrlName).toEqual('GalerieCtrl');
  });
});
