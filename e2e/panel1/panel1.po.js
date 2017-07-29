/* global element, by */
'use strict';

function Panel1Page() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = Panel1Page;
