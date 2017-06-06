
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
