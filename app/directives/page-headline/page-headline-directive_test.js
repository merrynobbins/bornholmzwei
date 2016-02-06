/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('pageHeadline', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/page-headline/page-headline-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<page-headline></page-headline>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().pageHeadline.name).toEqual('pageHeadline');
  });
});
