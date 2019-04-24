/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Archiv2019Ctrl', function() {
  var ctrl;

  beforeEach(module('archiv2019'));

  beforeEach(inject(function($rootScope, $controller) {
    ctrl = $controller('Archiv2019Ctrl');
  }));

  it('should have ctrlName as Archiv2019Ctrl', function() {
    expect(ctrl.ctrlName).toEqual('Archiv2019Ctrl');
  });
});
