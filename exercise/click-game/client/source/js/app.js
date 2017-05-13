
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
