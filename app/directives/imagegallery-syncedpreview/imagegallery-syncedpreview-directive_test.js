/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('imagegallerySyncedpreview', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/imagegallery-syncedpreview/imagegallery-syncedpreview-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<imagegallery-syncedpreview></imagegallery-syncedpreview>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().imagegallerySyncedpreview.name).toEqual('imagegallerySyncedpreview');
  });
});
