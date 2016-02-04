/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('headArea', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/head-area/head-area-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<head-area></head-area>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().headArea.name).toEqual('headArea');
  });
});
