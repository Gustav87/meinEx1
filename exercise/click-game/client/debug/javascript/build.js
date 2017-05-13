(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var container = document.querySelector('.container');
var colorBox = document.querySelector('.colorBox');
var timeEl = document.querySelector('#time');
var restartGameButton = document.querySelector('button');

var colorArray = ['blue', 'blue', 'blue', 'red', 'red', 'red', 'yellow', 'yellow', 'yellow'];
var squaresArray = [];
var arrayCopy = [];
var squares = container.children;
var colorToClick = null;
var intervalId = null;

populateSquaresArray();
init();

function init() {

	arrayCopy = colorArray.slice();

	squaresArray.forEach(function(square) {
		var selectedColor = selectColor(arrayCopy);
		square.className = selectedColor;
		addClickHandler(square);
	});

	arrayCopy = colorArray.slice();

	colorToClick = selectColor(arrayCopy)[0];
	colorBox.className = 'colorBox ' + colorToClick;
	startTimer();
}

function returnRandom(highestValue) {
	return Math.floor(Math.random() * highestValue);
}

function selectColor(arr) {
	var randomNumber = returnRandom(arr.length);
	return arr.splice(randomNumber, 1);
}

function addClickHandler(el) {
	el.addEventListener('click', handleBoxClicked);
}

function handleBoxClicked() {
	if (arrayCopy.length === 0) {
		stopTimer();
	}

	if (colorToClick === this.className) {
		colorToClick = selectColor(arrayCopy)[0];
		colorBox.className = 'colorBox ' + colorToClick;
		this.className = 'grey';
		this.removeEventListener('click', handleBoxClicked);
	}
}

function startTimer() {
	var tot100 = 0;
	var totSec = 0;
	var totMin = 0;
	var hundreds = 0;
	var minutes = 0;
	var seconds = 0;
	intervalId = setInterval(incrementAndDisplay, 10);

	function incrementAndDisplay() {
		tot100 += 1;
		totSec = Math.floor(tot100 / 100);
		totMin = Math.floor(totSec / 60);
		hundreds = tot100 % 100;
		seconds = totSec % 60;
		minutes = totMin % 60;
		timeEl.textContent = minutes + ':' + pad(seconds) + ':' + pad(hundreds);
	}
}

function pad(val) {
	return val > 9 ? val : '0' + val;
}

function stopTimer() {
	clearInterval(intervalId);
}

restartGameButton.addEventListener('click', restartGame);

function restartGame() {
	stopTimer();
	init();
}

function populateSquaresArray() {
	for (var i = 0; i < squares.length; i += 1) {
		squaresArray.push(squares[i]);
	}
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjcuOC4wL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImNsaWNrLWdhbWUvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxudmFyIGNvbG9yQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yQm94Jyk7XHJcbnZhciB0aW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZScpO1xyXG52YXIgcmVzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuXHJcbnZhciBjb2xvckFycmF5ID0gWydibHVlJywgJ2JsdWUnLCAnYmx1ZScsICdyZWQnLCAncmVkJywgJ3JlZCcsICd5ZWxsb3cnLCAneWVsbG93JywgJ3llbGxvdyddO1xyXG52YXIgc3F1YXJlc0FycmF5ID0gW107XHJcbnZhciBhcnJheUNvcHkgPSBbXTtcclxudmFyIHNxdWFyZXMgPSBjb250YWluZXIuY2hpbGRyZW47XHJcbnZhciBjb2xvclRvQ2xpY2sgPSBudWxsO1xyXG52YXIgaW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5wb3B1bGF0ZVNxdWFyZXNBcnJheSgpO1xyXG5pbml0KCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cclxuXHRhcnJheUNvcHkgPSBjb2xvckFycmF5LnNsaWNlKCk7XHJcblxyXG5cdHNxdWFyZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHNxdWFyZSkge1xyXG5cdFx0dmFyIHNlbGVjdGVkQ29sb3IgPSBzZWxlY3RDb2xvcihhcnJheUNvcHkpO1xyXG5cdFx0c3F1YXJlLmNsYXNzTmFtZSA9IHNlbGVjdGVkQ29sb3I7XHJcblx0XHRhZGRDbGlja0hhbmRsZXIoc3F1YXJlKTtcclxuXHR9KTtcclxuXHJcblx0YXJyYXlDb3B5ID0gY29sb3JBcnJheS5zbGljZSgpO1xyXG5cclxuXHRjb2xvclRvQ2xpY2sgPSBzZWxlY3RDb2xvcihhcnJheUNvcHkpWzBdO1xyXG5cdGNvbG9yQm94LmNsYXNzTmFtZSA9ICdjb2xvckJveCAnICsgY29sb3JUb0NsaWNrO1xyXG5cdHN0YXJ0VGltZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0dXJuUmFuZG9tKGhpZ2hlc3RWYWx1ZSkge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBoaWdoZXN0VmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihhcnIpIHtcclxuXHR2YXIgcmFuZG9tTnVtYmVyID0gcmV0dXJuUmFuZG9tKGFyci5sZW5ndGgpO1xyXG5cdHJldHVybiBhcnIuc3BsaWNlKHJhbmRvbU51bWJlciwgMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENsaWNrSGFuZGxlcihlbCkge1xyXG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm94Q2xpY2tlZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUJveENsaWNrZWQoKSB7XHJcblx0aWYgKGFycmF5Q29weS5sZW5ndGggPT09IDApIHtcclxuXHRcdHN0b3BUaW1lcigpO1xyXG5cdH1cclxuXHJcblx0aWYgKGNvbG9yVG9DbGljayA9PT0gdGhpcy5jbGFzc05hbWUpIHtcclxuXHRcdGNvbG9yVG9DbGljayA9IHNlbGVjdENvbG9yKGFycmF5Q29weSlbMF07XHJcblx0XHRjb2xvckJveC5jbGFzc05hbWUgPSAnY29sb3JCb3ggJyArIGNvbG9yVG9DbGljaztcclxuXHRcdHRoaXMuY2xhc3NOYW1lID0gJ2dyZXknO1xyXG5cdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUJveENsaWNrZWQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcclxuXHR2YXIgdG90MTAwID0gMDtcclxuXHR2YXIgdG90U2VjID0gMDtcclxuXHR2YXIgdG90TWluID0gMDtcclxuXHR2YXIgaHVuZHJlZHMgPSAwO1xyXG5cdHZhciBtaW51dGVzID0gMDtcclxuXHR2YXIgc2Vjb25kcyA9IDA7XHJcblx0aW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGluY3JlbWVudEFuZERpc3BsYXksIDEwKTtcclxuXHJcblx0ZnVuY3Rpb24gaW5jcmVtZW50QW5kRGlzcGxheSgpIHtcclxuXHRcdHRvdDEwMCArPSAxO1xyXG5cdFx0dG90U2VjID0gTWF0aC5mbG9vcih0b3QxMDAgLyAxMDApO1xyXG5cdFx0dG90TWluID0gTWF0aC5mbG9vcih0b3RTZWMgLyA2MCk7XHJcblx0XHRodW5kcmVkcyA9IHRvdDEwMCAlIDEwMDtcclxuXHRcdHNlY29uZHMgPSB0b3RTZWMgJSA2MDtcclxuXHRcdG1pbnV0ZXMgPSB0b3RNaW4gJSA2MDtcclxuXHRcdHRpbWVFbC50ZXh0Q29udGVudCA9IG1pbnV0ZXMgKyAnOicgKyBwYWQoc2Vjb25kcykgKyAnOicgKyBwYWQoaHVuZHJlZHMpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGFkKHZhbCkge1xyXG5cdHJldHVybiB2YWwgPiA5ID8gdmFsIDogJzAnICsgdmFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wVGltZXIoKSB7XHJcblx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxufVxyXG5cclxucmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcclxuXHRzdG9wVGltZXIoKTtcclxuXHRpbml0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlU3F1YXJlc0FycmF5KCkge1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0c3F1YXJlc0FycmF5LnB1c2goc3F1YXJlc1tpXSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
