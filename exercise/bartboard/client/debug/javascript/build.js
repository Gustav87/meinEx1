(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./randomText":3}],2:[function(require,module,exports){
'use strict';

var BartBoard = require('./BartBoard');

var myBoard1 = new BartBoard();
var myBoard2 = BartBoard();
var myBoard3 = new BartBoard();
var myBoard4 = new BartBoard();
var myBoard5 = new BartBoard();
var myBoard6 = new BartBoard();

console.log(myBoard1, myBoard2, myBoard3, myBoard4, myBoard5, myBoard6);

},{"./BartBoard":1}],3:[function(require,module,exports){
'use strict';

var randomText = function() {

	var text1 = 'I like js';
	var text2 = 'practice makes perfect';
	var text3 = 'construct is fun';
	var text4 = 'I am a monkey';
	var text5 = 'making pasta';
	var text6 = 'meatballs ';
	var text7 = 'and coca cola';
	var text8 = 'shoes? ';
	var text9 = 'no way josé';
	var text10 = 'heeej ';

	var textArray = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10];

	return function() {

		var rnd = Math.random();
		console.log(rnd);
		var randomNumber = Math.floor(rnd * textArray.length);
		console.log(randomNumber);

		var chosenNumber = textArray.splice(randomNumber, 1)[0];

		return chosenNumber;
	};
};

module.exports = randomText;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjcuOC4wL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJhcnRib2FyZC9jbGllbnQvc291cmNlL2pzL0JhcnRCb2FyZC5qcyIsImJhcnRib2FyZC9jbGllbnQvc291cmNlL2pzL2FwcC5qcyIsImJhcnRib2FyZC9jbGllbnQvc291cmNlL2pzL3JhbmRvbVRleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XHJcbnZhciByYW5kb21UZXh0ID0gcmVxdWlyZSgnLi9yYW5kb21UZXh0Jyk7XHJcbnZhciBjbG9zdXJlID0gcmFuZG9tVGV4dCgpO1xyXG5cclxudmFyIEJhcnRCb2FyZCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBCYXJ0Qm9hcmQpKSB7XHJcblx0XHRyZXR1cm4gbmV3IEJhcnRCb2FyZCgpO1xyXG5cdH1cclxuXHJcblx0dmFyIHRleHQgPSBjbG9zdXJlKCk7XHJcblx0dGV4dCA9IHRleHQudHJpbSgpICsgJyAnO1xyXG5cdHZhciBpID0gMDtcclxuXHR2YXIgaW50ZXJ2YWxJZCA9IG51bGw7XHJcblx0dmFyIGJvYXJkVGV4dCA9ICcnO1xyXG5cclxuXHR2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZScpO1xyXG5cdHZhciBkaXYgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRyZW5bMF0sIHRydWUpO1xyXG5cclxuXHRkaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb3V0cHV0VGV4dCk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BJbnRlcnZhbCk7XHJcblxyXG5cdHZhciBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XHJcblx0aDEucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGl2LCBoMS5uZXh0U2libGluZyk7XHJcblxyXG5cdGZ1bmN0aW9uIG91dHB1dFRleHQoZXZlbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHRcdGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChvdXRwdXRUZXh0SW5uZXIsIDIwKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG91dHB1dFRleHRJbm5lcigpIHtcclxuXHRcdGJvYXJkVGV4dCA9IHRleHRbaV07XHJcblx0XHRkaXYudGV4dENvbnRlbnQgKz0gYm9hcmRUZXh0O1xyXG5cdFx0aSArPSAxO1xyXG5cdFx0aWYgKGkgPj0gdGV4dC5sZW5ndGgpIHtcclxuXHRcdFx0aSA9IDA7XHJcblx0XHRcdGJvYXJkVGV4dCA9ICcnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc3RvcEludGVydmFsKCkge1xyXG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhcnRCb2FyZDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIEJhcnRCb2FyZCA9IHJlcXVpcmUoJy4vQmFydEJvYXJkJyk7XHJcblxyXG52YXIgbXlCb2FyZDEgPSBuZXcgQmFydEJvYXJkKCk7XHJcbnZhciBteUJvYXJkMiA9IEJhcnRCb2FyZCgpO1xyXG52YXIgbXlCb2FyZDMgPSBuZXcgQmFydEJvYXJkKCk7XHJcbnZhciBteUJvYXJkNCA9IG5ldyBCYXJ0Qm9hcmQoKTtcclxudmFyIG15Qm9hcmQ1ID0gbmV3IEJhcnRCb2FyZCgpO1xyXG52YXIgbXlCb2FyZDYgPSBuZXcgQmFydEJvYXJkKCk7XHJcblxyXG5jb25zb2xlLmxvZyhteUJvYXJkMSwgbXlCb2FyZDIsIG15Qm9hcmQzLCBteUJvYXJkNCwgbXlCb2FyZDUsIG15Qm9hcmQ2KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHJhbmRvbVRleHQgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0dmFyIHRleHQxID0gJ0kgbGlrZSBqcyc7XHJcblx0dmFyIHRleHQyID0gJ3ByYWN0aWNlIG1ha2VzIHBlcmZlY3QnO1xyXG5cdHZhciB0ZXh0MyA9ICdjb25zdHJ1Y3QgaXMgZnVuJztcclxuXHR2YXIgdGV4dDQgPSAnSSBhbSBhIG1vbmtleSc7XHJcblx0dmFyIHRleHQ1ID0gJ21ha2luZyBwYXN0YSc7XHJcblx0dmFyIHRleHQ2ID0gJ21lYXRiYWxscyAnO1xyXG5cdHZhciB0ZXh0NyA9ICdhbmQgY29jYSBjb2xhJztcclxuXHR2YXIgdGV4dDggPSAnc2hvZXM/ICc7XHJcblx0dmFyIHRleHQ5ID0gJ25vIHdheSBqb3PDqSc7XHJcblx0dmFyIHRleHQxMCA9ICdoZWVlaiAnO1xyXG5cclxuXHR2YXIgdGV4dEFycmF5ID0gW3RleHQxLCB0ZXh0MiwgdGV4dDMsIHRleHQ0LCB0ZXh0NSwgdGV4dDYsIHRleHQ3LCB0ZXh0OCwgdGV4dDksIHRleHQxMF07XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHR2YXIgcm5kID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdGNvbnNvbGUubG9nKHJuZCk7XHJcblx0XHR2YXIgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihybmQgKiB0ZXh0QXJyYXkubGVuZ3RoKTtcclxuXHRcdGNvbnNvbGUubG9nKHJhbmRvbU51bWJlcik7XHJcblxyXG5cdFx0dmFyIGNob3Nlbk51bWJlciA9IHRleHRBcnJheS5zcGxpY2UocmFuZG9tTnVtYmVyLCAxKVswXTtcclxuXHJcblx0XHRyZXR1cm4gY2hvc2VuTnVtYmVyO1xyXG5cdH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbVRleHQ7XHJcbiJdfQ==
