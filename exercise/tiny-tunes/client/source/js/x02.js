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
