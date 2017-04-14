function x01() {
	var text = document.createTextNode('hej världen!');
	var pEl = document.getElementById('step01_hello');
	pEl.appendChild(text);
}

module.exports = x01;
