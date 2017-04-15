'use strict';

var randomText = require('./randomText');

var BartBoard = function(board) {
	if (!(this instanceof BartBoard)) {
		return new BartBoard(board);
	}

	var _this = this;
	_this.board = board;
	var text = randomText();
	var i = 0;
	var intervalId = null;

	_this.board.addEventListener('mousedown', outputText);
	document.addEventListener('mouseup', stopInterval);

	function outputText(e) {
		console.log(e);
		intervalId = setInterval(outputTextInner, 5);
	}

	function outputTextInner() {
		_this.board.textContent += text[i];
		i += 1;
		if (i >= text.length) {
			i = 0;
		}
	}

	function stopInterval() {
		clearInterval(intervalId);
	}

};

module.exports = BartBoard;
