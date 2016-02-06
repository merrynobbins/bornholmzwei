/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('FruechteFuerFluechtlingeCtrl', function () {
  var ctrl;

  beforeEach(module('fruechteFuerFluechtlinge'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('FruechteFuerFluechtlingeCtrl');
  }));

  it('should have ctrlName as FruechteFuerFluechtlingeCtrl', function () {
    expect(ctrl.ctrlName).toEqual('FruechteFuerFluechtlingeCtrl');
  });
});
