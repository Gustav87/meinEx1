(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./randomText":3}],2:[function(require,module,exports){
'use strict';

var BartBoard = require('./BartBoard');

var board1 = document.querySelectorAll('.blackboard')[0];
var board2 = document.querySelectorAll('.blackboard')[1];
var board3 = document.querySelectorAll('.blackboard')[2];
var board4 = document.querySelectorAll('.blackboard')[3];

var myBoard1 = new BartBoard(board1);
var myBoard2 = BartBoard(board2);
var myBoard3 = new BartBoard(board3);
var myBoard4 = new BartBoard(board4);

console.log(myBoard1);
console.log(myBoard2);
console.log(myBoard3);
console.log(myBoard4);

},{"./BartBoard":1}],3:[function(require,module,exports){
'use strict';

var randomText = function() {
	var text1 = 'I like js';
	var text2 = 'practice makes perfect';
	var text3 = 'construct is fun';
	var text4 = 'I am a monkey';
	var text5 = 'cooking is fun';
	var text6 = 'meatballs ';
	var text7 = 'and coca cola';
	var text8 = 'shoes? ';
	var text9 = 'no way josé';
	var text10 = 'heeej ';

	var textArray = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10];

	var rnd = Math.random();
	console.log(rnd);
	var randomNumber = Math.floor(rnd * 10);
	console.log(randomNumber);

	return textArray[randomNumber];
};

module.exports = randomText;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjcuOC4wL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJhcnRib2FyZC9jbGllbnQvc291cmNlL2pzL0JhcnRCb2FyZC5qcyIsImJhcnRib2FyZC9jbGllbnQvc291cmNlL2pzL2FwcC5qcyIsImJhcnRib2FyZC9jbGllbnQvc291cmNlL2pzL3JhbmRvbVRleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciByYW5kb21UZXh0ID0gcmVxdWlyZSgnLi9yYW5kb21UZXh0Jyk7XHJcblxyXG52YXIgQmFydEJvYXJkID0gZnVuY3Rpb24oYm9hcmQpIHtcclxuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQmFydEJvYXJkKSkge1xyXG5cdFx0cmV0dXJuIG5ldyBCYXJ0Qm9hcmQoYm9hcmQpO1xyXG5cdH1cclxuXHJcblx0dmFyIF90aGlzID0gdGhpcztcclxuXHRfdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG5cdHZhciB0ZXh0ID0gcmFuZG9tVGV4dCgpO1xyXG5cdHZhciBpID0gMDtcclxuXHR2YXIgaW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdF90aGlzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG91dHB1dFRleHQpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wSW50ZXJ2YWwpO1xyXG5cclxuXHRmdW5jdGlvbiBvdXRwdXRUZXh0KGUpIHtcclxuXHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0aW50ZXJ2YWxJZCA9IHNldEludGVydmFsKG91dHB1dFRleHRJbm5lciwgNSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvdXRwdXRUZXh0SW5uZXIoKSB7XHJcblx0XHRfdGhpcy5ib2FyZC50ZXh0Q29udGVudCArPSB0ZXh0W2ldO1xyXG5cdFx0aSArPSAxO1xyXG5cdFx0aWYgKGkgPj0gdGV4dC5sZW5ndGgpIHtcclxuXHRcdFx0aSA9IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzdG9wSW50ZXJ2YWwoKSB7XHJcblx0XHRjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhcnRCb2FyZDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIEJhcnRCb2FyZCA9IHJlcXVpcmUoJy4vQmFydEJvYXJkJyk7XHJcblxyXG52YXIgYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsYWNrYm9hcmQnKVswXTtcclxudmFyIGJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibGFja2JvYXJkJylbMV07XHJcbnZhciBib2FyZDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxhY2tib2FyZCcpWzJdO1xyXG52YXIgYm9hcmQ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsYWNrYm9hcmQnKVszXTtcclxuXHJcbnZhciBteUJvYXJkMSA9IG5ldyBCYXJ0Qm9hcmQoYm9hcmQxKTtcclxudmFyIG15Qm9hcmQyID0gQmFydEJvYXJkKGJvYXJkMik7XHJcbnZhciBteUJvYXJkMyA9IG5ldyBCYXJ0Qm9hcmQoYm9hcmQzKTtcclxudmFyIG15Qm9hcmQ0ID0gbmV3IEJhcnRCb2FyZChib2FyZDQpO1xyXG5cclxuY29uc29sZS5sb2cobXlCb2FyZDEpO1xyXG5jb25zb2xlLmxvZyhteUJvYXJkMik7XHJcbmNvbnNvbGUubG9nKG15Qm9hcmQzKTtcclxuY29uc29sZS5sb2cobXlCb2FyZDQpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgcmFuZG9tVGV4dCA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciB0ZXh0MSA9ICdJIGxpa2UganMnO1xyXG5cdHZhciB0ZXh0MiA9ICdwcmFjdGljZSBtYWtlcyBwZXJmZWN0JztcclxuXHR2YXIgdGV4dDMgPSAnY29uc3RydWN0IGlzIGZ1bic7XHJcblx0dmFyIHRleHQ0ID0gJ0kgYW0gYSBtb25rZXknO1xyXG5cdHZhciB0ZXh0NSA9ICdjb29raW5nIGlzIGZ1bic7XHJcblx0dmFyIHRleHQ2ID0gJ21lYXRiYWxscyAnO1xyXG5cdHZhciB0ZXh0NyA9ICdhbmQgY29jYSBjb2xhJztcclxuXHR2YXIgdGV4dDggPSAnc2hvZXM/ICc7XHJcblx0dmFyIHRleHQ5ID0gJ25vIHdheSBqb3PDqSc7XHJcblx0dmFyIHRleHQxMCA9ICdoZWVlaiAnO1xyXG5cclxuXHR2YXIgdGV4dEFycmF5ID0gW3RleHQxLCB0ZXh0MiwgdGV4dDMsIHRleHQ0LCB0ZXh0NSwgdGV4dDYsIHRleHQ3LCB0ZXh0OCwgdGV4dDksIHRleHQxMF07XHJcblxyXG5cdHZhciBybmQgPSBNYXRoLnJhbmRvbSgpO1xyXG5cdGNvbnNvbGUubG9nKHJuZCk7XHJcblx0dmFyIHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3Iocm5kICogMTApO1xyXG5cdGNvbnNvbGUubG9nKHJhbmRvbU51bWJlcik7XHJcblxyXG5cdHJldHVybiB0ZXh0QXJyYXlbcmFuZG9tTnVtYmVyXTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tVGV4dDtcclxuIl19
