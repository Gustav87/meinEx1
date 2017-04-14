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
