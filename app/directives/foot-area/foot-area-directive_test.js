/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('footArea', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/foot-area/foot-area-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<foot-area></foot-area>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().footArea.name).toEqual('footArea');
  });
});
