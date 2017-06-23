/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Archiv2017Ctrl', function () {
  var ctrl;

  beforeEach(module('archiv2017'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('Archiv2017Ctrl');
  }));

  it('should have ctrlName as Archiv2017Ctrl', function () {
    expect(ctrl.ctrlName).toEqual('Archiv2017Ctrl');
  });
});
