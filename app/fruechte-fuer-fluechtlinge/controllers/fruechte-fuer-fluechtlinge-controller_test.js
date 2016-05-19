/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('0424GartenwerkstattCtrl', function () {
  var ctrl;

  beforeEach(module('0424gartenwerkstatt'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('0424GartenwerkstattCtrl');
  }));

  it('should have ctrlName as 0424GartenwerkstattCtrl', function () {
    expect(ctrl.ctrlName).toEqual('0424GartenwerkstattCtrl');
  });
});
