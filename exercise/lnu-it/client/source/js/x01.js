(function() {

var x = function() {
	var head = document.querySelector('head');
	var link = document.createElement('link');
	link.href = './stylesheet/style.css';
	link.rel = 'stylesheet';
	head.appendChild(link);
};

module.exports = x;
}());
