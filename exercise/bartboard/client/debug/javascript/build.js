(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjcuOC4wL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImJhcnRib2FyZC9jbGllbnQvc291cmNlL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xyXG5cdHZhciB0ZXh0MSA9ICdJIGFtIGxvbCc7XHJcblx0dmFyIHRleHQyID0gJ0xlYXJuIGphdmFzY3JpcHQnO1xyXG5cdHZhciB0ZXh0MyA9ICdGdW5jIG5vIHNjYXJlJztcclxuXHR2YXIgYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsYWNrYm9hcmQnKVswXTtcclxuXHR2YXIgYm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsYWNrYm9hcmQnKVsxXTtcclxuXHR2YXIgYm9hcmQzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsYWNrYm9hcmQnKVsyXTtcclxuXHR2YXIgaW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGZ1bmN0aW9uIG15Q2xvc3VyZShib2FyZCwgdGV4dCkge1xyXG5cdFx0dmFyIGkgPSAwO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ym9hcmQudGV4dENvbnRlbnQgKz0gdGV4dFtpXSA9PT0gJyAnID8gJyAnIDogJyc7XHJcblxyXG5cdFx0XHRcdGJvYXJkLnRleHRDb250ZW50ICs9IHRleHRbaV07XHJcblx0XHRcdFx0aSArPSAxO1xyXG5cdFx0XHRcdGJvYXJkLnRleHRDb250ZW50ICs9IGkgPj0gdGV4dC5sZW5ndGggPyAnICcgOiAnJztcclxuXHRcdFx0XHRpID0gaSA+PSB0ZXh0Lmxlbmd0aCA/IDAgOiBpO1xyXG5cdFx0XHR9LCAxKTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjbGVhcigpIHtcclxuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcblx0fVxyXG5cclxuXHR2YXIgdGVtcCA9IG15Q2xvc3VyZShib2FyZDEsIHRleHQxKTtcclxuXHR2YXIgdGVtcDIgPSBteUNsb3N1cmUoYm9hcmQyLCB0ZXh0Mik7XHJcblx0dmFyIHRlbXAzID0gbXlDbG9zdXJlKGJvYXJkMywgdGV4dDMpO1xyXG5cclxuXHRib2FyZDEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGVtcCk7XHJcblx0Ym9hcmQyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRlbXAyKTtcclxuXHRib2FyZDMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGVtcDMpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBjbGVhcik7XHJcblxyXG59KCkpO1xyXG4iXX0=
