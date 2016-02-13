/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('buttonChangeSize', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/button-change-size/button-change-size-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<button-change-size></button-change-size>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().buttonChangeSize.name).toEqual('buttonChangeSize');
  });
});
