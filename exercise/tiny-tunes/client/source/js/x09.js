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
