/* global element, by */
'use strict';

function BilderPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = BilderPage;
