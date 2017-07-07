
var numberArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var template = document.querySelector('template');
var images = template.content.querySelectorAll('img');
var board = document.querySelector('.board');

function randomize(num) {
	return Math.floor(Math.random() * num);
}

function insertTemplate() {
	var clone = document.importNode(template.content, true);
	board.appendChild(clone);
}

function init() {
	images.forEach(function(item) {
		var r = randomize(numberArray.length); // 0-15
		item.src = 'image/' + numberArray[r] + '.png';
		numberArray.splice(r, 1);
	});

	insertTemplate();
}

init();
