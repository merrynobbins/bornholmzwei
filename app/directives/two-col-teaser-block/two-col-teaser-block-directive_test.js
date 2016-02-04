/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('twoColTeaserBlock', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/two-col-teaser-block/two-col-teaser-block-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<two-col-teaser-block></two-col-teaser-block>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().twoColTeaserBlock.name).toEqual('twoColTeaserBlock');
  });
});
