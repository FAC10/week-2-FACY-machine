function getCurrentSeconds() {
	var date = new Date();
	return date.getSeconds();
}

var getInitialTime = function() {
	var initialTime = getCurrentSeconds();
	return function() {
		return initialTime;
	}
}();

function createDomElement(element) {
	return document.createElement(element);
}

function domUpdated(element, id, parent) {
	//Check to see if the element to which we are appending our newly created
	//element exists
	parent = parent || document.body
	var child = createDomElement(element);
	child.id = id;
	if (document.querySelector(parent)) {
		parent.appendChild(child);
	}
	checkDomUpdated(id);
}

function checkDomUpdated(id) {
	//If the DOM is updated return a boolean value
	document.getElementById(id) ? true : false;
}

module.exports = {
	getCurrentSeconds,
	getInitialTime,
	createDomElement
}
