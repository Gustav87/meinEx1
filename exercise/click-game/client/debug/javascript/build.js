(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var gameBoard = document.querySelector('.gameBoard');
var colorBox = document.querySelector('.colorBox');
var timeEl = document.querySelector('#time');
var restartGameButton = document.querySelector('button');
var timePenalty = document.querySelector('.timePenalty');

var colorArray = ['blue', 'blue', 'blue', 'red', 'red', 'red', 'yellow', 'yellow', 'yellow'];
var squaresArray = [];
var arrayCopy = [];
var squares = gameBoard.children;
var colorToClick = null;
var intervalId = null;

var tot100 = 0;
var totSec = 0;
var totMin = 0;

populateSquaresArray();
restartGameButton.addEventListener('click', restartGame);
init();

function init() {

	arrayCopy = colorArray.slice();

	squaresArray.forEach(function(square) {
		var selectedColor = selectColor(arrayCopy);
		square.className = selectedColor;
	});

	gameBoard.addEventListener('click', handleBoxClicked);

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

function handleBoxClicked(e) {
	console.log(e.target);
	if (arrayCopy.length === 0) {
		stopTimer();
	}

	if (colorToClick === e.target.className) {
		colorToClick = selectColor(arrayCopy)[0];
		colorBox.className = 'colorBox ' + colorToClick;
		e.target.className = 'grey';
	} else {
		tot100 += 500;
		timePenalty.style.opacity = 1;
		setTimeout(function() {
			timePenalty.style.opacity = 0;
		}, 1000);
	}
}

function startTimer() {
	tot100 = 0;
	totSec = 0;
	totMin = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjcuOC4wL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImNsaWNrLWdhbWUvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG52YXIgZ2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVCb2FyZCcpO1xyXG52YXIgY29sb3JCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3JCb3gnKTtcclxudmFyIHRpbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aW1lJyk7XHJcbnZhciByZXN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG52YXIgdGltZVBlbmFsdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVBlbmFsdHknKTtcclxuXHJcbnZhciBjb2xvckFycmF5ID0gWydibHVlJywgJ2JsdWUnLCAnYmx1ZScsICdyZWQnLCAncmVkJywgJ3JlZCcsICd5ZWxsb3cnLCAneWVsbG93JywgJ3llbGxvdyddO1xyXG52YXIgc3F1YXJlc0FycmF5ID0gW107XHJcbnZhciBhcnJheUNvcHkgPSBbXTtcclxudmFyIHNxdWFyZXMgPSBnYW1lQm9hcmQuY2hpbGRyZW47XHJcbnZhciBjb2xvclRvQ2xpY2sgPSBudWxsO1xyXG52YXIgaW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG52YXIgdG90MTAwID0gMDtcclxudmFyIHRvdFNlYyA9IDA7XHJcbnZhciB0b3RNaW4gPSAwO1xyXG5cclxucG9wdWxhdGVTcXVhcmVzQXJyYXkoKTtcclxucmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XHJcbmluaXQoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG5cdGFycmF5Q29weSA9IGNvbG9yQXJyYXkuc2xpY2UoKTtcclxuXHJcblx0c3F1YXJlc0FycmF5LmZvckVhY2goZnVuY3Rpb24oc3F1YXJlKSB7XHJcblx0XHR2YXIgc2VsZWN0ZWRDb2xvciA9IHNlbGVjdENvbG9yKGFycmF5Q29weSk7XHJcblx0XHRzcXVhcmUuY2xhc3NOYW1lID0gc2VsZWN0ZWRDb2xvcjtcclxuXHR9KTtcclxuXHJcblx0Z2FtZUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm94Q2xpY2tlZCk7XHJcblxyXG5cdGFycmF5Q29weSA9IGNvbG9yQXJyYXkuc2xpY2UoKTtcclxuXHJcblx0Y29sb3JUb0NsaWNrID0gc2VsZWN0Q29sb3IoYXJyYXlDb3B5KVswXTtcclxuXHRjb2xvckJveC5jbGFzc05hbWUgPSAnY29sb3JCb3ggJyArIGNvbG9yVG9DbGljaztcclxuXHRzdGFydFRpbWVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVyblJhbmRvbShoaWdoZXN0VmFsdWUpIHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGlnaGVzdFZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0Q29sb3IoYXJyKSB7XHJcblx0dmFyIHJhbmRvbU51bWJlciA9IHJldHVyblJhbmRvbShhcnIubGVuZ3RoKTtcclxuXHRyZXR1cm4gYXJyLnNwbGljZShyYW5kb21OdW1iZXIsIDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVCb3hDbGlja2VkKGUpIHtcclxuXHRjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcblx0aWYgKGFycmF5Q29weS5sZW5ndGggPT09IDApIHtcclxuXHRcdHN0b3BUaW1lcigpO1xyXG5cdH1cclxuXHJcblx0aWYgKGNvbG9yVG9DbGljayA9PT0gZS50YXJnZXQuY2xhc3NOYW1lKSB7XHJcblx0XHRjb2xvclRvQ2xpY2sgPSBzZWxlY3RDb2xvcihhcnJheUNvcHkpWzBdO1xyXG5cdFx0Y29sb3JCb3guY2xhc3NOYW1lID0gJ2NvbG9yQm94ICcgKyBjb2xvclRvQ2xpY2s7XHJcblx0XHRlLnRhcmdldC5jbGFzc05hbWUgPSAnZ3JleSc7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRvdDEwMCArPSA1MDA7XHJcblx0XHR0aW1lUGVuYWx0eS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRpbWVQZW5hbHR5LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cdFx0fSwgMTAwMCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydFRpbWVyKCkge1xyXG5cdHRvdDEwMCA9IDA7XHJcblx0dG90U2VjID0gMDtcclxuXHR0b3RNaW4gPSAwO1xyXG5cdHZhciBodW5kcmVkcyA9IDA7XHJcblx0dmFyIG1pbnV0ZXMgPSAwO1xyXG5cdHZhciBzZWNvbmRzID0gMDtcclxuXHRpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoaW5jcmVtZW50QW5kRGlzcGxheSwgMTApO1xyXG5cclxuXHRmdW5jdGlvbiBpbmNyZW1lbnRBbmREaXNwbGF5KCkge1xyXG5cdFx0dG90MTAwICs9IDE7XHJcblx0XHR0b3RTZWMgPSBNYXRoLmZsb29yKHRvdDEwMCAvIDEwMCk7XHJcblx0XHR0b3RNaW4gPSBNYXRoLmZsb29yKHRvdFNlYyAvIDYwKTtcclxuXHRcdGh1bmRyZWRzID0gdG90MTAwICUgMTAwO1xyXG5cdFx0c2Vjb25kcyA9IHRvdFNlYyAlIDYwO1xyXG5cdFx0bWludXRlcyA9IHRvdE1pbiAlIDYwO1xyXG5cdFx0dGltZUVsLnRleHRDb250ZW50ID0gbWludXRlcyArICc6JyArIHBhZChzZWNvbmRzKSArICc6JyArIHBhZChodW5kcmVkcyk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYWQodmFsKSB7XHJcblx0cmV0dXJuIHZhbCA+IDkgPyB2YWwgOiAnMCcgKyB2YWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcclxuXHRjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcclxuXHRzdG9wVGltZXIoKTtcclxuXHRpbml0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlU3F1YXJlc0FycmF5KCkge1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0c3F1YXJlc0FycmF5LnB1c2goc3F1YXJlc1tpXSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
