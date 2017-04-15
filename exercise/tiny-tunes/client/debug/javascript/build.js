(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

require('./x01')();
require('./x02')();
require('./x03')();
require('./x04')();
require('./x05')();
require('./x06')();
require('./x07')();
require('./x08')();
require('./x09')();

},{"./x01":2,"./x02":3,"./x03":4,"./x04":5,"./x05":6,"./x06":7,"./x07":8,"./x08":9,"./x09":10}],2:[function(require,module,exports){
function x01() {
	var text = document.createTextNode('hej världen!');
	var pEl = document.getElementById('step01_hello');
	pEl.appendChild(text);
}

module.exports = x01;

},{}],3:[function(require,module,exports){
function x() {
	var text = document.createTextNode('this is a sub heading.');
	var headerEl = document.createElement('h2');
	headerEl.appendChild(text);
	headerEl.setAttribute('style', 'background: yellow;');
	var parent = document.querySelector('#step02');
	var pEl = parent.lastChild;
	pEl.parentNode.insertBefore(headerEl, pEl.nextSibling);

}

module.exports = x;

},{}],4:[function(require,module,exports){
function x() {
	var text = document.createTextNode('this is also a subheadline!');
	var headerEl = document.createElement('h2');
	headerEl.appendChild(text);
	var refNode = document.querySelectorAll('h2')[4];
	refNode.parentNode.insertBefore(headerEl, refNode.nextSibling);
}

module.exports = x;

},{}],5:[function(require,module,exports){
function x() {
	var parent = document.querySelector('#step04');
	var pEl = parent.querySelector('h2');
	pEl.setAttribute('style', 'background: red');
}

module.exports = x;

},{}],6:[function(require,module,exports){
function x() {
	var text = document.createTextNode('you clicked!');
	var pEl = document.createElement('p');
	pEl.appendChild(text);
	var button = document.querySelector('.greybox');
	button.addEventListener('click', function() {
		button.parentNode.insertBefore(pEl, button.nextSibling);
	});
}

module.exports = x;

},{}],7:[function(require,module,exports){
function x() {
	var fragment = new DocumentFragment();
	var ul = document.querySelector('#list06');

	for (var i = 0; i < 10; i += 1) {
		var li = document.createElement('li');
		var text = document.createTextNode('list item ' + (i + 1));
		li.appendChild(text);
		fragment.appendChild(li);
	}

	ul.appendChild(fragment);
}

module.exports = x;

},{}],8:[function(require,module,exports){
function x() {
	var template = document.querySelector('#step07-template');
	var li = template.getElementsByTagName('li');
	console.log(li);
}

module.exports = x;

},{}],9:[function(require,module,exports){
function x() {
	var todolistParent = document.querySelector('#todolist');
	var ul = todolistParent.querySelector('ul');
	var todolistformParent = document.querySelector('#todolistform');
	var inputEl = todolistformParent.querySelector('input');
	var button = todolistformParent.querySelector('button');

	button.addEventListener('click', addListItem);

	function addListItem() {
	if (inputEl.value.length > 0) {
		var text = document.createTextNode(inputEl.value);
		var li = document.createElement('li');
		li.appendChild(text);
		ul.appendChild(li);
		inputEl.value = '';
	}
}

}

module.exports = x;

},{}],10:[function(require,module,exports){
function x() {
	var parent = document.querySelector('#textboxes09');
	var input1 = parent.querySelectorAll('input')[0];
	var input2 = parent.querySelectorAll('input')[1];
	var paragraph = document.querySelector('.validation');

	input1.addEventListener('blur', validateUsername);
	input2.addEventListener('blur', validateUsername);

	function validateUsername() {

		if (input1.value !== input2.value) {
			paragraph.textContent = 'Usernames do not match';
		} else {
			paragraph.textContent = '';
		}

	}
}

module.exports = x;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjcuOC4wL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInRpbnktdHVuZXMvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiLCJ0aW55LXR1bmVzL2NsaWVudC9zb3VyY2UvanMveDAxLmpzIiwidGlueS10dW5lcy9jbGllbnQvc291cmNlL2pzL3gwMi5qcyIsInRpbnktdHVuZXMvY2xpZW50L3NvdXJjZS9qcy94MDMuanMiLCJ0aW55LXR1bmVzL2NsaWVudC9zb3VyY2UvanMveDA0LmpzIiwidGlueS10dW5lcy9jbGllbnQvc291cmNlL2pzL3gwNS5qcyIsInRpbnktdHVuZXMvY2xpZW50L3NvdXJjZS9qcy94MDYuanMiLCJ0aW55LXR1bmVzL2NsaWVudC9zb3VyY2UvanMveDA3LmpzIiwidGlueS10dW5lcy9jbGllbnQvc291cmNlL2pzL3gwOC5qcyIsInRpbnktdHVuZXMvY2xpZW50L3NvdXJjZS9qcy94MDkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbnJlcXVpcmUoJy4veDAxJykoKTtcbnJlcXVpcmUoJy4veDAyJykoKTtcbnJlcXVpcmUoJy4veDAzJykoKTtcbnJlcXVpcmUoJy4veDA0JykoKTtcbnJlcXVpcmUoJy4veDA1JykoKTtcbnJlcXVpcmUoJy4veDA2JykoKTtcbnJlcXVpcmUoJy4veDA3JykoKTtcbnJlcXVpcmUoJy4veDA4JykoKTtcbnJlcXVpcmUoJy4veDA5JykoKTtcbiIsImZ1bmN0aW9uIHgwMSgpIHtcclxuXHR2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdoZWogdsOkcmxkZW4hJyk7XHJcblx0dmFyIHBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwMDFfaGVsbG8nKTtcclxuXHRwRWwuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geDAxO1xyXG4iLCJmdW5jdGlvbiB4KCkge1xyXG5cdHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3RoaXMgaXMgYSBzdWIgaGVhZGluZy4nKTtcclxuXHR2YXIgaGVhZGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5cdGhlYWRlckVsLmFwcGVuZENoaWxkKHRleHQpO1xyXG5cdGhlYWRlckVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogeWVsbG93OycpO1xyXG5cdHZhciBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcDAyJyk7XHJcblx0dmFyIHBFbCA9IHBhcmVudC5sYXN0Q2hpbGQ7XHJcblx0cEVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhlYWRlckVsLCBwRWwubmV4dFNpYmxpbmcpO1xyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB4O1xyXG4iLCJmdW5jdGlvbiB4KCkge1xyXG5cdHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3RoaXMgaXMgYWxzbyBhIHN1YmhlYWRsaW5lIScpO1xyXG5cdHZhciBoZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcblx0aGVhZGVyRWwuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblx0dmFyIHJlZk5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMicpWzRdO1xyXG5cdHJlZk5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaGVhZGVyRWwsIHJlZk5vZGUubmV4dFNpYmxpbmcpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHg7XHJcbiIsImZ1bmN0aW9uIHgoKSB7XHJcblx0dmFyIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwMDQnKTtcclxuXHR2YXIgcEVsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XHJcblx0cEVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogcmVkJyk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geDtcclxuIiwiZnVuY3Rpb24geCgpIHtcclxuXHR2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCd5b3UgY2xpY2tlZCEnKTtcclxuXHR2YXIgcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdHBFbC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuXHR2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZXlib3gnKTtcclxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGJ1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwRWwsIGJ1dHRvbi5uZXh0U2libGluZyk7XHJcblx0fSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geDtcclxuIiwiZnVuY3Rpb24geCgpIHtcclxuXHR2YXIgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cdHZhciB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0MDYnKTtcclxuXHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XHJcblx0XHR2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdFx0dmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnbGlzdCBpdGVtICcgKyAoaSArIDEpKTtcclxuXHRcdGxpLmFwcGVuZENoaWxkKHRleHQpO1xyXG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQobGkpO1xyXG5cdH1cclxuXHJcblx0dWwuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHg7XHJcbiIsImZ1bmN0aW9uIHgoKSB7XHJcblx0dmFyIHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXAwNy10ZW1wbGF0ZScpO1xyXG5cdHZhciBsaSA9IHRlbXBsYXRlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG5cdGNvbnNvbGUubG9nKGxpKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB4O1xyXG4iLCJmdW5jdGlvbiB4KCkge1xyXG5cdHZhciB0b2RvbGlzdFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvbGlzdCcpO1xyXG5cdHZhciB1bCA9IHRvZG9saXN0UGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcblx0dmFyIHRvZG9saXN0Zm9ybVBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvbGlzdGZvcm0nKTtcclxuXHR2YXIgaW5wdXRFbCA9IHRvZG9saXN0Zm9ybVBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cdHZhciBidXR0b24gPSB0b2RvbGlzdGZvcm1QYXJlbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcblxyXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZExpc3RJdGVtKTtcclxuXHJcblx0ZnVuY3Rpb24gYWRkTGlzdEl0ZW0oKSB7XHJcblx0aWYgKGlucHV0RWwudmFsdWUubGVuZ3RoID4gMCkge1xyXG5cdFx0dmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpbnB1dEVsLnZhbHVlKTtcclxuXHRcdHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRsaS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuXHRcdHVsLmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdGlucHV0RWwudmFsdWUgPSAnJztcclxuXHR9XHJcbn1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geDtcclxuIiwiZnVuY3Rpb24geCgpIHtcclxuXHR2YXIgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRib3hlczA5Jyk7XHJcblx0dmFyIGlucHV0MSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpWzBdO1xyXG5cdHZhciBpbnB1dDIgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVsxXTtcclxuXHR2YXIgcGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZhbGlkYXRpb24nKTtcclxuXHJcblx0aW5wdXQxLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB2YWxpZGF0ZVVzZXJuYW1lKTtcclxuXHRpbnB1dDIuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHZhbGlkYXRlVXNlcm5hbWUpO1xyXG5cclxuXHRmdW5jdGlvbiB2YWxpZGF0ZVVzZXJuYW1lKCkge1xyXG5cclxuXHRcdGlmIChpbnB1dDEudmFsdWUgIT09IGlucHV0Mi52YWx1ZSkge1xyXG5cdFx0XHRwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnVXNlcm5hbWVzIGRvIG5vdCBtYXRjaCc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnJztcclxuXHRcdH1cclxuXHJcblx0fVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHg7XHJcbiJdfQ==
