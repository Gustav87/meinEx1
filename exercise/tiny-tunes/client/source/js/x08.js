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
