//Time generating functions
function getCurrentTime() {
    var date = new Date();
    return date.getTime();
}

var getElapsedTime = function() {
    var initialTime = getCurrentTime();
    return function() {
        return getCurrentTime() - initialTime;
    }
}();

function mins(elapsedTime) {
    var mins = Math.floor(elapsedTime / (1000 * 60))

    if (mins >= 60) {
        mins = mins % 60;
    }
    if (mins < 10) {
        return '0' + mins;
    }
    return mins;
}

function seconds(elapsedTime) {
    var seconds = Math.floor(elapsedTime / 1000);
    if (seconds >= 60) {
        seconds = seconds % 60;
    }
    if (seconds < 10) {
        return '0' + seconds;
    }
    return seconds
}

function milliseconds(elapsedTime) {
    var milliseconds = (elapsedTime.toString()).slice(-3, -1);
    return milliseconds
}

//Drawing functions
function drawClock() {
    var elapsedTime = getElapsedTime()
    updateDom('js-number', mins(elapsedTime), seconds(elapsedTime), milliseconds(elapsedTime));
    var FrameID = requestAnimationFrame(drawClock)

}

function startAnimation(argument) {
    requestAnimationFrame(drawClock)
}

//Stop and Start functions
var togglePause = function(bool) {
    var isPaused = bool;
    isPaused = !isPaused;
    return function() {
        return isPaused;
    }
}

//DOM Manipulation and checking functions
function createDomElement(element) {
    return document.createElement(element);
}

function updateDom(id, mins, seconds, milliseconds) {
    //Check to see if the element to which we are js-numberending our newly created
    //element exists
    var timeElement = document.querySelector('#js-number');
    timeElement.innerText = `${mins}:${seconds}:${milliseconds}`;
}

//Cannot update the DOM
// function checkDomUpdated(id) {
//     //If the DOM is updated return a boolean value
//     var el = document.getElementById(id)
//     console.log(el);
//     if (el) {
//         return true;
//     } else {
//         return false;
//     }
// }

document.getElementById('js-start').addEventListener('click', startAnimation);

module.exports = {
    getCurrentTime,
    getElapsedTime,
    createDomElement,
    togglePause,
    updateDom
}
