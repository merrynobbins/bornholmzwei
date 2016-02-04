/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('footTeaserImage', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/foot-teaser-image/foot-teaser-image-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<foot-teaser-image></foot-teaser-image>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().footTeaserImage.name).toEqual('footTeaserImage');
  });
});
