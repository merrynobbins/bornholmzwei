/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('imagegallery', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/imagegallery/imagegallery-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<imagegallery></imagegallery>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().imagegallery.name).toEqual('imagegallery');
  });
});
