/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('pageLogo', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/page-logo/page-logo-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<page-logo></page-logo>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().pageLogo.name).toEqual('pageLogo');
  });
});
