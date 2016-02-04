/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('pageSlogan', function () {
  var scope
    , element;

  beforeEach(module('bornholmZwei', 'directives/page-slogan/page-slogan-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<page-slogan></page-slogan>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().pageSlogan.name).toEqual('pageSlogan');
  });
});
