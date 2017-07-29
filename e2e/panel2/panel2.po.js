/* global element, by */
'use strict';

function Panel2Page() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = Panel2Page;
