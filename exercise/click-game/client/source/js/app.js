
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
