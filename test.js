"use strict";
var test = require("tape");
var insertCSS = require("insert-css");
var toLayout = require("./");

test("css-layout example", function(t) {
	t.plan(1);

	var htmlText = '<div id="test" class="parent"><div class="child"></div></div>';
	var cssText = ".parent {padding: 50px;} .child {padding: 10px; align-self: stretch}";
	insertCSS(cssText);
	document.body.innerHTML = htmlText;

	var element = document.getElementById("test");

	var result = toLayout(element);

	// Taken from the css-layout example
	// https://github.com/facebook/css-layout#usage
	var expected = {
		"style": {
			"padding": 50
		},
		"children": [{
			"style": {
				"padding": 10,
				"alignSelf": "stretch"
			},
			"children": []
		}]
	};

	t.deepEqual(result, expected, "parsed DOM is the same as the example body");
});
