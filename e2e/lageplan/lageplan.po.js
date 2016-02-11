/* global element, by */
'use strict';

function LageplanPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = LageplanPage;
