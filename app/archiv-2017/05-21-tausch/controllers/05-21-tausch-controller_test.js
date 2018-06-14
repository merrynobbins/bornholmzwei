/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('C0521tauschCtrl', function () {
  var ctrl;

  beforeEach(module('neuigkeiten'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('NeuigkeitenCtrl');
  }));

  it('should have ctrlName as NeuigkeitenCtrl', function () {
    expect(ctrl.ctrlName).toEqual('NeuigkeitenCtrl');
  });
});
