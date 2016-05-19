/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Archiv2016Ctrl', function () {
  var ctrl;

  beforeEach(module('archiv2016'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Archiv2016Ctrl');
  }));

  it('should have ctrlName as Archiv2016Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Archiv2016Ctrl');
  });
});
