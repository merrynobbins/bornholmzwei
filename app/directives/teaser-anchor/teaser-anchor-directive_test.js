/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('teaserAnchor', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/teaser-anchor/teaser-anchor-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<teaser-anchor></teaser-anchor>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().teaserAnchor.name).toEqual('teaserAnchor');
  });
});
