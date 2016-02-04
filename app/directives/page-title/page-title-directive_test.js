/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('pageTitle', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/page-title/page-title-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<page-title></page-title>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().pageTitle.name).toEqual('pageTitle');
  });
});
