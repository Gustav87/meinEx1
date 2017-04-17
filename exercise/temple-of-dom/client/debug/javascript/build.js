(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// your code here
var results = {};
var numberOfElements = 0;
var numberofAttributes = 0;
var numberofComments = 0;
var numberofTextNodes = 0;

function walkDom(node, fn) {
	fn(node);
	node = node.firstChild;

	while (node) {
		walkDom(node, fn);
		node = node.nextSibling;
	}
}

function storeElement(node) {
	var nodeName = node.nodeName;

	switch (node.nodeType) {
		case 1:
			numberOfElements += 1;
			break;
		case 3:
			numberofTextNodes += 1;
			break;
		case 8:
			numberofComments += 1;
			break;
	}

	if (node.attributes && node.attributes.length > 0) {
		countAttributes(node.attributes);
	}

	if (!results[nodeName]) {
		results[nodeName] = 1;
	} else {
		results[nodeName] += 1;
	}
}

walkDom(document, storeElement);

var finalResults = [
	{
		name: 'element',
		quantity: numberOfElements
	},
	{
		name: 'attribut',
		quantity: numberofAttributes
	},
	{
		name: 'kommentarer',
		quantity: numberofComments
	},
	{
		name: 'textnoder',
		quantity: numberofTextNodes
	}
];

function countAttributes(attributes) {
	for (var i = 0; i < attributes.length; i += 1) {
		numberofAttributes += 1;
	}
}

console.log(finalResults);

var template = document.querySelector('template');
var h3 = template.content.querySelector('h3');
var p = template.content.querySelector('p');
var referenceNode = document.querySelector('p');

finalResults.forEach(function(item) {
	createContent(item);
});

function createContent(item) {
	var name = item.name;
	h3.textContent = 'antal ' + name;
	p.textContent = item.quantity;
	var clone = document.importNode(template.content, true);
	referenceNode.appendChild(clone);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjcuOC4wL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInRlbXBsZS1vZi1kb20vY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIHlvdXIgY29kZSBoZXJlXG52YXIgcmVzdWx0cyA9IHt9O1xudmFyIG51bWJlck9mRWxlbWVudHMgPSAwO1xudmFyIG51bWJlcm9mQXR0cmlidXRlcyA9IDA7XG52YXIgbnVtYmVyb2ZDb21tZW50cyA9IDA7XG52YXIgbnVtYmVyb2ZUZXh0Tm9kZXMgPSAwO1xuXG5mdW5jdGlvbiB3YWxrRG9tKG5vZGUsIGZuKSB7XG5cdGZuKG5vZGUpO1xuXHRub2RlID0gbm9kZS5maXJzdENoaWxkO1xuXG5cdHdoaWxlIChub2RlKSB7XG5cdFx0d2Fsa0RvbShub2RlLCBmbik7XG5cdFx0bm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3RvcmVFbGVtZW50KG5vZGUpIHtcblx0dmFyIG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZTtcblxuXHRzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcblx0XHRjYXNlIDE6XG5cdFx0XHRudW1iZXJPZkVsZW1lbnRzICs9IDE7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRudW1iZXJvZlRleHROb2RlcyArPSAxO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA4OlxuXHRcdFx0bnVtYmVyb2ZDb21tZW50cyArPSAxO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRpZiAobm9kZS5hdHRyaWJ1dGVzICYmIG5vZGUuYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG5cdFx0Y291bnRBdHRyaWJ1dGVzKG5vZGUuYXR0cmlidXRlcyk7XG5cdH1cblxuXHRpZiAoIXJlc3VsdHNbbm9kZU5hbWVdKSB7XG5cdFx0cmVzdWx0c1tub2RlTmFtZV0gPSAxO1xuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdHNbbm9kZU5hbWVdICs9IDE7XG5cdH1cbn1cblxud2Fsa0RvbShkb2N1bWVudCwgc3RvcmVFbGVtZW50KTtcblxudmFyIGZpbmFsUmVzdWx0cyA9IFtcblx0e1xuXHRcdG5hbWU6ICdlbGVtZW50Jyxcblx0XHRxdWFudGl0eTogbnVtYmVyT2ZFbGVtZW50c1xuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2F0dHJpYnV0Jyxcblx0XHRxdWFudGl0eTogbnVtYmVyb2ZBdHRyaWJ1dGVzXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAna29tbWVudGFyZXInLFxuXHRcdHF1YW50aXR5OiBudW1iZXJvZkNvbW1lbnRzXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAndGV4dG5vZGVyJyxcblx0XHRxdWFudGl0eTogbnVtYmVyb2ZUZXh0Tm9kZXNcblx0fVxuXTtcblxuZnVuY3Rpb24gY291bnRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0bnVtYmVyb2ZBdHRyaWJ1dGVzICs9IDE7XG5cdH1cbn1cblxuY29uc29sZS5sb2coZmluYWxSZXN1bHRzKTtcblxudmFyIHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGVtcGxhdGUnKTtcbnZhciBoMyA9IHRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignaDMnKTtcbnZhciBwID0gdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdwJyk7XG52YXIgcmVmZXJlbmNlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcblxuZmluYWxSZXN1bHRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuXHRjcmVhdGVDb250ZW50KGl0ZW0pO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoaXRlbSkge1xuXHR2YXIgbmFtZSA9IGl0ZW0ubmFtZTtcblx0aDMudGV4dENvbnRlbnQgPSAnYW50YWwgJyArIG5hbWU7XG5cdHAudGV4dENvbnRlbnQgPSBpdGVtLnF1YW50aXR5O1xuXHR2YXIgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuXHRyZWZlcmVuY2VOb2RlLmFwcGVuZENoaWxkKGNsb25lKTtcbn1cbiJdfQ==
