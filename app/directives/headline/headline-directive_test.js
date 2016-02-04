/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('headline', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/headline/headline-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<headline></headline>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().headline.name).toEqual('headline');
  });
});
