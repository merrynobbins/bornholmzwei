/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('ArchivCtrl', function () {
  var ctrl;

  beforeEach(module('archiv'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ArchivCtrl');
  }));

  it('should have ctrlName as ArchivCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ArchivCtrl');
  });
});
