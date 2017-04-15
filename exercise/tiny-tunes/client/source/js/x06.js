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
