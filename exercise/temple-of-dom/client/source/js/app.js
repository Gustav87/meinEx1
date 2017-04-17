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
