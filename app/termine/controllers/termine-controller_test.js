/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TermineCtrl', function () {
  var ctrl;

  beforeEach(module('termine'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TermineCtrl');
  }));

  it('should have ctrlName as TermineCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TermineCtrl');
  });
});
