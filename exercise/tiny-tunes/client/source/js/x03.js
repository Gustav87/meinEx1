function x() {
	var text = document.createTextNode('this is also a subheadline!');
	var headerEl = document.createElement('h2');
	headerEl.appendChild(text);
	var refNode = document.querySelectorAll('h2')[4];
	refNode.parentNode.insertBefore(headerEl, refNode.nextSibling);
}

module.exports = x;
