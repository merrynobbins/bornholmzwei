/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ImpressumCtrl', function () {
  var ctrl;

  beforeEach(module('impressum'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ImpressumCtrl');
  }));

  it('should have ctrlName as ImpressumCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ImpressumCtrl');
  });
});
