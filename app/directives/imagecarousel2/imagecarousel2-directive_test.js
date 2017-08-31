/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('imagecarousel2', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/imagecarousel2/imagecarousel2-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<imagecarousel2></imagecarousel2>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().imagecarousel.name).toEqual('imagecarousel2');
  });
});
