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
