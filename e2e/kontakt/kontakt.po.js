/* global element, by */
'use strict';

function KontaktPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = KontaktPage;
