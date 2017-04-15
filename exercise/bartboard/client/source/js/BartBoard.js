'use strict';
var randomText = require('./randomText');
var closure = randomText();

var BartBoard = function() {
	if (!(this instanceof BartBoard)) {
		return new BartBoard();
	}

	var text = closure();
	text = text.trim() + ' ';
	var i = 0;
	var intervalId = null;
	var boardText = '';

	var template = document.querySelector('template');
	var div = document.importNode(template.content.children[0], true);

	div.addEventListener('mousedown', outputText);
	document.addEventListener('mouseup', stopInterval);

	var h1 = document.querySelector('h1');
	h1.parentNode.insertBefore(div, h1.nextSibling);

	function outputText(event) {
		console.log(event);
		intervalId = setInterval(outputTextInner, 20);
	}

	function outputTextInner() {
		boardText = text[i];
		div.textContent += boardText;
		i += 1;
		if (i >= text.length) {
			i = 0;
			boardText = '';
		}
	}

	function stopInterval() {
		clearInterval(intervalId);
	}
};

module.exports = BartBoard;
