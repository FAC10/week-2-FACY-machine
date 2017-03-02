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

function updateDom(element, id, parent) {
    //Check to see if the element to which we are appending our newly created
    //element exists
    parent = parent || document.body
    var child = createDomElement(element);
    child.id = id;
    if (document.querySelector('body')) {
        parent.appendChild(child);
    }
    return checkDomUpdated(id);
}

function checkDomUpdated(id) {
    //If the DOM is updated return a boolean value
    var el = document.getElementById(id)
    console.log(el);
    if (el) {
        return true;
    } else {
        return false;
    }
}

var togglePause = function(bool) {
    var isPaused = bool;
    isPaused = !isPaused;
    return function() {
        return isPaused;
    }
}

module.exports = {
    getCurrentSeconds,
    getInitialTime,
    createDomElement,
    togglePause,
}
