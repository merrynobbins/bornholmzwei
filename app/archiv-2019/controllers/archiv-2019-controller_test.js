/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Archiv2018Ctrl', function () {
  var ctrl;

  beforeEach(module('archiv2018'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Archiv2018Ctrl');
  }));

  it('should have ctrlName as Archiv2018Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Archiv2018Ctrl');
  });
});
