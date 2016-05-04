"use strict";
var mapDom = require("map-dom");
var getStyle = require("style-to-json");

module.exports = toLayout;

function toLayout(element) {
	return mapDom(element, makeNode);
}

function makeNode(element, children) {
	return {
		style: getStyle(element),
		children: children()
	};
}
