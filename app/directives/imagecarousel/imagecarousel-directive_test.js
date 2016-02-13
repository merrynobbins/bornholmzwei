/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('imagecarousel', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/imagecarousel/imagecarousel-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<imagecarousel></imagecarousel>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().imagecarousel.name).toEqual('imagecarousel');
  });
});
