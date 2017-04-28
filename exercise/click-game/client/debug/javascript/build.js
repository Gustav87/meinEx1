(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var colorArray = ['blue', 'blue', 'blue', 'red', 'red', 'red', 'yellow', 'yellow', 'yellow'];

var container = document.querySelector('.container');
var squaresArray = [];
var squares = container.children;
var colorBox = document.querySelector('.colorBox');
var colorToClick = null;
var timeEl = document.querySelector('#time');
var intervalId = null;
var restartGameButton = document.querySelector('button');
var arrayCopy = [];
var firstInitiate = true;

init();

function init() {

	if (firstInitiate) {
		for (var i = 0; i < squares.length; i += 1) {
			squaresArray.push(squares[i]);
		}
	}

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
	firstInitiate = false;
}

function returnRandom(highestValue) {
	return Math.floor(Math.random() * (highestValue + 1));
}

function selectColor(arr) {
	var randomNumber = returnRandom(arr.length - 1);
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
	var time = 0;
	intervalId = setInterval(incrementAndDisplay, 10);

	function incrementAndDisplay() {
		time += 1;
		timeEl.textContent = time;
	}
}

function stopTimer() {
	clearInterval(intervalId);
}

restartGameButton.addEventListener('click', restartGame);

function restartGame() {
	stopTimer();
	init();
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjcuOC4wL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImNsaWNrLWdhbWUvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbnZhciBjb2xvckFycmF5ID0gWydibHVlJywgJ2JsdWUnLCAnYmx1ZScsICdyZWQnLCAncmVkJywgJ3JlZCcsICd5ZWxsb3cnLCAneWVsbG93JywgJ3llbGxvdyddO1xyXG5cclxudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxudmFyIHNxdWFyZXNBcnJheSA9IFtdO1xyXG52YXIgc3F1YXJlcyA9IGNvbnRhaW5lci5jaGlsZHJlbjtcclxudmFyIGNvbG9yQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yQm94Jyk7XHJcbnZhciBjb2xvclRvQ2xpY2sgPSBudWxsO1xyXG52YXIgdGltZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWUnKTtcclxudmFyIGludGVydmFsSWQgPSBudWxsO1xyXG52YXIgcmVzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxudmFyIGFycmF5Q29weSA9IFtdO1xyXG52YXIgZmlyc3RJbml0aWF0ZSA9IHRydWU7XHJcblxyXG5pbml0KCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cclxuXHRpZiAoZmlyc3RJbml0aWF0ZSkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRcdHNxdWFyZXNBcnJheS5wdXNoKHNxdWFyZXNbaV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXJyYXlDb3B5ID0gY29sb3JBcnJheS5zbGljZSgpO1xyXG5cclxuXHRzcXVhcmVzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihzcXVhcmUpIHtcclxuXHRcdHZhciBzZWxlY3RlZENvbG9yID0gc2VsZWN0Q29sb3IoYXJyYXlDb3B5KTtcclxuXHRcdHNxdWFyZS5jbGFzc05hbWUgPSBzZWxlY3RlZENvbG9yO1xyXG5cdFx0YWRkQ2xpY2tIYW5kbGVyKHNxdWFyZSk7XHJcblx0fSk7XHJcblxyXG5cdGFycmF5Q29weSA9IGNvbG9yQXJyYXkuc2xpY2UoKTtcclxuXHJcblx0Y29sb3JUb0NsaWNrID0gc2VsZWN0Q29sb3IoYXJyYXlDb3B5KVswXTtcclxuXHRjb2xvckJveC5jbGFzc05hbWUgPSAnY29sb3JCb3ggJyArIGNvbG9yVG9DbGljaztcclxuXHRzdGFydFRpbWVyKCk7XHJcblx0Zmlyc3RJbml0aWF0ZSA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5SYW5kb20oaGlnaGVzdFZhbHVlKSB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChoaWdoZXN0VmFsdWUgKyAxKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdENvbG9yKGFycikge1xyXG5cdHZhciByYW5kb21OdW1iZXIgPSByZXR1cm5SYW5kb20oYXJyLmxlbmd0aCAtIDEpO1xyXG5cdHJldHVybiBhcnIuc3BsaWNlKHJhbmRvbU51bWJlciwgMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENsaWNrSGFuZGxlcihlbCkge1xyXG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm94Q2xpY2tlZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUJveENsaWNrZWQoKSB7XHJcblx0aWYgKGFycmF5Q29weS5sZW5ndGggPT09IDApIHtcclxuXHRcdHN0b3BUaW1lcigpO1xyXG5cdH1cclxuXHJcblx0aWYgKGNvbG9yVG9DbGljayA9PT0gdGhpcy5jbGFzc05hbWUpIHtcclxuXHRcdGNvbG9yVG9DbGljayA9IHNlbGVjdENvbG9yKGFycmF5Q29weSlbMF07XHJcblx0XHRjb2xvckJveC5jbGFzc05hbWUgPSAnY29sb3JCb3ggJyArIGNvbG9yVG9DbGljaztcclxuXHRcdHRoaXMuY2xhc3NOYW1lID0gJ2dyZXknO1xyXG5cdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUJveENsaWNrZWQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcclxuXHR2YXIgdGltZSA9IDA7XHJcblx0aW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGluY3JlbWVudEFuZERpc3BsYXksIDEwKTtcclxuXHJcblx0ZnVuY3Rpb24gaW5jcmVtZW50QW5kRGlzcGxheSgpIHtcclxuXHRcdHRpbWUgKz0gMTtcclxuXHRcdHRpbWVFbC50ZXh0Q29udGVudCA9IHRpbWU7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wVGltZXIoKSB7XHJcblx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxufVxyXG5cclxucmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcclxuXHRzdG9wVGltZXIoKTtcclxuXHRpbml0KCk7XHJcbn1cclxuIl19
