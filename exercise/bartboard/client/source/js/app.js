(function() {
	var text1 = 'I am lol';
	var text2 = 'Learn javascript';
	var text3 = 'Func no scare';
	var board1 = document.querySelectorAll('.blackboard')[0];
	var board2 = document.querySelectorAll('.blackboard')[1];
	var board3 = document.querySelectorAll('.blackboard')[2];
	var intervalId = null;

	function myClosure(board, text) {
		var i = 0;
		return function() {
			intervalId = setInterval(function() {
				board.textContent += text[i] === ' ' ? ' ' : '';

				board.textContent += text[i];
				i += 1;
				board.textContent += i >= text.length ? ' ' : '';
				i = i >= text.length ? 0 : i;
			}, 1);
		};
	}

	function clear() {
		clearInterval(intervalId);
	}

	var temp = myClosure(board1, text1);
	var temp2 = myClosure(board2, text2);
	var temp3 = myClosure(board3, text3);

	board1.addEventListener('mousedown', temp);
	board2.addEventListener('mousedown', temp2);
	board3.addEventListener('mousedown', temp3);
	document.addEventListener('mouseup', clear);

}());
